# Demo Script

## 1-minute demo flow

1. Start with the main simulation.
   - Explain red = true target, orange = noisy camera measurement, green = Kalman estimate, blue = robot.

2. Increase sensor noise.
   - Show that the camera measurement becomes unstable while the Kalman estimate remains smoother.

3. Show line-of-sight blocking.
   - Place robot and target on opposite sides of an obstacle.
   - Explain that the camera cannot see through the obstacle and the Kalman filter predicts during measurement loss.

4. Show A* path planning.
   - The robot plans around obstacles instead of moving directly through them.

5. Show A* vs Dijkstra comparison.
   - Explain that Dijkstra is the baseline and A* is goal-directed.

6. Enable dynamic obstacles.
   - Show replanning when moving obstacles interfere with the path.

7. Show failure lab.
   - Demonstrate target loss, high error, dense obstacle stress, or slow robot behavior.

8. Show controlled experiments.
   - Export summary CSV and frame-level CSV.

## Closing explanation

This project integrates uncertainty-aware sensing, Kalman state estimation, path planning, robot control, dynamic obstacle handling, and quantitative evaluation into one simulation.
