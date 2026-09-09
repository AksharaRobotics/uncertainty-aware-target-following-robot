# Uncertainty-Aware Autonomous Target-Following Robot

A browser-based robotics simulation for target following under uncertainty. The robot follows a moving target using noisy camera-like measurements, a 4-state Kalman filter, A* path planning, Dijkstra comparison, dynamic obstacles, controlled experiments, and failure-case analysis.

This final version is **simulation-focused**. Webcam validation has been removed from the main project to keep the system clean, repeatable, and easier to evaluate. Real camera/OpenCV validation is listed only as future work.

---

## Project objective

The goal is to study how a mobile robot can follow an assigned moving target when sensing is imperfect and the environment contains obstacles.

In real robotics, the robot may face:

- noisy sensor measurements,
- temporary target loss,
- obstacle line-of-sight blocking,
- static and dynamic obstacles,
- speed, acceleration, and turning limits,
- planning failures or high tracking error.

This project models those challenges in a 2D simulation and evaluates how estimation and planning improve target-following behavior.

---

## System architecture

```text
Moving Target
    ↓
Camera-like Sensor Model
    ↓
Noisy Measurement + Visibility Check
    ↓
Target Acquisition
    ↓
4-State Kalman Filter [x, y, vx, vy]
    ↓
A* Path Planning Around Obstacles
    ↓
Realistic Robot Motion Controller
    ↓
Metrics, Controlled Experiments, and Failure Analysis
```

Important distinction:

- The simulator knows the true target position because it draws the world.
- The robot does **not** directly know the true target position.
- The robot uses noisy camera-like measurements and Kalman estimation.

---

## Key features

### Perception and uncertainty

- Camera-like target measurement with configurable noise.
- Target acquisition before tracking begins.
- Camera range modeling.
- Temporary occlusion.
- Line-of-sight blocking by obstacles.
- Prediction-only tracking when the target is not visible.

### State estimation

- 4-state Kalman filter:

```text
State = [x, y, vx, vy]
```

- Prediction step using target velocity.
- Correction step when camera measurement is available.
- Comparison with raw measurement and moving average estimation.

### Planning and control

- Static obstacles.
- Dynamic moving obstacles.
- A* path planning for robot navigation.
- Dijkstra planner comparison.
- Collision avoidance and replanning.
- Realistic robot speed, acceleration, turning-rate, and following-distance constraints.

### Evaluation

- Tracking error.
- Mean error and RMSE.
- Detection rate.
- Line-of-sight blocked rate.
- A* planning time and explored nodes.
- Dijkstra planning time and explored nodes.
- Collision count.
- Dynamic replan count.
- Controlled experiment recording.
- Summary CSV and frame-level CSV export.
- Failure-case timeline and diagnosis.

---

## How to run

Open the project folder and run a local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

The project can also run by opening `index.html` directly, but local server mode is recommended.

---

## Recommended project outputs

Add real project outputs inside `assets/project outputs/` after running the project.

| Project Output | What to show |
|---|---|
| `main-simulation.png` | Full simulation with robot, target, noisy measurement, Kalman estimate, and A* path |
| `kalman-high-noise.png` | High sensor noise showing noisy measurement vs smoother Kalman estimate |
| `line-of-sight-blocked.png` | Obstacle blocking camera line of sight |
| `astar-path-planning.png` | A* path around static obstacles |
| `astar-vs-dijkstra.png` | Planner comparison table |
| `dynamic-obstacles.png` | Moving obstacles and replanning |
| `failure-case-analysis.png` | Failure diagnosis and timeline |
| `controlled-experiments.png` | Saved trials and experiment results |

---

## Controlled experiments

Use the **Controlled Experiments** panel to record trials.

Recommended final test cases:

| Trial | Sensor Noise | Obstacle Density | Dynamic Obstacles | Robot Speed | Purpose |
|---|---:|---|---|---:|---|
| `baseline` | 25 | Medium | Disabled | 2.8 | Normal system performance |
| `high_noise` | 70 | Medium | Disabled | 2.8 | Kalman robustness under noisy sensing |
| `line_of_sight_blocked` | 25 | Medium | Disabled | 2.8 | Camera cannot see through obstacles |
| `dense_obstacles` | 25 | High | Disabled | 2.8 | A* planning under clutter |
| `dynamic_obstacles` | 25 | Medium | Enabled | 2.8 | Reactive replanning |
| `slow_robot` | 25 | Medium | Enabled | 1.2 | Robot motion limitation and failure case |

Export the final result files into `results/`:

```text
results/experiment-summary.csv
results/frame-log.csv
```

Use real exported numbers only. Do not add fake results.

---

## Failure cases studied

The project detects and reports:

- target not acquired,
- extended camera or line-of-sight loss,
- no valid path,
- robot stuck near obstacles,
- high tracking error,
- dense obstacle planning stress,
- slow robot / control limitation.

This makes the project stronger because it studies both successful and difficult cases.

---

## Technical explanation

### Kalman filter

The Kalman filter estimates target position and velocity.

```text
x_next  = x + vx * dt
y_next  = y + vy * dt
vx_next = vx
vy_next = vy
```

When a camera measurement is available, the filter corrects the estimate. When the target is lost, it predicts using the estimated velocity.

### Line-of-sight sensing

The camera-like sensor detects the target only if:

```text
1. the target is within camera range,
2. the target is not temporarily occluded,
3. no obstacle blocks the line between robot and target.
```

This prevents unrealistic sensing through walls.

### A* vs Dijkstra

Both planners use the same grid and obstacle map. Dijkstra expands broadly, while A* uses a goal-directed heuristic. In many cases, A* finds similar path quality while exploring fewer nodes.

---

## Limitations

- This is a 2D browser-based simulation, not a physical robot.
- Obstacles are simplified geometric objects.
- The sensor is a simulated camera-like measurement model.
- The robot does not yet use ROS, SLAM, or real motors.
- Dynamic obstacles are simulated.

---

## Future work

- Real camera/OpenCV validation.
- ROS 2 / Gazebo or Webots implementation.
- SLAM-based map generation.
- Multi-target tracking.
- Crowd-aware navigation.
- Model predictive control or dynamic-window local planning.
- Hardware deployment on a mobile robot.

---

## Portfolio description

> Built an uncertainty-aware target-following robot simulation using camera-like sensing, a 4-state Kalman filter, A* path planning, Dijkstra comparison, dynamic obstacles, controlled experiments, and failure-case analysis.

---

## Tech stack

- HTML
- CSS
- JavaScript
- Canvas API

No external libraries are required.

## Final auto-test dashboard

This version includes a testing dashboard designed for portfolio evidence collection.

- Select an exact test case from the Test Assistant.
- Mark the run as `Testing / practice` or `Final result`.
- Set the test duration, for example 30 seconds.
- Click **Run Timed Trial** to automatically start the simulation and recording.
- The trial stops automatically when the timer finishes.
- Optional auto-download can export the summary CSV, or the summary plus frame-level CSV.
- Saved trials are also stored in the browser using `localStorage`, so refreshing the page does not immediately remove the collected trial summaries.
- The Findings Dashboard compares final trials and generates a README-ready result sentence from real measured values.

Only trials marked as `Final result` should be used for the final README/report. Use `Testing / practice` for debugging or trial runs.


## Compact Lab UI

This version uses a compact simulation-first layout. The main screen keeps the robot viewport and key findings visible, while the full Results Dashboard opens separately for charts, planner comparisons, experiment tables, failure logs, and README-ready result summaries.


## No-scroll home dashboard

This version keeps only the essential result snapshot on the main screen so the base findings do not get cut off. Full charts, planner tables, saved trials, failure logs, and final report text are available through the Results Dashboard overlay.


## Direct test-case launcher

This version keeps six clickable test cases visible on the main screen. Selecting a case loads the exact robot/target positions, noise, camera range, obstacle density, dynamic obstacle state, and trial name for repeatable testing.


## Portfolio-facing UI

This version removes tutorial-style prompts from the interface. The application is presented as a robotics simulation studio with scenario shortcuts, controlled experiment runs, an analytics dashboard, planner comparison, failure analysis, and report-ready findings.


## Scenario shortcut fix

Scenario shortcut cards now directly update the Setup and Controls inputs, including robot/target starting positions, sensor noise, camera range, robot speed, obstacle density, dynamic obstacle mode, dynamic obstacle speed, failure scenario, and trial name.
