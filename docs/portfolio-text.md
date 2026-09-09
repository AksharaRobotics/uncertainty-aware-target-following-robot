# Portfolio Text

## Project title

Uncertainty-Aware Autonomous Target-Following Robot

## Short portfolio summary

Built a browser-based robotics simulation where a mobile robot follows a moving target under noisy and partially observable sensing. Implemented a 4-state Kalman filter for target state estimation, A* path planning for obstacle-aware navigation, Dijkstra comparison, dynamic obstacle handling, controlled experiment logging, and failure-case analysis.

## Application description

The project models a robot that follows an assigned target in a cluttered indoor environment. The robot receives noisy camera-like measurements, but the target can be lost due to occlusion, camera range limits, or obstacle line-of-sight blocking. A 4-state Kalman filter estimates the target position and velocity during both visible and temporarily lost states. The robot then uses A* path planning to navigate around static and dynamic obstacles, while Dijkstra is used as a baseline planner for comparison.

## Key skills shown

- State estimation
- Kalman filtering
- Path planning
- A* and Dijkstra comparison
- Obstacle avoidance
- Dynamic replanning
- Failure-case analysis
- Quantitative experiment logging
