"""
TruthLens FastAPI Main Application
Entry point for the backend server
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import text_routes, image_routes, video_routes

# Initialize FastAPI app
app = FastAPI(
    title="TruthLens API",
    description="Evidence-Based AI Platform for Misinformation Detection",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(text_routes.router)
app.include_router(image_routes.router)
app.include_router(video_routes.router)

@app.get("/")
async def root():
    """Root endpoint - health check"""
    return {
        "message": "TruthLens API is running",
        "status": "operational",
        "version": "1.0.0"
    }

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
