# Software Requirements Specification (SRS)

## TruthLens — An Evidence-Based AI Platform for Misinformation and Synthetic Media Analysis

**Course:** Web Programming & Mobile Applications Development Project/Fieldwork  
**Document Version:** 1.0  
**Date:** 2026-08-17

---

## 1. Project Definition

### 1.1 Project Name
**TruthLens**

### 1.2 Full Title
**TruthLens — An Evidence-Based AI Platform for Misinformation and Synthetic Media Analysis**

### 1.3 Vision
TruthLens aims to provide users with an AI-powered platform capable of analyzing **textual claims, images, and videos** and generating evidence-based, confidence-oriented assessments. The platform will **not claim absolute truth or falsity**. Instead, it will communicate **confidence/likelihood together with evidence or analytical reasoning**.

---

## 2. Problem Statement

The rapid growth of online information and generative AI has made it increasingly difficult for users to distinguish trustworthy information from potentially misleading claims and synthetic media.

### Users May Encounter:
- False factual claims
- Misleading information
- AI-generated images
- Manipulated videos
- Deepfake-style content
- Synthetic media presented as authentic

### Current Limitations:
Existing detection systems are often specialized for a single modality and may provide limited explanations to ordinary users.

### Solution:
TruthLens will provide a unified platform for:
- **Text verification** + **Image synthetic-media analysis** + **Video manipulation analysis**  
while presenting results in an **understandable and evidence-oriented manner**.

---

## 3. Project Objectives

### Main Objective
To develop an evidence-based AI web platform capable of analyzing textual claims, images, and videos and providing confidence-oriented assessments with understandable supporting evidence or explanations.

### Specific Objectives

1. Develop a text-based factual claim verification module.
2. Develop an AI-generated image analysis module.
3. Develop a video manipulation/synthetic-media analysis module.
4. Integrate the three modules into a unified web application.
5. Provide confidence or likelihood scores.
6. Provide evidence/reasoning behind analysis results.
7. Evaluate the individual models using established benchmark datasets.
8. Design a modular architecture that supports future expansion.
9. Provide an accessible interface for non-technical users.
10. Establish a foundation for future multimodal misinformation analysis.

---

## 4. Project Scope

### ✅ INCLUDED in MVP

#### 📝 Text
Users can submit factual claims.

**Example:**
- Input: "The Earth revolves around the Sun."
- Output:
  - **Assessment:** Supported
  - **Confidence:** 95%
  - **Evidence:** Wikipedia, scientific sources
  - **Explanation:** Clear astronomical evidence supports this claim

#### 🖼️ Image
Users can upload images. TruthLens analyzes characteristics associated with AI-generated imagery.

**Example:**
- **AI-generation likelihood:** 87%
- **Confidence:** High
- **Analysis signals:** Artifact detection, frequency domain analysis

#### 🎥 Video
Users can upload videos. TruthLens analyzes visual characteristics associated with manipulated/synthetic video content.

**Example:**
- **Manipulation likelihood:** 82%
- **Confidence:** Medium-High
- **Detected signals:** Facial anomalies, temporal inconsistencies

---

## 5. Explicitly Out of Scope for MVP

We deliberately exclude the following to protect against scope creep:

- ❌ Audio deepfake detection
- ❌ Voice cloning detection
- ❌ Universal misinformation detection
- ❌ Complete internet-wide fact checking
- ❌ Every form of image manipulation detection
- ❌ Every form of video manipulation detection
- ❌ Training enormous state-of-the-art models
- ❌ Processing entire massive datasets
- ❌ Mobile application in the initial MVP

**Note:** These features can be added in TruthLens 2.0.

---

## 6. Most Important Design Principle

### ⚠️ Confidence-Based Assessment (Not Absolute Claims)

TruthLens should **NOT** claim:
```
"This is definitely fake."
```

Instead, TruthLens should communicate:

```
TEXT:
  Supported — Confidence 94%

IMAGE:
  AI-generation likelihood — 87%

VIDEO:
  Manipulation likelihood — 82%

Then add:
"This result is a probabilistic AI assessment and should not be considered definitive proof."
```

**This should become one of our core system requirements.**

---

## 7. Dataset Strategy

We have deliberately chosen **one primary dataset per modality**.

### Dataset 1 — FEVER (Fact Extraction and VERification)

**Purpose:** Textual factual claim verification

**Labels:**
- Supported
- Refuted
- Not Enough Information

**Evidence:** Wikipedia-based evidence

**Role in TruthLens:** Training/evaluation foundation for the text verification module

---

### Dataset 2 — GenImage

**Purpose:** AI-generated image detection

**Contains:** Real and AI-generated images produced using multiple generative models

**Role:** Training/evaluation foundation for the image analysis module

**Hardware Strategy:**
- Intel i5 processor
- 8 GB RAM
- ~2 GB NVIDIA/shared graphics
- **We will NOT process the entire dataset**
- We will initially select a manageable subset and increase it only if our system can handle it

---

### Dataset 3 — FaceForensics++

**Purpose:** Video manipulation/deepfake detection

**Contains:** Real and manipulated facial videos

**Role:** Training/evaluation foundation for the video analysis module

**Hardware Strategy:** Manageable subset approach

**Video Processing Pipeline:**
```
Video
  ↓
Selected Frames
  ↓
Image-based analysis
  ↓
Frame Scores
  ↓
Score Aggregation
  ↓
Video-level likelihood
```

This is much more realistic for our hardware than training a huge video model.

---

## 8. High-Level System Architecture

```
                          USER
                          │
                ┌─────────┼─────────┐
                │         │         │
                ▼         ▼         ▼
              TEXT      IMAGE      VIDEO
                │         │         │
                ▼         ▼         ▼
          Preprocessing Preprocessing Preprocessing
                │         │         │
                ▼         ▼         ▼
              FEVER   GenImage FaceForensics++
                │         │         │
                ▼         ▼         ▼
          Claim        AI Image   Video
        Verification   Detection  Manipulation
                       Detection
                │         │         │
                └─────────┼─────────┘
                          ▼
                    RESULT ENGINE
                          │
                ┌─────────┼─────────┐
                ▼         ▼         ▼
            Evidence  Confidence Explanation
                │         │         │
                └─────────┼─────────┘
                          ▼
                    TRUTHLENS UI
```

---

## 9. Team Roles and Responsibilities

### Project Manager / Team Lead
- Project coordination
- Requirements management
- Architecture oversight
- GitHub repository management
- Integration coordination

### NLP/ML Developer (Text Module)
- FEVER dataset preprocessing
- Text claim verification model development
- Evidence retrieval implementation
- Module evaluation and testing

### Computer Vision Developer (Image Module)
- GenImage dataset preprocessing
- Image feature extraction
- AI-generated image detection model
- Image analysis evaluation

### Video/Computer Vision Developer (Video Module)
- FaceForensics++ dataset preprocessing
- Frame extraction pipeline
- Video manipulation detection model
- Video analysis evaluation and aggregation

### Full-Stack Developer
- React frontend development
- FastAPI backend implementation
- API integration and orchestration
- Database design and management

### UI/UX & Documentation Specialist
- Interface design and usability
- User experience optimization
- Project documentation
- Testing and quality assurance
- Presentation and demonstration

---

## 10. Functional Requirements

### Text Analysis

**FR-01 — Text Input**
The system shall allow users to submit textual factual claims.

**FR-02 — Text Processing**
The system shall preprocess submitted textual claims (normalization, tokenization, etc.).

**FR-03 — Claim Verification**
The system shall analyze submitted claims using the text verification module (FEVER-based).

**FR-04 — Evidence**
The system shall provide relevant evidence where available.

**FR-05 — Text Confidence**
The system shall provide a confidence score for the verification result.

### Image Analysis

**FR-06 — Image Upload**
The system shall allow users to upload supported image files (JPG, PNG, etc.).

**FR-07 — Image Analysis**
The system shall analyze uploaded images for characteristics associated with AI-generated content.

**FR-08 — Image Likelihood**
The system shall provide an AI-generation likelihood score.

**FR-09 — Image Explanation**
The system shall provide understandable analytical signals where possible.

### Video Analysis

**FR-10 — Video Upload**
The system shall allow users to upload supported video files (MP4, AVI, MOV, etc.).

**FR-11 — Video Processing**
The system shall extract and process selected frames from uploaded videos.

**FR-12 — Video Analysis**
The system shall analyze video frames for characteristics associated with manipulated/synthetic media.

**FR-13 — Video Likelihood**
The system shall generate a video manipulation likelihood score.

### General Requirements

**FR-14 — Unified Results**
The system shall present analysis results in a consistent, unified interface.

**FR-15 — Error Handling**
The system shall handle invalid inputs, unsupported files, corrupted media, and processing errors gracefully.

---

## 11. Non-Functional Requirements

### Performance
- The system should provide results within a reasonable time for supported inputs.
- Text analysis: < 5 seconds
- Image analysis: < 10 seconds
- Video analysis: < 30 seconds (depending on video length)

### Usability
- The interface should be understandable to non-technical users.
- All results should be presented with clear explanations and visualizations.

### Reliability
- The system should handle invalid inputs without crashing.
- The system should maintain uptime > 95%.

### Security
- Uploaded files should be validated before processing.
- No sensitive user data should be stored beyond the analysis session.
- All uploaded files should be securely deleted after processing.

### Maintainability
- The system should use modular components.
- Code should follow established style guides and best practices.
- Components should be independently testable.

### Scalability
- The architecture should allow future expansion to new modalities.
- The system should support adding new datasets and models.

### Explainability
- The system should provide understandable reasons/signals rather than only a numerical result.
- All confidence scores should be accompanied by supporting evidence.

---

## 12. Technology Stack

### Frontend
- **React** — UI framework
- **Tailwind CSS** — Styling and responsive design

### Backend
- **Python** — Programming language
- **FastAPI** — Web framework and API

### Machine Learning
- **PyTorch** — Deep learning framework
- **Transformers** — Pre-trained models for NLP
- **torchvision** — Computer vision utilities
- **scikit-learn** — ML utilities and metrics
- **OpenCV** — Video processing
- **Pillow** — Image processing

### Database
- **SQLite** — Initial implementation
- **PostgreSQL** — Future upgrade for scalability

### Development Tools
- **Git** — Version control
- **GitHub** — Repository hosting
- **VS Code** — IDE
- **Python virtual environment** — Dependency isolation

---

## 13. GitHub Repository Structure

```
TruthLens/
│
├── backend/
│   ├── app/
│   ├── models/
│   ├── routes/
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── ml/
│   ├── text/
│   │   ├── preprocessing.py
│   │   ├── model.py
│   │   └── evaluation.py
│   ├── image/
│   │   ├── preprocessing.py
│   │   ├── model.py
│   │   └── evaluation.py
│   └── video/
│       ├── preprocessing.py
│       ├── model.py
│       └── evaluation.py
│
├── datasets/
│   ├── fever/
│   ├── genimage/
│   └── faceforensics/
│
├── experiments/
│   ├── text_experiments/
│   ├── image_experiments/
│   └── video_experiments/
│
├── notebooks/
│   ├── eda_fever.ipynb
│   ├── eda_genimage.ipynb
│   └── eda_faceforensics.ipynb
│
├── tests/
│   ├── test_text_module.py
│   ├── test_image_module.py
│   └── test_video_module.py
│
├── docs/
│   └── SRS.md
│
├── README.md
├── CONTRIBUTING.md
├── requirements.txt
├── .gitignore
└── LICENSE
```

---

## 14. Git Workflow

### Branch Strategy
```
main (production)
  │
  └── develop
       │
       ├── feature/text-module
       ├── feature/image-module
       ├── feature/video-module
       ├── feature/backend
       └── feature/frontend
```

### Standard Workflow
1. Create feature branch from `develop`
2. Develop and test changes locally
3. Commit with conventional messages
4. Push to remote and create Pull Request
5. Code review by team members
6. Merge to `develop` after approval
7. Periodically merge `develop` → `main` for releases

**Important:** No direct pushes to `main` branch.

---

## 15. Commit Convention

### Format
Use semantic commit messages:

```
feat: add FEVER preprocessing pipeline
feat: add image upload API endpoint
feat: add video frame extraction module
fix: resolve image validation error
fix: handle null evidence gracefully
docs: update SRS with architecture diagrams
test: add text verification unit tests
refactor: reorganize ML service structure
```

### Avoid
- `final`, `final2`, `final_final`
- `update`, `new`, `test123`
- Non-descriptive messages

---

## 16. Contributing Guidelines

### Contribution Rules

1. **Do not directly push to main** — All changes require pull requests
2. **Create a feature branch** — Use descriptive names: `feature/text-preprocessing`
3. **Make focused commits** — Each commit should represent one logical change
4. **Test changes before PR** — All code must pass local tests
5. **Review another member's PR** — Peer review is mandatory
6. **Update documentation** — Keep README and SRS up-to-date
7. **Do not upload large datasets** — Use `.gitignore` for data files
8. **Do not upload model checkpoints** — Store these separately
9. **Never commit API keys/passwords** — Use environment variables
10. **Keep code organized** — Follow folder structure conventions

---

## 17. AI-Assisted Development Policy

**Note:** This assignment specifically asks for AI-assisted requirement writing. We document this transparently.

### AI Tools May Assist With:
- Requirement drafting and refinement
- Technical documentation
- Code suggestions and debugging
- Test case generation
- README generation
- Task decomposition and planning
- Code review and optimization

### Important Requirement:
**All AI-assisted outputs will be reviewed, modified where necessary, tested, and validated by the project team.**

This is the academically responsible way to describe AI usage in academic projects.

---

## 18. Functional Requirements Traceability Matrix

| ID | Requirement | Module | Priority | Status |
|---|---|---|---|---|
| FR-01 | Text input acceptance | Text | High | Not Started |
| FR-02 | Text preprocessing | Text | High | Not Started |
| FR-03 | Claim verification | Text | High | Not Started |
| FR-04 | Evidence provision | Text | High | Not Started |
| FR-05 | Text confidence score | Text | High | Not Started |
| FR-06 | Image upload | Image | High | Not Started |
| FR-07 | Image analysis | Image | High | Not Started |
| FR-08 | Image likelihood | Image | High | Not Started |
| FR-09 | Image explanation | Image | Medium | Not Started |
| FR-10 | Video upload | Video | High | Not Started |
| FR-11 | Video processing | Video | High | Not Started |
| FR-12 | Video analysis | Video | High | Not Started |
| FR-13 | Video likelihood | Video | High | Not Started |
| FR-14 | Unified results UI | Web | High | Not Started |
| FR-15 | Error handling | System | High | Not Started |

---

## 19. Future Scope — TruthLens 2.0

The SRS provides a foundation for future expansion:

### Planned Enhancements
- Audio and voice deepfake detection
- More sophisticated video analysis (temporal coherence, lip-sync analysis)
- Image manipulation detection (beyond AI-generation)
- Multimodal image-text verification (cross-modal consistency)
- Real-time evidence retrieval from multiple sources
- Technology-specific misinformation detection
- Mobile application (iOS/Android)
- Support for additional datasets and languages
- Ensemble methods combining multiple models

---

## 20. Success Criteria

### MVP Success Criteria
1. Text module achieves ≥ 85% accuracy on FEVER validation set
2. Image module achieves ≥ 80% accuracy on GenImage validation set
3. Video module achieves ≥ 75% accuracy on FaceForensics++ validation set
4. Web interface is responsive and accessible to non-technical users
5. All three modalities integrated and functioning
6. Results presented with confidence scores and explanations
7. System handles invalid inputs without crashing
8. Documentation is complete and comprehensive

---

## 21. Approval and Sign-Off

| Role | Name | Date | Signature |
|---|---|---|---|
| Project Manager | [TBD] | [TBD] | [TBD] |
| Technical Lead | [TBD] | [TBD] | [TBD] |
| Stakeholder/Instructor | [TBD] | [TBD] | [TBD] |

---

## 22. Document History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2026-08-17 | TruthLens Team | Initial SRS creation |

---

**Document End**
