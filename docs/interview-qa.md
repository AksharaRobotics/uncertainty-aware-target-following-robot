# Interview Q&A

## What is the project about?

The project is a browser-based robotics simulation where a robot follows a moving target under sensing uncertainty, occlusion, line-of-sight blocking, and obstacle constraints.

## Why use a Kalman filter?

The camera-like measurement is noisy and sometimes unavailable. The Kalman filter combines a motion model with available measurements. When the target is visible, it corrects the estimate. When the target is lost, it predicts using estimated velocity.

## What is the Kalman state?

The state is `[x, y, vx, vy]`, representing target position and velocity.

## Why use A*?

A* plans a safe route from the robot to the estimated target position while avoiding obstacles. It is efficient because it uses a heuristic toward the goal.

## Why compare with Dijkstra?

Dijkstra is used as a baseline. It expands more broadly, while A* is goal-directed. Comparing path length, planning time, and explored nodes shows the efficiency difference.

## Why add line-of-sight blocking?

A real camera cannot see through opaque obstacles. Line-of-sight checking prevents unrealistic target measurements when a wall is between the robot and target.

## What are the limitations?

It is a 2D simulation, obstacles are simplified, sensing is modeled rather than full computer vision, and there is no real hardware or ROS integration yet.

## What future work would you add?

Real camera/OpenCV validation, ROS 2/Webots implementation, SLAM, multi-target tracking, crowd-aware navigation, and hardware deployment.
