# Project Notes

## Problem

A mobile robot must follow a moving target in a 2D environment. The robot receives noisy camera-like target measurements. The target can become temporarily invisible due to occlusion, range limits, or obstacle line-of-sight blockage. The robot must estimate the target state and plan a safe path around obstacles while respecting realistic movement constraints.

## Pipeline

1. Generate target motion.
2. Check whether the target is visible to the camera model.
3. Generate noisy measurement when visible.
4. Acquire target after first valid detection.
5. Estimate target state using a 4-state Kalman filter.
6. Plan path using A*.
7. Compare A* with Dijkstra.
8. Move robot using constrained controller.
9. Record metrics and failure cases.

## Main evaluation metrics

- Tracking RMSE
- Mean tracking error
- Detection rate
- Line-of-sight blocked rate
- A* planning time
- Dijkstra planning time
- A* explored nodes
- Dijkstra explored nodes
- Collision count
- Dynamic replans
