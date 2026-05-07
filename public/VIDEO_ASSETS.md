# Video Assets — Consensus 2026

## Primary Videos
1. Miami Drone: https://cdn.muapi.ai/outputs/9f3d54aa24c14839bdff1ccfae881508.mp4
2. AgentPay Hero: https://cdn.muapi.ai/outputs/0bf67131c36b44838bb09aac61def522.mp4  
3. Agent Studio: https://cdn.muapi.ai/outputs/40a295da47984436bddb53da6f31f638.mp4
4. Demo Reel: /videos/consensus_demo_reel.mp4 (20s concatenated)

## MuAPI Usage
- Upload: POST /api/v1/upload_file → cdn.muapi.ai/outputs/{id}.{ext}
- Generate: POST /api/v1/{model} with public image URL
- Poll: GET /api/v1/predictions/{id}/result
- Key: x-api-key header (not Bearer)
