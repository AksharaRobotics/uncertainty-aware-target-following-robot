# Uncertainty-Aware Autonomous Target-Following Robot

A browser-based robotics simulation for autonomous target following under sensing uncertainty, obstacle constraints, and dynamic environment changes.

The system models a mobile robot that follows a moving target using noisy camera-like measurements. A 4-state Kalman filter estimates the target state, A* plans a collision-aware route around obstacles, and Dijkstra is used as a baseline planner comparison. The simulation also includes line-of-sight blocking, dynamic obstacles, controlled experiment logging, and failure-case analysis.

---

## Project Overview

Target following is a common robotics problem in assistive robots, warehouse robots, hospital support robots, luggage-following robots, and indoor mobile robots. In practical settings, a robot cannot assume perfect target location. Sensor measurements may be noisy, the target may temporarily disappear, obstacles may block visibility, and the robot may face motion limits.

This project simulates those challenges in a 2D environment and evaluates how estimation, planning, and control work together in a target-following pipeline.

---

## Core Robotics Pipeline

```text
Moving Target
    ↓
Camera-like Sensor Model
    ↓
Visibility, Range, and Line-of-Sight Check
    ↓
Noisy Target Measurement
    ↓
Target Acquisition
    ↓
4-State Kalman Filter [x, y, vx, vy]
    ↓
A* Path Planning Around Obstacles
    ↓
Robot Motion Controller
    ↓
Experiment Metrics and Failure Analysis
```

The simulator knows the ground-truth target position for evaluation, but the robot does not directly use the true position. The robot acts on noisy measurements and filtered estimates.

---

## Key Features

### 1. Camera-Like Sensing

- Configurable sensor noise.
- Camera range limitation.
- Target acquisition logic.
- Temporary target loss.
- Line-of-sight blocking by obstacles.
- Prediction-only behavior when the target is not visible.

### 2. Kalman-Based State Estimation

The estimator tracks the target using a 4-state model:

```text
State = [x, y, vx, vy]
```

The Kalman filter predicts target motion and corrects the estimate whenever a new camera-like measurement is available.

### 3. Obstacle-Aware Path Planning

- Static obstacle maps.
- A* path planning for robot navigation.
- Dijkstra planner used as a comparison baseline.
- Path length, planning time, and explored-node metrics.
- Dynamic replanning when the environment changes.

### 4. Realistic Robot Motion

- Maximum velocity limit.
- Acceleration limit.
- Turning-rate limit.
- Safe following distance.
- Collision monitoring.

### 5. Dynamic Obstacles

The environment can include moving obstacles that force the robot to replan during target following.

### 6. Failure-Case Analysis

The system identifies and reports difficult operating conditions such as:

- target not acquired,
- target outside camera range,
- line-of-sight blocked,
- no valid path,
- robot stuck near obstacles,
- high tracking error,
- slow robot response.

---

## Scenario Library

The interface includes predefined scenarios for repeatable evaluation.

| Scenario | Purpose |
|---|---|
| `baseline` | Normal reference run for target following |
| `high_noise` | Evaluates Kalman robustness under high sensor noise |
| `line_of_sight_blocked` | Tests camera visibility when an obstacle blocks the target |
| `dense_obstacles` | Evaluates planner behavior in a cluttered map |
| `dynamic_obstacles` | Tests replanning when obstacles move |
| `slow_robot` | Demonstrates tracking limitations when the robot is slower than required |

Each scenario automatically configures the robot position, target position, sensor noise, camera range, obstacle density, dynamic obstacle state, and trial name.

---

## Metrics Logged

The experiment system records both summary-level and frame-level metrics.

### Target Tracking Metrics

- Tracking error
- Mean tracking error
- Tracking RMSE
- Detection rate
- Line-of-sight blocked rate
- Frames since last detection

### Estimation Metrics

- Raw measurement error
- Moving average error
- Kalman filter error
- Estimator RMSE comparison
- Prediction error during target loss

### Planning Metrics

- A* path status
- A* path length
- A* planning time
- A* explored nodes
- Dijkstra path status
- Dijkstra path length
- Dijkstra planning time
- Dijkstra explored nodes
- A* node-saving percentage compared with Dijkstra

### Control and Failure Metrics

- Robot speed
- Dynamic replan count
- Collision count
- Failure severity
- Failure cause
- Suggested mitigation

---

## Analytics Dashboard

The project includes an analytics dashboard for reviewing system performance.

Dashboard sections include:

- live performance snapshot,
- estimator comparison graphs,
- target and robot position graphs,
- A* and Dijkstra planner comparison,
- saved trial table,
- experiment summary graph,
- failure timeline,
- report-ready findings generated from measured trial data.

Saved trial summaries are stored in browser `localStorage`, and experiment data can be exported as CSV.

---

## Exported Data

The application can export:

```text
results/experiment-summary.csv
results/frame-log.csv
```

The repository includes a template file:

```text
results/experiment-summary-template.csv
```

Measured CSV files should be generated from actual simulation runs.

---

## How to Run

Open the project folder and start a local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

The simulation is implemented using HTML, CSS, JavaScript, and the Canvas API. No external JavaScript libraries are required.

---

## Repository Structure

```text
.
├── index.html
├── style.css
├── script.js
├── README.md
├── LICENSE
├── RUN_INSTRUCTIONS.txt
├── docs/
│   ├── demo-script.md
│   ├── interview-qa.md
│   ├── portfolio-text.md
│   ├── project-notes.md
│   └── robotics_project_quantitative_test_plan.xlsx
├── results/
│   └── experiment-summary-template.csv
└── assets/
    └── screenshots/
```

---

## Tech Stack

- HTML
- CSS
- JavaScript
- Canvas API

---

## Limitations

- The system is a 2D browser-based simulation, not a deployed physical robot.
- The camera is represented as a simulated sensing model.
- Obstacles are simplified geometric objects.
- Dynamic obstacles follow simulated motion rules.
- The project does not currently include ROS, SLAM, real motors, or hardware deployment.

---

## Future Work

- Real camera/OpenCV validation.
- ROS 2, Gazebo, or Webots implementation.
- SLAM-based map generation.
- Multi-target tracking.
- Crowd-aware navigation.
- Local dynamic-window planning.
- Hardware deployment on a mobile robot platform.

---

## Project Summary

This project demonstrates an integrated robotics pipeline for target following under uncertainty. It combines perception modeling, Kalman state estimation, obstacle-aware path planning, planner comparison, dynamic replanning, robot motion constraints, quantitative experiment logging, and failure analysis in a browser-based simulation.
