/* =========================================================
   Canvas and DOM References
========================================================= */

const simulationCanvas = document.getElementById("simulationCanvas");
const simulationCtx = simulationCanvas.getContext("2d");

const errorGraphCanvas = document.getElementById("errorGraphCanvas");
const errorGraphCtx = errorGraphCanvas.getContext("2d");

const positionGraphCanvas = document.getElementById("positionGraphCanvas");
const positionGraphCtx = positionGraphCanvas.getContext("2d");

const comparisonGraphCanvas = document.getElementById("comparisonGraphCanvas");
const comparisonGraphCtx = comparisonGraphCanvas.getContext("2d");

const motionEventGraphCanvas = document.getElementById("motionEventGraphCanvas");
const motionEventGraphCtx = motionEventGraphCanvas.getContext("2d");

const futurePredictionGraphCanvas = document.getElementById("futurePredictionGraphCanvas");
const futurePredictionGraphCtx = futurePredictionGraphCanvas.getContext("2d");

const experimentGraphCanvas = document.getElementById("experimentGraphCanvas");
const experimentGraphCtx = experimentGraphCanvas.getContext("2d");

const failureGraphCanvas = document.getElementById("failureGraphCanvas");
const failureGraphCtx = failureGraphCanvas.getContext("2d");

/* Metric text elements */
const trackingErrorText = document.getElementById("trackingError");
const averageErrorText = document.getElementById("averageError");
const robotSpeedText = document.getElementById("robotSpeed");
const sensorNoiseText = document.getElementById("sensorNoise");
const predictionErrorText = document.getElementById("predictionError");
const detectionStatusText = document.getElementById("detectionStatus");
const targetAcquisitionStatusText = document.getElementById("targetAcquisitionStatus");
const lineOfSightStatusText = document.getElementById("lineOfSightStatus");
const detectionRateText = document.getElementById("detectionRate");
const occlusionStatusText = document.getElementById("occlusionStatus");
const normalEstimateErrorText = document.getElementById("normalEstimateError");
const occlusionEstimateErrorText = document.getElementById("occlusionEstimateError");
const recoveryTimeText = document.getElementById("recoveryTime");
const motionEventStatusText = document.getElementById("motionEventStatus");
const motionEventCountText = document.getElementById("motionEventCount");
const motionEventKalmanErrorText = document.getElementById("motionEventKalmanError");
const astarPathStatusText = document.getElementById("astarPathStatus");
const astarPathLengthText = document.getElementById("astarPathLength");
const astarPlanningTimeText = document.getElementById("astarPlanningTime");
const astarCollisionCountText = document.getElementById("astarCollisionCount");
const dynamicObstacleStatusText = document.getElementById("dynamicObstacleStatus");
const dynamicObstacleCountText = document.getElementById("dynamicObstacleCount");
const dynamicObstacleReplansText = document.getElementById("dynamicObstacleReplans");

const dijkstraPathStatusText = document.getElementById("dijkstraPathStatus");
const dijkstraPathLengthText = document.getElementById("dijkstraPathLength");
const dijkstraPlanningTimeText = document.getElementById("dijkstraPlanningTime");
const dijkstraExploredNodesText = document.getElementById("dijkstraExploredNodes");

const astarCompareStatusText = document.getElementById("astarCompareStatus");
const astarCompareLengthText = document.getElementById("astarCompareLength");
const astarCompareTimeText = document.getElementById("astarCompareTime");
const astarCompareNodesText = document.getElementById("astarCompareNodes");

const dijkstraCompareStatusText = document.getElementById("dijkstraCompareStatus");
const dijkstraCompareLengthText = document.getElementById("dijkstraCompareLength");
const dijkstraCompareTimeText = document.getElementById("dijkstraCompareTime");
const dijkstraCompareNodesText = document.getElementById("dijkstraCompareNodes");

const experimentNameInput = document.getElementById("experimentNameInput");
const startExperimentBtn = document.getElementById("startExperimentBtn");
const stopExperimentBtn = document.getElementById("stopExperimentBtn");
const exportExperimentCsvBtn = document.getElementById("exportExperimentCsvBtn");
const exportExperimentFramesCsvBtn = document.getElementById("exportExperimentFramesCsvBtn");
const clearExperimentBtn = document.getElementById("clearExperimentBtn");
const experimentStatusText = document.getElementById("experimentStatus");
const experimentFrameCountText = document.getElementById("experimentFrameCount");
const experimentLiveRmseText = document.getElementById("experimentLiveRmse");
const experimentSavedCountText = document.getElementById("experimentSavedCount");
const experimentResultsBody = document.getElementById("experimentResultsBody");

const systemHealthStatusText = document.getElementById("systemHealthStatus");
const activeFailureCaseText = document.getElementById("activeFailureCase");
const failureSeverityText = document.getElementById("failureSeverity");
const framesSinceDetectionText = document.getElementById("framesSinceDetection");
const failureLogCountText = document.getElementById("failureLogCount");
const failureScenarioSelect = document.getElementById("failureScenarioSelect");
const applyFailureScenarioBtn = document.getElementById("applyFailureScenarioBtn");
const clearFailureLogBtn = document.getElementById("clearFailureLogBtn");
const exportFailureCsvBtn = document.getElementById("exportFailureCsvBtn");
const failureDiagnosisTitleText = document.getElementById("failureDiagnosisTitle");
const failureDiagnosisText = document.getElementById("failureDiagnosisText");
const failureMitigationText = document.getElementById("failureMitigationText");
const failureLogBody = document.getElementById("failureLogBody");

/* Test assistant and findings dashboard elements */
const testCaseSelect = document.getElementById("testCaseSelect");
const loadTestCaseBtn = document.getElementById("loadTestCaseBtn");
const jumpToExperimentsBtn = document.getElementById("jumpToExperimentsBtn");
const testLoadStatusText = document.getElementById("testLoadStatus");
const currentTestNameText = document.getElementById("currentTestName");
const currentScreenshotFileText = document.getElementById("currentScreenshotFile");
const currentReasonText = document.getElementById("currentReasonText");
const currentValuesToExtractText = document.getElementById("currentValuesToExtract");
const currentExpectedText = document.getElementById("currentExpectedText");
const resultReadinessStatusText = document.getElementById("resultReadinessStatus");
const liveRmseFindingText = document.getElementById("liveRmseFinding");
const liveDetectionFindingText = document.getElementById("liveDetectionFinding");
const latestSavedTrialFindingText = document.getElementById("latestSavedTrialFinding");
const plannerEfficiencyFindingText = document.getElementById("plannerEfficiencyFinding");
const readmeFindingText = document.getElementById("readmeFindingText");
const copyReadmeFindingBtn = document.getElementById("copyReadmeFindingBtn");
const trialModeSelect = document.getElementById("trialModeSelect");
const trialDurationInput = document.getElementById("trialDurationInput");
const autoExportSelect = document.getElementById("autoExportSelect");
const runAutomatedTrialBtn = document.getElementById("runAutomatedTrialBtn");
const stopTimedTrialBtn = document.getElementById("stopTimedTrialBtn");
const trialCountdownText = document.getElementById("trialCountdown");
const trialProgressBar = document.getElementById("trialProgressBar");
const timedTrialStatusText = document.getElementById("timedTrialStatus");
const dashboardFilterSelect = document.getElementById("dashboardFilterSelect");
const dashboardResultsBody = document.getElementById("dashboardResultsBody");
const storageStatusText = document.getElementById("storageStatus");
const finalTrialsCountText = document.getElementById("finalTrialsCount");
const baselineFinalRmseText = document.getElementById("baselineFinalRmse");
const highNoiseDeltaText = document.getElementById("highNoiseDelta");
const collisionFinalTotalText = document.getElementById("collisionFinalTotal");
const exportFinalReportBtn = document.getElementById("exportFinalReportBtn");


/* Step 13 webcam validation elements */
const measurementSourceSelect = document.getElementById("measurementSourceSelect");
const startWebcamBtn = document.getElementById("startWebcamBtn");
const stopWebcamBtn = document.getElementById("stopWebcamBtn");
const webcamVideo = document.getElementById("webcamVideo");
const webcamPreviewCanvas = document.getElementById("webcamPreviewCanvas");
const webcamPreviewCtx = webcamPreviewCanvas.getContext("2d");
const webcamStatusText = document.getElementById("webcamStatus");
const webcamDetectionText = document.getElementById("webcamDetection");
const webcamCoordinateText = document.getElementById("webcamCoordinate");
const webcamConfidenceText = document.getElementById("webcamConfidence");

const followComparisonText = {
  raw: {
    meanDistance: document.getElementById("rawFollowMeanDistance"),
    maxDistance: document.getElementById("rawFollowMaxDistance"),
    withinRange: document.getElementById("rawFollowWithinRange")
  },
  kalman: {
    meanDistance: document.getElementById("kfFollowMeanDistance"),
    maxDistance: document.getElementById("kfFollowMaxDistance"),
    withinRange: document.getElementById("kfFollowWithinRange")
  },
  future: {
    meanDistance: document.getElementById("futureFollowMeanDistance"),
    maxDistance: document.getElementById("futureFollowMaxDistance"),
    withinRange: document.getElementById("futureFollowWithinRange")
  }
};

/* Estimator comparison table text elements */
const comparisonText = {
  raw: {
    instant: document.getElementById("rawInstantError"),
    mean: document.getElementById("rawMeanError"),
    rmse: document.getElementById("rawRmse"),
    max: document.getElementById("rawMaxError")
  },
  movingAverage: {
    instant: document.getElementById("maInstantError"),
    mean: document.getElementById("maMeanError"),
    rmse: document.getElementById("maRmse"),
    max: document.getElementById("maMaxError")
  },
  kalman: {
    instant: document.getElementById("kfInstantError"),
    mean: document.getElementById("kfMeanError"),
    rmse: document.getElementById("kfRmse"),
    max: document.getElementById("kfMaxError")
  }
};

/* Buttons */
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

/* Initial position setup */
const robotStartXInput = document.getElementById("robotStartXInput");
const robotStartYInput = document.getElementById("robotStartYInput");
const targetStartXInput = document.getElementById("targetStartXInput");
const targetStartYInput = document.getElementById("targetStartYInput");
const applyStartPositionsBtn = document.getElementById("applyStartPositionsBtn");
const startPositionStatusText = document.getElementById("startPositionStatus");

/* Sliders and dropdown */
const robotSpeedSlider = document.getElementById("robotSpeedSlider");
const sensorNoiseSlider = document.getElementById("sensorNoiseSlider");
const cameraRangeSlider = document.getElementById("cameraRangeSlider");
const estimationWindowSlider = document.getElementById("estimationWindowSlider");
const predictionHorizonSlider = document.getElementById("predictionHorizonSlider");
const desiredRangeSlider = document.getElementById("desiredRangeSlider");
const accelerationLimitSlider = document.getElementById("accelerationLimitSlider");
const turnRateSlider = document.getElementById("turnRateSlider");
const safeDistanceSlider = document.getElementById("safeDistanceSlider");
const dynamicObstacleSpeedSlider = document.getElementById("dynamicObstacleSpeedSlider");
const estimationModeSelect = document.getElementById("estimationModeSelect");
const obstacleScenarioSelect = document.getElementById("obstacleScenarioSelect");
const dynamicObstacleModeSelect = document.getElementById("dynamicObstacleModeSelect");

/* Slider value text */
const robotSpeedValue = document.getElementById("robotSpeedValue");
const sensorNoiseValue = document.getElementById("sensorNoiseValue");
const cameraRangeValue = document.getElementById("cameraRangeValue");
const estimationWindowValue = document.getElementById("estimationWindowValue");
const predictionHorizonValue = document.getElementById("predictionHorizonValue");
const desiredRangeValue = document.getElementById("desiredRangeValue");
const accelerationLimitValue = document.getElementById("accelerationLimitValue");
const turnRateValue = document.getElementById("turnRateValue");
const safeDistanceValue = document.getElementById("safeDistanceValue");
const dynamicObstacleSpeedValue = document.getElementById("dynamicObstacleSpeedValue");

/* =========================================================
   Simulation State
========================================================= */


const finalTestCases = {
  baseline: {
    title: "01 · Baseline tracking",
    trialName: "baseline",
    screenshot: "Baseline system response",
    reason: "This is the normal reference case. All harder tests are compared against this baseline.",
    extract: "Tracking RMSE, mean tracking error, detection rate, A* planning time, collision count.",
    expected: "Target acquisition should become Acquired, detection should mostly be available, A* should find paths, and collisions should stay low.",
    settings: {
      robotX: 120,
      robotY: 430,
      targetX: 820,
      targetY: 430,
      sensorNoise: 25,
      cameraRange: 700,
      robotMaxVelocity: 2.8,
      obstacleScenario: "medium",
      dynamicObstacleMode: "disabled",
      dynamicObstacleSpeed: 1.0,
      failureScenario: "normal"
    }
  },
  high_noise: {
    title: "02 · High sensor noise",
    trialName: "high_noise",
    screenshot: "High-noise estimator response",
    reason: "This stresses the camera measurement. It is used to prove that the Kalman estimate is smoother than raw noisy measurement.",
    extract: "Raw RMSE, Moving Average RMSE, Kalman RMSE, tracking RMSE, mean tracking error, detection rate.",
    expected: "The orange measurement should jump more, while the green Kalman estimate should remain smoother. Kalman RMSE should ideally be lower than raw RMSE.",
    settings: {
      robotX: 120,
      robotY: 430,
      targetX: 820,
      targetY: 430,
      sensorNoise: 70,
      cameraRange: 700,
      robotMaxVelocity: 2.8,
      obstacleScenario: "medium",
      dynamicObstacleMode: "disabled",
      dynamicObstacleSpeed: 1.0,
      failureScenario: "normal"
    }
  },
  line_of_sight_blocked: {
    title: "03 · Line-of-sight blocked",
    trialName: "line_of_sight_blocked",
    screenshot: "Line-of-sight blocking response",
    reason: "This proves the camera cannot see through an obstacle, even when the target is within camera range.",
    extract: "Detection rate, line-of-sight blocked rate, frames since detection, acquisition status, failure status.",
    expected: "Line of Sight should show Blocked. Detection should become Blocked by Obstacle or Not Acquired, and the robot should not magically know the target.",
    settings: {
      robotX: 220,
      robotY: 250,
      targetX: 600,
      targetY: 250,
      sensorNoise: 25,
      cameraRange: 700,
      robotMaxVelocity: 2.8,
      obstacleScenario: "medium",
      dynamicObstacleMode: "disabled",
      dynamicObstacleSpeed: 1.0,
      failureScenario: "normal"
    }
  },
  dense_obstacles: {
    title: "04 · Dense obstacle planning",
    trialName: "dense_obstacles",
    screenshot: "Dense-map planner response and astar-vs-dijkstra.png",
    reason: "This tests whether the planner can still find safe routes when the map is cluttered.",
    extract: "A* path length, Dijkstra path length, A* planning time, Dijkstra planning time, A* explored nodes, Dijkstra explored nodes, collision count.",
    expected: "A* and Dijkstra should find similar path lengths, but A* should usually explore fewer nodes than Dijkstra.",
    settings: {
      robotX: 120,
      robotY: 430,
      targetX: 820,
      targetY: 430,
      sensorNoise: 25,
      cameraRange: 700,
      robotMaxVelocity: 2.8,
      obstacleScenario: "high",
      dynamicObstacleMode: "disabled",
      dynamicObstacleSpeed: 1.0,
      failureScenario: "normal"
    }
  },
  dynamic_obstacles: {
    title: "05 · Dynamic obstacle replanning",
    trialName: "dynamic_obstacles",
    screenshot: "Dynamic replanning response",
    reason: "This shows that the system replans when moving obstacles interfere with the route.",
    extract: "Dynamic replans, tracking RMSE, mean tracking error, collision count, A* planning time.",
    expected: "Dynamic replans should become greater than 0. Tracking error may increase compared with baseline, but collisions should remain low.",
    settings: {
      robotX: 120,
      robotY: 430,
      targetX: 820,
      targetY: 430,
      sensorNoise: 25,
      cameraRange: 700,
      robotMaxVelocity: 2.8,
      obstacleScenario: "medium",
      dynamicObstacleMode: "enabled",
      dynamicObstacleSpeed: 1.5,
      failureScenario: "normal"
    }
  },
  slow_robot: {
    title: "06 · Slow robot failure",
    trialName: "slow_robot",
    screenshot: "Control-limit failure response",
    reason: "This intentionally creates a difficult control case so the system can show limitations and failure diagnosis.",
    extract: "Tracking RMSE, mean tracking error, collision count, dynamic replans, active failure case, failure severity.",
    expected: "Tracking RMSE should increase compared with baseline. The failure panel may identify high tracking error or robot-control limitation.",
    settings: {
      robotX: 120,
      robotY: 430,
      targetX: 820,
      targetY: 430,
      sensorNoise: 25,
      cameraRange: 700,
      robotMaxVelocity: 1.2,
      obstacleScenario: "medium",
      dynamicObstacleMode: "enabled",
      dynamicObstacleSpeed: 1.5,
      failureScenario: "slowRobot"
    }
  }
};

const EXPERIMENT_STORAGE_KEY = "uatfr_experiment_store_v2";
const DEFAULT_TIMED_TRIAL_SECONDS = 30;

let animationId = null;
let isRunning = false;

let totalTrackingError = 0;
let frameCount = 0;

let errorHistory = [];
let positionHistory = [];

/* Robot state */
const robot = {
  x: 120,
  y: 250,
  radius: 12,

  // Realistic motion state
  heading: 0,
  speed: 0,

  // Controller parameters
  maxVelocity: 2.8,
  accelerationLimit: 0.08,
  turnRateLimit: 0.06,
  safeDistance: 35,
  proportionalGain: 0.04,

  path: []
};

/* True target state */
const target = {
  x: 800,
  y: 200,
  radius: 10,
  vx: 2.2,
  vy: 1.6,
  path: []
};

/*
  Step 13 optional webcam validation state.
  In webcam mode, a red object in the camera preview becomes the moving target
  measurement source. This is a proof-of-concept that the same estimator and
  planner are not tied only to synthetic target coordinates.
*/
const webcamTracker = {
  measurementSource: "simulation",
  stream: null,
  isReady: false,
  isDetected: false,
  mappedX: 800,
  mappedY: 200,
  videoX: 0,
  videoY: 0,
  confidence: 0,
  minBlobPixels: 45,
  status: "Simulation mode"
};

/* User-configurable initial positions used by Reset and fresh Start. */
const startPositions = {
  robotX: 120,
  robotY: 250,
  targetX: 800,
  targetY: 200
};

/*
  Sudden target motion-change state.
  This makes the target sometimes turn sharply, change speed, stop, and resume.
*/
const motionChange = {
  status: "Normal motion",
  eventCount: 0,
  framesUntilNext: 180,
  minGapFrames: 150,
  maxGapFrames: 300,

  activeType: null,
  framesRemaining: 0,
  savedVx: 0,
  savedVy: 0,

  framesSinceLastEvent: null,
  eventWindowFrames: 90
};

/* Simulated camera/sensor state */
const sensor = {
  noiseLevel: 25,
  detectedX: robot.x,
  detectedY: robot.y,
  radius: 7,
  cameraRange: 650,
  isDetected: false,
  isLineOfSightBlocked: false,
  lastLossReason: "Not acquired",
  successfulDetections: 0,
  totalDetectionChecks: 0
};

/*
  Target acquisition state.
  The simulator knows the red target's true position because it draws the world,
  but the robot is not allowed to use that true position directly.
  The robot starts tracking only after the first valid camera measurement.
*/
const targetAcquisition = {
  isAcquired: false,
  firstAcquiredFrame: null
};

/*
  Temporary camera occlusion state.
  Occlusion means the target is still moving, but the sensor cannot measure it.
*/
const occlusion = {
  isActive: false,
  framesRemaining: 0,
  framesUntilNext: 240,
  minVisibleGapFrames: 180,
  maxVisibleGapFrames: 360,
  minDurationFrames: 70,
  maxDurationFrames: 130,
  justEnded: false,

  normalErrorSum: 0,
  normalErrorCount: 0,
  occlusionErrorSum: 0,
  occlusionErrorCount: 0,

  recoveryThreshold: 30,
  isRecovering: false,
  recoveryFrameCounter: 0,
  lastRecoveryFrames: null
};

/* Moving average estimator used by the robot when selected */
const estimator = {
  windowSize: 8,
  readings: [],
  estimatedX: robot.x,
  estimatedY: robot.y,
  radius: 8
};

/*
  4-state Kalman filter used by the robot when selected.

  State vector:
  [x, y, vx, vy]

  x  = estimated target x-position
  y  = estimated target y-position
  vx = estimated target x-velocity
  vy = estimated target y-velocity
*/
const kalman = {
  state: [robot.x, robot.y, 0, 0],

  // Estimate covariance matrix P.
  // Larger values mean more initial uncertainty.
  covariance: [
    [100, 0, 0, 0],
    [0, 100, 0, 0],
    [0, 0, 25, 0],
    [0, 0, 0, 25]
  ],

  // One animation update is treated as one timestep.
  dt: 1,

  // Higher process noise reacts faster but becomes less smooth.
  processNoise: 0.08,

  // Updated from the sensor noise slider.
  measurementNoise: 25
};

/*
  Parallel estimator comparison state.
  These estimators run in the background using the same target and same
  noisy measurement. They do not control the robot directly.
*/
const estimatorComparison = {
  raw: createEmptyErrorStats(),
  movingAverage: createEmptyErrorStats(),
  kalman: createEmptyErrorStats(),

  movingAverageReadings: [],
  kalmanFilter: createComparisonKalmanFilter(robot.x, robot.y),

  history: {
    rawRmse: [],
    movingAverageRmse: [],
    kalmanRmse: []
  }
};

/*
  Independent Kalman monitor for Step 5.
  It measures Kalman estimation error around sudden target motion changes.
*/
const motionEventAnalysis = {
  kalmanFilter: createComparisonKalmanFilter(robot.x, robot.y),
  errorSum: 0,
  errorCount: 0,
  latestKalmanError: 0,
  kalmanErrorHistory: [],
  eventMarkers: []
};

/*
  Step 6 future-position prediction comparison.
  Three virtual robots are compared fairly using the same target motion:
  1. follow the latest noisy measurement,
  2. follow the current Kalman estimate,
  3. follow the predicted future target position.
*/
const futurePrediction = {
  horizonFrames: 12,
  desiredRange: 45,
  kalmanFilter: createComparisonKalmanFilter(robot.x, robot.y),

  predictedX: robot.x,
  predictedY: robot.y,

  virtualRobots: {
    raw: createVirtualRobot(robot.x, robot.y),
    kalman: createVirtualRobot(robot.x, robot.y),
    future: createVirtualRobot(robot.x, robot.y)
  },

  stats: {
    raw: createEmptyFollowStats(),
    kalman: createEmptyFollowStats(),
    future: createEmptyFollowStats()
  },

  history: {
    rawDistance: [],
    kalmanDistance: [],
    futureDistance: []
  }
};



/*
  Static and dynamic obstacle planner state.
  Obstacles are rectangles in canvas coordinates.
  Static obstacles are fixed walls. Dynamic obstacles move during simulation.
  The robot replans around them, and the target is prevented from passing
  through them so the tracking task remains physically consistent.
*/
let currentObstacleScenario = "medium";
let staticObstacles = getObstacleScenario(currentObstacleScenario);

const astarPlanner = {
  cellSize: 25,
  replanEveryFrames: 6,

  // Extra obstacle clearance keeps the robot body away from walls.
  // A* plans with inflated obstacles, not just the obstacle's visible rectangle.
  obstacleClearance: 28,

  framesSinceLastPlan: 999,
  path: [],
  currentWaypointIndex: 0,

  // Final safe goal produced by A*. This may be different from the raw target
  // estimate if the estimate is too close to an obstacle.
  plannedGoal: null,

  pathLength: 0,
  planningTimeMs: 0,
  collisionCount: 0,
  replanCount: 0,
  exploredNodes: 0,
  status: "Waiting"
};

const dijkstraPlanner = {
  path: [],
  pathLength: 0,
  planningTimeMs: 0,
  exploredNodes: 0,
  status: "Waiting"
};

let dynamicObstacles = createDynamicObstacleScenario(currentObstacleScenario);

const dynamicObstacleSystem = {
  enabled: true,
  speedMultiplier: 1,
  replanEveryFrames: 3,
  replanCount: 0,
  status: "Enabled"
};

/*
  Step 11 controlled experiment recorder.
  It logs frame-level data from the same simulation and summarizes each trial.
  The goal is repeatable comparison: change one parameter, record a trial,
  export CSV, and plot the summary in the portfolio report.
*/
const experimentRecorder = {
  isRecording: false,
  trialCounter: 0,
  activeTrialName: "baseline",
  activeTrialMode: "testing",
  activeTestCaseKey: "baseline",
  activeTestCaseTitle: "01 · Baseline tracking",
  targetDurationSeconds: DEFAULT_TIMED_TRIAL_SECONDS,
  autoStopEnabled: false,
  autoExportMode: "none",
  recordingStartedAtMs: null,
  activeTrialStartedAt: null,
  lastAutoExportAt: null,
  frameRows: [],
  savedFrameRows: [],
  trials: [],
  baselineCollisionCount: 0,
  baselineDynamicReplans: 0,
  status: "Idle"
};

/*
  Step 12 failure-case monitor.
  It watches the running system and diagnoses important edge cases instead of
  hiding them. This supports the final report: what fails, why it fails, and
  what mitigation is appropriate.
*/
const failureMonitor = {
  status: "Healthy",
  activeCase: "None",
  severity: "Normal",
  cause: "No active failure detected.",
  mitigation: "Continue monitoring tracking error, visibility, path status, and collision count.",

  notAcquiredFrames: 0,
  visionLossFrames: 0,
  plannerFailureFrames: 0,
  stuckFrames: 0,
  highErrorFrames: 0,

  lastDetectionFrame: 0,
  previousRobotX: robot.x,
  previousRobotY: robot.y,
  previousCollisionCount: 0,
  lastLoggedCase: "None",
  lastLoggedFrame: -9999,

  logs: [],
  history: []
};
/* =========================================================
   Small Utility Functions
========================================================= */

function getDistance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;

  return Math.sqrt(dx * dx + dy * dy);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function keepAgentInsideWorld(agent) {
  const beforeX = agent.x;
  const beforeY = agent.y;

  agent.x = clamp(
    agent.x,
    agent.radius,
    simulationCanvas.width - agent.radius
  );

  agent.y = clamp(
    agent.y,
    agent.radius,
    simulationCanvas.height - agent.radius
  );

  // If an agent hits the boundary, remove its forward speed.
  // This prevents it from repeatedly pushing through the wall.
  if (agent.x !== beforeX || agent.y !== beforeY) {
    agent.speed = 0;
  }
}

function keepRobotInsideWorld() {
  keepAgentInsideWorld(robot);
}

function createVirtualRobot(startX, startY) {
  return {
    x: startX,
    y: startY,
    radius: 7,
    heading: 0,
    speed: 0
  };
}

function normalizeAngle(angle) {
  while (angle > Math.PI) angle -= Math.PI * 2;
  while (angle < -Math.PI) angle += Math.PI * 2;
  return angle;
}

function moveAgentWithController(agent, goal, stopDistance = robot.safeDistance) {
  const distanceToGoal = getDistance(agent.x, agent.y, goal.x, goal.y);

  const dx = goal.x - agent.x;
  const dy = goal.y - agent.y;

  // The robot should stop at a safe following distance instead of
  // driving directly into the target/estimate.
  const distanceError = distanceToGoal - stopDistance;

  let headingError = 0;

  // Turning-rate limit: heading cannot rotate instantly.
  // Important fix: the robot now turns first and only moves fast when it is
  // roughly facing the next waypoint. Without this, it can arc into an
  // obstacle while trying to rotate around a corner.
  if (distanceToGoal > 1) {
    const desiredHeading = Math.atan2(dy, dx);
    headingError = normalizeAngle(desiredHeading - agent.heading);
    const headingChange = clamp(
      headingError,
      -robot.turnRateLimit,
      robot.turnRateLimit
    );

    agent.heading = normalizeAngle(agent.heading + headingChange);
  }

  let desiredSpeed = 0;

  if (distanceError > 1) {
    desiredSpeed = clamp(
      robot.proportionalGain * distanceError,
      0,
      robot.maxVelocity
    );
  }

  // If the waypoint is not in front of the robot, slow down or rotate in place.
  // This keeps the robot from touching obstacle walls while following A* turns.
  const absoluteHeadingError = Math.abs(headingError);

  if (absoluteHeadingError > Math.PI / 2) {
    desiredSpeed = 0;
  } else if (absoluteHeadingError > Math.PI / 8) {
    desiredSpeed *= Math.max(0.12, Math.cos(absoluteHeadingError));
  }

  // Acceleration limit: speed cannot jump instantly.
  const speedError = desiredSpeed - agent.speed;
  const speedChange = clamp(
    speedError,
    -robot.accelerationLimit,
    robot.accelerationLimit
  );

  agent.speed = clamp(agent.speed + speedChange, 0, robot.maxVelocity);

  agent.x += Math.cos(agent.heading) * agent.speed;
  agent.y += Math.sin(agent.heading) * agent.speed;

  keepAgentInsideWorld(agent);
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function trimHistory(historyArray, maxLength) {
  if (historyArray.length > maxLength) {
    historyArray.shift();
  }
}

/* =========================================================
   Matrix Utility Functions for Kalman Filter
========================================================= */

function matrixMultiply(a, b) {
  const rowsA = a.length;
  const colsA = a[0].length;
  const colsB = b[0].length;

  const result = Array.from({ length: rowsA }, () =>
    Array(colsB).fill(0)
  );

  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      for (let k = 0; k < colsA; k++) {
        result[i][j] += a[i][k] * b[k][j];
      }
    }
  }

  return result;
}

function matrixAdd(a, b) {
  return a.map((row, i) =>
    row.map((value, j) => value + b[i][j])
  );
}

function matrixSubtract(a, b) {
  return a.map((row, i) =>
    row.map((value, j) => value - b[i][j])
  );
}

function matrixTranspose(matrix) {
  return matrix[0].map((_, colIndex) =>
    matrix.map(row => row[colIndex])
  );
}

function identityMatrix(size) {
  return Array.from({ length: size }, (_, i) =>
    Array.from({ length: size }, (_, j) => (i === j ? 1 : 0))
  );
}

function inverse2x2(matrix) {
  const a = matrix[0][0];
  const b = matrix[0][1];
  const c = matrix[1][0];
  const d = matrix[1][1];

  const determinant = a * d - b * c;

  if (Math.abs(determinant) < 1e-9) {
    return [
      [1, 0],
      [0, 1]
    ];
  }

  return [
    [d / determinant, -b / determinant],
    [-c / determinant, a / determinant]
  ];
}

function vectorToColumn(vector) {
  return vector.map(value => [value]);
}

function columnToVector(column) {
  return column.map(row => row[0]);
}

/* =========================================================
   Kalman Filter Matrices
========================================================= */

function getStateTransitionMatrix() {
  return getStateTransitionMatrixFor(kalman);
}

function getMeasurementMatrix() {
  return [
    [1, 0, 0, 0],
    [0, 1, 0, 0]
  ];
}

function getProcessNoiseCovariance() {
  return getProcessNoiseCovarianceFor(kalman);
}

function getMeasurementNoiseCovariance() {
  return getMeasurementNoiseCovarianceFor(kalman);
}

function getStateTransitionMatrixFor(filter) {
  const dt = filter.dt;

  return [
    [1, 0, dt, 0],
    [0, 1, 0, dt],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
  ];
}

function getProcessNoiseCovarianceFor(filter) {
  const dt = filter.dt;
  const q = filter.processNoise;

  return [
    [(dt ** 4 / 4) * q, 0, (dt ** 3 / 2) * q, 0],
    [0, (dt ** 4 / 4) * q, 0, (dt ** 3 / 2) * q],
    [(dt ** 3 / 2) * q, 0, (dt ** 2) * q, 0],
    [0, (dt ** 3 / 2) * q, 0, (dt ** 2) * q]
  ];
}

function getMeasurementNoiseCovarianceFor(filter) {
  /*
    Sensor noise is uniformly sampled from approximately:
    -noiseLevel to +noiseLevel.

    Variance of uniform distribution [-a, a] is:
    a² / 3
  */
  const measurementVariance = Math.max(
    1,
    (sensor.noiseLevel * sensor.noiseLevel) / 3
  );

  filter.measurementNoise = measurementVariance;

  return [
    [measurementVariance, 0],
    [0, measurementVariance]
  ];
}

function resetKalmanFilter(startX, startY) {
  kalman.state = [startX, startY, 0, 0];

  kalman.covariance = [
    [100, 0, 0, 0],
    [0, 100, 0, 0],
    [0, 0, 25, 0],
    [0, 0, 0, 25]
  ];

  kalman.measurementNoise = Math.max(
    1,
    (sensor.noiseLevel * sensor.noiseLevel) / 3
  );
}

/* =========================================================
   Estimator Comparison Statistics
========================================================= */

function createEmptyErrorStats() {
  return {
    instantError: 0,
    sumError: 0,
    sumSquaredError: 0,
    maxError: 0,
    count: 0
  };
}

function resetErrorStats(stats) {
  stats.instantError = 0;
  stats.sumError = 0;
  stats.sumSquaredError = 0;
  stats.maxError = 0;
  stats.count = 0;
}

function recordEstimatorError(stats, estimateX, estimateY) {
  const error = getDistance(target.x, target.y, estimateX, estimateY);

  stats.instantError = error;
  stats.sumError += error;
  stats.sumSquaredError += error * error;
  stats.maxError = Math.max(stats.maxError, error);
  stats.count++;

  return error;
}

function getMeanError(stats) {
  return stats.count > 0 ? stats.sumError / stats.count : 0;
}

function getRmse(stats) {
  return stats.count > 0
    ? Math.sqrt(stats.sumSquaredError / stats.count)
    : 0;
}

function createEmptyFollowStats() {
  return {
    sumDistance: 0,
    maxDistance: 0,
    withinRangeCount: 0,
    count: 0
  };
}

function resetFollowStats(stats) {
  stats.sumDistance = 0;
  stats.maxDistance = 0;
  stats.withinRangeCount = 0;
  stats.count = 0;
}

function recordFollowDistance(stats, robotLike) {
  const distance = getDistance(robotLike.x, robotLike.y, target.x, target.y);

  stats.sumDistance += distance;
  stats.maxDistance = Math.max(stats.maxDistance, distance);

  if (distance <= futurePrediction.desiredRange) {
    stats.withinRangeCount++;
  }

  stats.count++;

  return distance;
}

function getMeanFollowDistance(stats) {
  return stats.count > 0 ? stats.sumDistance / stats.count : 0;
}

function getWithinRangePercentage(stats) {
  return stats.count > 0
    ? (stats.withinRangeCount / stats.count) * 100
    : 0;
}

function createComparisonKalmanFilter(startX, startY) {
  return {
    state: [startX, startY, 0, 0],

    covariance: [
      [100, 0, 0, 0],
      [0, 100, 0, 0],
      [0, 0, 25, 0],
      [0, 0, 0, 25]
    ],

    dt: 1,
    processNoise: 0.08,
    measurementNoise: 25
  };
}

function resetComparisonKalmanFilter(filter, startX, startY) {
  filter.state = [startX, startY, 0, 0];

  filter.covariance = [
    [100, 0, 0, 0],
    [0, 100, 0, 0],
    [0, 0, 25, 0],
    [0, 0, 0, 25]
  ];

  filter.processNoise = kalman.processNoise;
  filter.measurementNoise = Math.max(
    1,
    (sensor.noiseLevel * sensor.noiseLevel) / 3
  );
}

/* =========================================================
   Reset and Metrics
========================================================= */

function resetSimulation() {
  const requestedStart = {
    robotX: startPositions.robotX,
    robotY: startPositions.robotY,
    targetX: startPositions.targetX,
    targetY: startPositions.targetY
  };

  resetDynamicObstacleSystem();

  const safeRobotStart = findSafeRobotStartPosition(
    requestedStart.robotX,
    requestedStart.robotY
  );

  const safeTargetStart = findSafeTargetStartPosition(
    requestedStart.targetX,
    requestedStart.targetY
  );

  robot.x = safeRobotStart.x;
  robot.y = safeRobotStart.y;
  robot.heading = 0;
  robot.speed = 0;
  robot.path = [];

  target.x = safeTargetStart.x;
  target.y = safeTargetStart.y;
  target.vx = 2.2;
  target.vy = 1.6;
  target.path = [];

  syncStartPositionInputs(safeRobotStart, safeTargetStart);
  updateStartPositionStatus(requestedStart, safeRobotStart, safeTargetStart);

  targetAcquisition.isAcquired = false;
  targetAcquisition.firstAcquiredFrame = null;

  sensor.detectedX = robot.x;
  sensor.detectedY = robot.y;
  sensor.isDetected = false;
  sensor.isLineOfSightBlocked = false;
  sensor.lastLossReason = "Not acquired";
  sensor.successfulDetections = 0;
  sensor.totalDetectionChecks = 0;

  resetOcclusionState();
  resetMotionChangeState();

  estimator.readings = [];
  estimator.estimatedX = robot.x;
  estimator.estimatedY = robot.y;

  resetKalmanFilter(robot.x, robot.y);

  totalTrackingError = 0;
  frameCount = 0;

  errorHistory = [];
  positionHistory = [];

  syncControlsWithState();
  updateWebcamDisplay();
  drawWebcamPlaceholder();
  updateMetricDisplay(0, 0);
  resetEstimatorComparison();
  resetFuturePredictionComparison();
  resetAStarPlanner();
  resetDijkstraPlanner();

  drawSimulation();
  drawErrorGraph();
  drawPositionGraph();
  drawComparisonGraph();
  drawMotionEventGraph();
  drawFuturePredictionGraph();
  resetFailureMonitor();
  updateFailureDisplay();
  drawFailureGraph();
  updateExperimentDisplay();
  drawExperimentGraph();
}

function syncControlsWithState() {
  robotSpeedSlider.value = robot.maxVelocity;
  accelerationLimitSlider.value = robot.accelerationLimit;
  turnRateSlider.value = robot.turnRateLimit;
  safeDistanceSlider.value = robot.safeDistance;
  sensorNoiseSlider.value = sensor.noiseLevel;
  cameraRangeSlider.value = sensor.cameraRange;
  estimationWindowSlider.value = estimator.windowSize;
  predictionHorizonSlider.value = futurePrediction.horizonFrames;
  desiredRangeSlider.value = futurePrediction.desiredRange;
  obstacleScenarioSelect.value = currentObstacleScenario;
  dynamicObstacleModeSelect.value = dynamicObstacleSystem.enabled ? "enabled" : "disabled";
  dynamicObstacleSpeedSlider.value = dynamicObstacleSystem.speedMultiplier;
  measurementSourceSelect.value = webcamTracker.measurementSource;
}

function readStartPositionInputs() {
  startPositions.robotX = readNumberInput(
    robotStartXInput,
    startPositions.robotX
  );

  startPositions.robotY = readNumberInput(
    robotStartYInput,
    startPositions.robotY
  );

  startPositions.targetX = readNumberInput(
    targetStartXInput,
    startPositions.targetX
  );

  startPositions.targetY = readNumberInput(
    targetStartYInput,
    startPositions.targetY
  );
}

function readNumberInput(inputElement, fallbackValue) {
  const value = Number(inputElement.value);

  if (!Number.isFinite(value)) {
    return fallbackValue;
  }

  return value;
}

function syncStartPositionInputs(robotStart, targetStart) {
  robotStartXInput.value = Math.round(robotStart.x);
  robotStartYInput.value = Math.round(robotStart.y);
  targetStartXInput.value = Math.round(targetStart.x);
  targetStartYInput.value = Math.round(targetStart.y);

  startPositions.robotX = robotStart.x;
  startPositions.robotY = robotStart.y;
  startPositions.targetX = targetStart.x;
  startPositions.targetY = targetStart.y;
}

function updateStartPositionStatus(requestedStart, robotStart, targetStart) {
  const robotWasAdjusted =
    Math.round(robotStart.x) !== Math.round(requestedStart.robotX) ||
    Math.round(robotStart.y) !== Math.round(requestedStart.robotY);

  const targetWasAdjusted =
    Math.round(targetStart.x) !== Math.round(requestedStart.targetX) ||
    Math.round(targetStart.y) !== Math.round(requestedStart.targetY);

  startPositionStatusText.classList.remove(
    "setup-status-ok",
    "setup-status-adjusted"
  );

  if (robotWasAdjusted || targetWasAdjusted) {
    startPositionStatusText.textContent =
      "One or more positions were inside an obstacle or outside the world, so a safe free position was used.";
    startPositionStatusText.classList.add("setup-status-adjusted");
  } else {
    startPositionStatusText.textContent =
      "Ready to start from selected positions.";
    startPositionStatusText.classList.add("setup-status-ok");
  }
}

function applyInitialPositionsAndReset() {
  isRunning = false;

  if (animationId) {
    cancelAnimationFrame(animationId);
  }

  readStartPositionInputs();
  resetSimulation();
  updateTestAssistantInfo();
  updateFindingsDashboard();
}

function updateMetricDisplay(trackingError, predictionError) {
  const averageError =
    errorHistory.length > 0 ? totalTrackingError / errorHistory.length : 0;

  const detectionRate =
    sensor.totalDetectionChecks > 0
      ? (sensor.successfulDetections / sensor.totalDetectionChecks) * 100
      : 100;

  trackingErrorText.textContent = `${trackingError.toFixed(2)} px`;
  averageErrorText.textContent = `${averageError.toFixed(2)} px`;
  robotSpeedText.textContent = `${robot.speed.toFixed(2)} / ${robot.maxVelocity.toFixed(2)} px/frame`;
  sensorNoiseText.textContent = `${sensor.noiseLevel} px`;
  predictionErrorText.textContent = `${predictionError.toFixed(2)} px`;

  if (!targetAcquisition.isAcquired && !sensor.isDetected) {
    detectionStatusText.textContent = "Not Acquired";
  } else if (sensor.isDetected) {
    detectionStatusText.textContent = "Detected";
  } else if (sensor.lastLossReason === "Line of sight blocked") {
    detectionStatusText.textContent = "Blocked by Obstacle";
  } else if (sensor.lastLossReason === "Occluded") {
    detectionStatusText.textContent = "Occluded";
  } else if (sensor.lastLossReason === "Webcam target not detected") {
    detectionStatusText.textContent = "Webcam Target Lost";
  } else if (sensor.lastLossReason === "Webcam not ready") {
    detectionStatusText.textContent = "Webcam Not Ready";
  } else {
    detectionStatusText.textContent = "Target Lost";
  }

  targetAcquisitionStatusText.textContent = targetAcquisition.isAcquired
    ? "Acquired"
    : "Searching";

  lineOfSightStatusText.textContent = sensor.isLineOfSightBlocked
    ? "Blocked"
    : "Clear";

  detectionRateText.textContent = `${detectionRate.toFixed(1)}%`;
  occlusionStatusText.textContent = getOcclusionStatusText();
  normalEstimateErrorText.textContent = `${getNormalEstimateMeanError().toFixed(2)} px`;
  occlusionEstimateErrorText.textContent = `${getOcclusionEstimateMeanError().toFixed(2)} px`;
  recoveryTimeText.textContent = getRecoveryTimeText();

  robotSpeedValue.textContent = robot.maxVelocity.toFixed(1);
  accelerationLimitValue.textContent = robot.accelerationLimit.toFixed(2);
  turnRateValue.textContent = robot.turnRateLimit.toFixed(2);
  safeDistanceValue.textContent = robot.safeDistance;
  dynamicObstacleSpeedValue.textContent = dynamicObstacleSystem.speedMultiplier.toFixed(1);
  sensorNoiseValue.textContent = sensor.noiseLevel;
  cameraRangeValue.textContent = sensor.cameraRange;
  estimationWindowValue.textContent = estimator.windowSize;

  updateWebcamDisplay();
  updateDetectionStatusColor();
  updateMotionChangeDisplay();
  updateAStarDisplay();
  updateDijkstraDisplay();
  updateDynamicObstacleDisplay();
  updateFailureDisplay();
  updateFindingsDashboard();
}

function updateDetectionStatusColor() {
  detectionStatusText.classList.remove(
    "status-detected",
    "status-lost",
    "status-occluded",
    "status-blocked",
    "status-searching"
  );

  targetAcquisitionStatusText.classList.remove(
    "status-detected",
    "status-lost",
    "status-searching"
  );

  lineOfSightStatusText.classList.remove(
    "status-detected",
    "status-blocked"
  );

  occlusionStatusText.classList.remove(
    "status-detected",
    "status-occluded",
    "status-recovering"
  );

  if (targetAcquisition.isAcquired) {
    targetAcquisitionStatusText.classList.add("status-detected");
  } else {
    targetAcquisitionStatusText.classList.add("status-searching");
  }

  if (sensor.isLineOfSightBlocked) {
    lineOfSightStatusText.classList.add("status-blocked");
  } else {
    lineOfSightStatusText.classList.add("status-detected");
  }

  if (!targetAcquisition.isAcquired && !sensor.isDetected) {
    detectionStatusText.classList.add("status-searching");
    occlusionStatusText.classList.add("status-detected");
  } else if (sensor.lastLossReason === "Occluded") {
    detectionStatusText.classList.add("status-occluded");
    occlusionStatusText.classList.add("status-occluded");
  } else if (sensor.lastLossReason === "Line of sight blocked") {
    detectionStatusText.classList.add("status-blocked");
    occlusionStatusText.classList.add("status-detected");
  } else if (sensor.isDetected) {
    detectionStatusText.classList.add("status-detected");

    if (occlusion.isRecovering) {
      occlusionStatusText.classList.add("status-recovering");
    } else {
      occlusionStatusText.classList.add("status-detected");
    }
  } else {
    detectionStatusText.classList.add("status-lost");
    occlusionStatusText.classList.add("status-detected");
  }
}

function updateMetrics(trackingError, predictionError) {
  frameCount++;

  if (targetAcquisition.isAcquired) {
    totalTrackingError += trackingError;
    errorHistory.push(trackingError);
    trimHistory(errorHistory, 300);
  }

  updateMetricDisplay(trackingError, predictionError);
}


/* =========================================================
   Step 13 Webcam Target Source
========================================================= */

function isUsingWebcamTargetSource() {
  return webcamTracker.measurementSource === "webcam";
}

function updateTargetSourceMotion() {
  if (isUsingWebcamTargetSource()) {
    updateWebcamTargetMotion();
    return;
  }

  updateTargetMotion();
}

async function startWebcamStream() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    webcamTracker.status = "Webcam API unavailable";
    updateWebcamDisplay();
    drawWebcamMessage("Webcam API unavailable");
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: { ideal: 640 },
        height: { ideal: 480 },
        facingMode: "environment"
      },
      audio: false
    });

    webcamTracker.stream = stream;
    webcamVideo.srcObject = stream;

    webcamVideo.onloadedmetadata = () => {
      webcamTracker.isReady = true;
      webcamTracker.status = "Webcam ready";
      webcamVideo.play();
      updateWebcamDisplay();
    };
  } catch (error) {
    webcamTracker.isReady = false;
    webcamTracker.status = "Webcam blocked / unavailable";
    updateWebcamDisplay();
    drawWebcamMessage("Camera access blocked. Use localhost or allow camera.");
  }
}

function stopWebcamStream() {
  if (webcamTracker.stream) {
    webcamTracker.stream.getTracks().forEach(track => track.stop());
  }

  webcamTracker.stream = null;
  webcamTracker.isReady = false;
  webcamTracker.isDetected = false;
  webcamTracker.confidence = 0;
  webcamTracker.status = isUsingWebcamTargetSource()
    ? "Webcam stopped"
    : "Simulation mode";

  webcamVideo.srcObject = null;
  updateWebcamDisplay();
  drawWebcamPlaceholder();
}

function updateWebcamTargetMotion() {
  processWebcamFrame();

  const previousX = target.x;
  const previousY = target.y;

  if (!webcamTracker.isDetected) {
    target.vx = 0;
    target.vy = 0;
    return;
  }

  const safeMappedTarget = findSafeTargetStartPosition(
    webcamTracker.mappedX,
    webcamTracker.mappedY
  );

  target.x = safeMappedTarget.x;
  target.y = safeMappedTarget.y;

  target.vx = clamp(target.x - previousX, -5, 5);
  target.vy = clamp(target.y - previousY, -5, 5);
}

function processWebcamFrame() {
  if (!webcamTracker.isReady || webcamVideo.readyState < 2) {
    webcamTracker.isDetected = false;
    webcamTracker.confidence = 0;
    webcamTracker.status = webcamTracker.stream
      ? "Waiting for video frame"
      : "Start webcam first";
    drawWebcamMessage(webcamTracker.status);
    updateWebcamDisplay();
    return;
  }

  const width = webcamPreviewCanvas.width;
  const height = webcamPreviewCanvas.height;

  webcamPreviewCtx.drawImage(webcamVideo, 0, 0, width, height);
  const imageData = webcamPreviewCtx.getImageData(0, 0, width, height);
  const data = imageData.data;

  let count = 0;
  let sumX = 0;
  let sumY = 0;
  let totalSamples = 0;
  const step = 2;

  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      const index = (y * width + x) * 4;
      const r = data[index];
      const g = data[index + 1];
      const b = data[index + 2];

      totalSamples++;

      const looksRed =
        r > 120 &&
        r > g * 1.35 &&
        r > b * 1.35 &&
        r - g > 35 &&
        r - b > 35;

      if (looksRed) {
        count++;
        sumX += x;
        sumY += y;
      }
    }
  }

  if (count < webcamTracker.minBlobPixels) {
    webcamTracker.isDetected = false;
    webcamTracker.confidence = totalSamples > 0 ? (count / totalSamples) * 100 : 0;
    webcamTracker.status = "Looking for red object";
    drawWebcamOverlay(null, null, count);
    updateWebcamDisplay();
    return;
  }

  const centerX = sumX / count;
  const centerY = sumY / count;

  webcamTracker.videoX = centerX;
  webcamTracker.videoY = centerY;
  webcamTracker.mappedX = (centerX / width) * simulationCanvas.width;
  webcamTracker.mappedY = (centerY / height) * simulationCanvas.height;
  webcamTracker.confidence = Math.min(100, (count / totalSamples) * 250);
  webcamTracker.isDetected = true;
  webcamTracker.status = "Tracking red object";

  drawWebcamOverlay(centerX, centerY, count);
  updateWebcamDisplay();
}

function drawWebcamOverlay(centerX, centerY, redPixelCount) {
  webcamPreviewCtx.save();
  webcamPreviewCtx.lineWidth = 2;
  webcamPreviewCtx.font = "12px Arial";

  if (centerX !== null && centerY !== null) {
    webcamPreviewCtx.strokeStyle = "#22c55e";
    webcamPreviewCtx.beginPath();
    webcamPreviewCtx.arc(centerX, centerY, 12, 0, Math.PI * 2);
    webcamPreviewCtx.stroke();

    webcamPreviewCtx.fillStyle = "rgba(34, 197, 94, 0.95)";
    webcamPreviewCtx.fillText("Detected", 10, 18);
  } else {
    webcamPreviewCtx.fillStyle = "rgba(239, 68, 68, 0.95)";
    webcamPreviewCtx.fillText("Show a bright red object", 10, 18);
  }

  webcamPreviewCtx.fillStyle = "rgba(255, 255, 255, 0.95)";
  webcamPreviewCtx.fillText(`red pixels: ${redPixelCount}`, 10, webcamPreviewCanvas.height - 10);
  webcamPreviewCtx.restore();
}

function drawWebcamMessage(message) {
  webcamPreviewCtx.clearRect(0, 0, webcamPreviewCanvas.width, webcamPreviewCanvas.height);
  webcamPreviewCtx.fillStyle = "#0f172a";
  webcamPreviewCtx.fillRect(0, 0, webcamPreviewCanvas.width, webcamPreviewCanvas.height);
  webcamPreviewCtx.fillStyle = "#e5e7eb";
  webcamPreviewCtx.font = "13px Arial";
  webcamPreviewCtx.textAlign = "center";
  webcamPreviewCtx.fillText(message, webcamPreviewCanvas.width / 2, webcamPreviewCanvas.height / 2);
  webcamPreviewCtx.textAlign = "left";
}

function drawWebcamPlaceholder() {
  drawWebcamMessage("Webcam validation preview");
}

function updateWebcamDisplay() {
  webcamStatusText.textContent = webcamTracker.status;
  webcamDetectionText.textContent = isUsingWebcamTargetSource()
    ? (webcamTracker.isDetected ? "Detected" : "Not detected")
    : "Off";
  webcamCoordinateText.textContent = webcamTracker.isDetected
    ? `${Math.round(webcamTracker.mappedX)}, ${Math.round(webcamTracker.mappedY)}`
    : "--";
  webcamConfidenceText.textContent = `${webcamTracker.confidence.toFixed(1)}%`;
}

/* =========================================================
   Target Motion and Sudden Motion Changes
========================================================= */

function updateTargetMotion() {
  updateMotionChangeState();

  const previousX = target.x;
  const previousY = target.y;

  if (motionChange.activeType !== "briefStop") {
    target.x += target.vx;
    target.y += target.vy;
  }

  bounceTargetFromWalls();
  preventTargetFromPassingThroughObstacles(previousX, previousY);
  applySmallRandomTargetDrift();
  limitTargetSpeed();
}

function bounceTargetFromWalls() {
  if (target.x <= target.radius) {
    target.x = target.radius;
    target.vx = Math.abs(target.vx);
  }

  if (target.x >= simulationCanvas.width - target.radius) {
    target.x = simulationCanvas.width - target.radius;
    target.vx = -Math.abs(target.vx);
  }

  if (target.y <= target.radius) {
    target.y = target.radius;
    target.vy = Math.abs(target.vy);
  }

  if (target.y >= simulationCanvas.height - target.radius) {
    target.y = simulationCanvas.height - target.radius;
    target.vy = -Math.abs(target.vy);
  }
}

function preventTargetFromPassingThroughObstacles(previousX, previousY) {
  const obstacle = getCollidingObstacleForCircle(
    target.x,
    target.y,
    target.radius
  );

  if (!obstacle) return;

  const attemptedX = target.x;
  const attemptedY = target.y;

  // Put target back to the last safe position.
  target.x = previousX;
  target.y = previousY;

  const cameFromLeft = previousX <= obstacle.x - target.radius;
  const cameFromRight = previousX >= obstacle.x + obstacle.width + target.radius;
  const cameFromTop = previousY <= obstacle.y - target.radius;
  const cameFromBottom = previousY >= obstacle.y + obstacle.height + target.radius;

  let reflected = false;

  if (cameFromLeft && attemptedX > previousX) {
    target.vx = -Math.abs(target.vx);
    reflected = true;
  } else if (cameFromRight && attemptedX < previousX) {
    target.vx = Math.abs(target.vx);
    reflected = true;
  }

  if (cameFromTop && attemptedY > previousY) {
    target.vy = -Math.abs(target.vy);
    reflected = true;
  } else if (cameFromBottom && attemptedY < previousY) {
    target.vy = Math.abs(target.vy);
    reflected = true;
  }

  // Corner case fallback: reverse both components if the side is ambiguous.
  if (!reflected) {
    target.vx *= -1;
    target.vy *= -1;
  }
}

function getCollidingObstacleForCircle(x, y, radius) {
  return getAllObstacles().find(obstacle => {
    const closestX = clamp(x, obstacle.x, obstacle.x + obstacle.width);
    const closestY = clamp(y, obstacle.y, obstacle.y + obstacle.height);
    return getDistance(x, y, closestX, closestY) <= radius;
  }) || null;
}

function isCircleInsideWorld(x, y, radius) {
  return (
    x >= radius &&
    x <= simulationCanvas.width - radius &&
    y >= radius &&
    y <= simulationCanvas.height - radius
  );
}

function isStartPositionSafe(x, y, radius, clearanceMargin = 12) {
  return (
    isCircleInsideWorld(x, y, radius) &&
    !getCollidingObstacleForCircle(x, y, radius + clearanceMargin)
  );
}

function findSafeCircleStartPosition(
  preferredX,
  preferredY,
  radius,
  candidatePositions,
  clearanceMargin = 12
) {
  const clampedPreferred = {
    x: clamp(preferredX, radius, simulationCanvas.width - radius),
    y: clamp(preferredY, radius, simulationCanvas.height - radius)
  };

  const allCandidates = [clampedPreferred, ...candidatePositions];

  for (const candidate of allCandidates) {
    if (isStartPositionSafe(candidate.x, candidate.y, radius, clearanceMargin)) {
      return candidate;
    }
  }

  // Fallback grid search. This keeps reset safe even if obstacle positions
  // are changed later.
  const step = 25;

  for (let y = radius; y <= simulationCanvas.height - radius; y += step) {
    for (let x = radius; x <= simulationCanvas.width - radius; x += step) {
      if (isStartPositionSafe(x, y, radius, clearanceMargin)) {
        return { x, y };
      }
    }
  }

  // Last-resort fallback: keep the object inside the canvas.
  return {
    x: radius + 20,
    y: radius + 20
  };
}

function findSafeRobotStartPosition(preferredX, preferredY) {
  return findSafeCircleStartPosition(
    preferredX,
    preferredY,
    robot.radius,
    [
      { x: 120, y: 250 },
      { x: 90, y: 90 },
      { x: 120, y: 430 },
      { x: 440, y: 430 },
      { x: 820, y: 430 },
      { x: 470, y: 90 }
    ],
    34
  );
}

function findSafeTargetStartPosition(preferredX, preferredY) {
  return findSafeCircleStartPosition(
    preferredX,
    preferredY,
    target.radius,
    [
      { x: 800, y: 200 },
      { x: 820, y: 180 },
      { x: 820, y: 330 },
      { x: 760, y: 430 },
      { x: 120, y: 90 },
      { x: 120, y: 430 },
      { x: 460, y: 90 }
    ],
    12
  );
}


function applySmallRandomTargetDrift() {
  // Small natural drift keeps normal target motion from being perfectly straight.
  if (motionChange.activeType === "briefStop") return;

  if (Math.random() < 0.015) {
    target.vx += (Math.random() - 0.5) * 0.5;
    target.vy += (Math.random() - 0.5) * 0.5;
  }
}

function limitTargetSpeed() {
  const minTargetSpeed = 0.6;
  const maxTargetSpeed = 4.2;
  const currentSpeed = getTargetSpeed();

  if (currentSpeed === 0) return;

  if (currentSpeed > maxTargetSpeed) {
    target.vx = (target.vx / currentSpeed) * maxTargetSpeed;
    target.vy = (target.vy / currentSpeed) * maxTargetSpeed;
  }

  if (currentSpeed < minTargetSpeed && motionChange.activeType !== "briefStop") {
    target.vx = (target.vx / currentSpeed) * minTargetSpeed;
    target.vy = (target.vy / currentSpeed) * minTargetSpeed;
  }
}

function resetMotionChangeState() {
  motionChange.status = "Normal motion";
  motionChange.eventCount = 0;
  motionChange.framesUntilNext = getRandomInteger(
    motionChange.minGapFrames,
    motionChange.maxGapFrames
  );
  motionChange.activeType = null;
  motionChange.framesRemaining = 0;
  motionChange.savedVx = 0;
  motionChange.savedVy = 0;
  motionChange.framesSinceLastEvent = null;

  resetComparisonKalmanFilter(
    motionEventAnalysis.kalmanFilter,
    estimator.estimatedX,
    estimator.estimatedY
  );

  motionEventAnalysis.errorSum = 0;
  motionEventAnalysis.errorCount = 0;
  motionEventAnalysis.latestKalmanError = 0;
  motionEventAnalysis.kalmanErrorHistory = [];
  motionEventAnalysis.eventMarkers = [];

  updateMotionChangeDisplay();
}

function updateMotionChangeState() {
  if (motionChange.framesSinceLastEvent !== null) {
    motionChange.framesSinceLastEvent++;
  }

  if (motionChange.activeType === "briefStop") {
    motionChange.framesRemaining--;
    motionChange.status = `Brief stop: ${motionChange.framesRemaining} frames left`;

    if (motionChange.framesRemaining <= 0) {
      resumeTargetMotion();
    }

    return;
  }

  if (
    motionChange.framesSinceLastEvent !== null &&
    motionChange.framesSinceLastEvent <= motionChange.eventWindowFrames
  ) {
    return;
  }

  motionChange.status = "Normal motion";
  motionChange.framesUntilNext--;

  if (motionChange.framesUntilNext <= 0) {
    triggerRandomMotionChange();
  }
}

function triggerRandomMotionChange() {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    triggerSharpDirectionChange();
  } else if (randomValue < 0.67) {
    triggerSpeedChange();
  } else {
    triggerBriefStop();
  }
}

function triggerSharpDirectionChange() {
  const speed = Math.max(getTargetSpeed(), 1.6);
  const currentAngle = Math.atan2(target.vy, target.vx);
  const turnDirection = Math.random() < 0.5 ? -1 : 1;
  const turnAmount = getRandomNumber(Math.PI / 2, Math.PI * 0.95);
  const newAngle = currentAngle + turnDirection * turnAmount;

  target.vx = Math.cos(newAngle) * speed;
  target.vy = Math.sin(newAngle) * speed;

  markMotionChangeEvent("Sharp direction change");
  scheduleNextMotionChange();
}

function triggerSpeedChange() {
  const currentSpeed = Math.max(getTargetSpeed(), 1.2);
  const currentAngle = Math.atan2(target.vy, target.vx);
  const speedFactor = Math.random() < 0.5
    ? getRandomNumber(0.45, 0.75)
    : getRandomNumber(1.35, 1.85);

  const newSpeed = clamp(currentSpeed * speedFactor, 0.7, 4.2);

  target.vx = Math.cos(currentAngle) * newSpeed;
  target.vy = Math.sin(currentAngle) * newSpeed;

  markMotionChangeEvent(
    speedFactor > 1 ? "Sudden speed-up" : "Sudden slow-down"
  );
  scheduleNextMotionChange();
}

function triggerBriefStop() {
  motionChange.savedVx = target.vx;
  motionChange.savedVy = target.vy;
  motionChange.activeType = "briefStop";
  motionChange.framesRemaining = getRandomInteger(35, 75);

  target.vx = 0;
  target.vy = 0;

  markMotionChangeEvent("Brief stop");
}

function resumeTargetMotion() {
  motionChange.activeType = null;

  const resumeSpeed = Math.max(
    getDistance(0, 0, motionChange.savedVx, motionChange.savedVy),
    1.4
  );

  const resumeAngle = Math.atan2(motionChange.savedVy, motionChange.savedVx);

  target.vx = Math.cos(resumeAngle) * resumeSpeed;
  target.vy = Math.sin(resumeAngle) * resumeSpeed;

  motionChange.status = "Resumed movement";
  scheduleNextMotionChange();
}

function markMotionChangeEvent(label) {
  motionChange.status = label;
  motionChange.eventCount++;
  motionChange.framesSinceLastEvent = 0;

  motionEventAnalysis.eventMarkers.push({
    frame: frameCount,
    label
  });

  removeOldMotionEventMarkers();
}

function scheduleNextMotionChange() {
  motionChange.framesUntilNext = getRandomInteger(
    motionChange.minGapFrames,
    motionChange.maxGapFrames
  );
}

function getTargetSpeed() {
  return getDistance(0, 0, target.vx, target.vy);
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function updateMotionChangeAnalysis() {
  if (!targetAcquisition.isAcquired) {
    updateMotionChangeDisplay();
    return;
  }

  const kalmanError = updateMotionEventKalmanMonitor();

  motionEventAnalysis.latestKalmanError = kalmanError;

  motionEventAnalysis.kalmanErrorHistory.push({
    frame: frameCount,
    error: kalmanError
  });

  trimHistory(motionEventAnalysis.kalmanErrorHistory, 300);
  removeOldMotionEventMarkers();

  if (isInsideMotionEventWindow()) {
    motionEventAnalysis.errorSum += kalmanError;
    motionEventAnalysis.errorCount++;
  }

  updateMotionChangeDisplay();
}

function updateMotionEventKalmanMonitor() {
  const monitor = motionEventAnalysis.kalmanFilter;

  kalmanPredictFor(monitor);

  if (sensor.isDetected) {
    kalmanCorrectFor(monitor, sensor.detectedX, sensor.detectedY);
  }

  return getDistance(
    target.x,
    target.y,
    monitor.state[0],
    monitor.state[1]
  );
}

function isInsideMotionEventWindow() {
  return (
    motionChange.framesSinceLastEvent !== null &&
    motionChange.framesSinceLastEvent <= motionChange.eventWindowFrames
  );
}

function getMotionEventMeanError() {
  return motionEventAnalysis.errorCount > 0
    ? motionEventAnalysis.errorSum / motionEventAnalysis.errorCount
    : 0;
}

function removeOldMotionEventMarkers() {
  const earliestVisibleFrame = Math.max(0, frameCount - 299);

  motionEventAnalysis.eventMarkers = motionEventAnalysis.eventMarkers.filter(
    marker => marker.frame >= earliestVisibleFrame
  );
}

function updateMotionChangeDisplay() {
  motionEventStatusText.textContent = motionChange.status;
  motionEventCountText.textContent = motionChange.eventCount;
  motionEventKalmanErrorText.textContent = `${getMotionEventMeanError().toFixed(2)} px`;

  motionEventStatusText.classList.remove(
    "status-motion-normal",
    "status-motion-event"
  );

  if (motionChange.status === "Normal motion") {
    motionEventStatusText.classList.add("status-motion-normal");
  } else {
    motionEventStatusText.classList.add("status-motion-event");
  }
}

/* =========================================================
   Temporary Target Occlusion
========================================================= */

function resetOcclusionState() {
  occlusion.isActive = false;
  occlusion.framesRemaining = 0;
  occlusion.framesUntilNext = getRandomInteger(
    occlusion.minVisibleGapFrames,
    occlusion.maxVisibleGapFrames
  );
  occlusion.justEnded = false;

  occlusion.normalErrorSum = 0;
  occlusion.normalErrorCount = 0;
  occlusion.occlusionErrorSum = 0;
  occlusion.occlusionErrorCount = 0;

  occlusion.isRecovering = false;
  occlusion.recoveryFrameCounter = 0;
  occlusion.lastRecoveryFrames = null;
}

function updateOcclusionState() {
  occlusion.justEnded = false;

  if (occlusion.isActive) {
    occlusion.framesRemaining--;

    if (occlusion.framesRemaining <= 0) {
      endOcclusion();
    }

    return;
  }

  occlusion.framesUntilNext--;

  if (occlusion.framesUntilNext <= 0) {
    startOcclusion();
  }
}

function startOcclusion() {
  occlusion.isActive = true;
  occlusion.framesRemaining = getRandomInteger(
    occlusion.minDurationFrames,
    occlusion.maxDurationFrames
  );
  occlusion.isRecovering = false;
  occlusion.recoveryFrameCounter = 0;
}

function endOcclusion() {
  occlusion.isActive = false;
  occlusion.justEnded = true;
  occlusion.isRecovering = true;
  occlusion.recoveryFrameCounter = 0;
  occlusion.framesUntilNext = getRandomInteger(
    occlusion.minVisibleGapFrames,
    occlusion.maxVisibleGapFrames
  );
}

function updateOcclusionMetrics(estimateError) {
  if (occlusion.isActive) {
    occlusion.occlusionErrorSum += estimateError;
    occlusion.occlusionErrorCount++;
  } else if (sensor.isDetected) {
    occlusion.normalErrorSum += estimateError;
    occlusion.normalErrorCount++;
  }

  if (occlusion.isRecovering) {
    occlusion.recoveryFrameCounter++;

    if (sensor.isDetected && estimateError <= occlusion.recoveryThreshold) {
      occlusion.lastRecoveryFrames = occlusion.recoveryFrameCounter;
      occlusion.isRecovering = false;
      occlusion.recoveryFrameCounter = 0;
    }
  }
}

function getNormalEstimateMeanError() {
  return occlusion.normalErrorCount > 0
    ? occlusion.normalErrorSum / occlusion.normalErrorCount
    : 0;
}

function getOcclusionEstimateMeanError() {
  return occlusion.occlusionErrorCount > 0
    ? occlusion.occlusionErrorSum / occlusion.occlusionErrorCount
    : 0;
}

function getRecoveryTimeText() {
  if (occlusion.isRecovering) {
    return `Recovering: ${occlusion.recoveryFrameCounter} frames`;
  }

  if (occlusion.lastRecoveryFrames === null) {
    return "--";
  }

  return `${occlusion.lastRecoveryFrames} frames`;
}

function getOcclusionStatusText() {
  if (occlusion.isActive) {
    return `Occluded: ${occlusion.framesRemaining} frames left`;
  }

  if (occlusion.isRecovering) {
    return "Recovering";
  }

  return "Visible";
}

/* =========================================================
   Sensor / Camera Detection
========================================================= */

function updateSensorDetection() {
  sensor.totalDetectionChecks++;

  const distanceToTarget = getDistance(robot.x, robot.y, target.x, target.y);
  const isWithinCameraRange = distanceToTarget <= sensor.cameraRange;
  const isBlockedByObstacle = isLineOfSightBlocked();

  sensor.isLineOfSightBlocked = isBlockedByObstacle;

  if (isUsingWebcamTargetSource() && !webcamTracker.isDetected) {
    sensor.isDetected = false;
    sensor.lastLossReason = webcamTracker.isReady
      ? "Webcam target not detected"
      : "Webcam not ready";
    return;
  }

  if (occlusion.isActive) {
    sensor.isDetected = false;
    sensor.lastLossReason = "Occluded";

    // During occlusion, the true target keeps moving but the sensor receives
    // no new measurement. The previous sensor position is kept as last seen.
    return;
  }

  if (!isWithinCameraRange) {
    sensor.isDetected = false;
    sensor.lastLossReason = "Out of camera range";
    return;
  }

  if (isBlockedByObstacle) {
    sensor.isDetected = false;
    sensor.lastLossReason = "Line of sight blocked";

    // A real camera cannot see through an opaque obstacle.
    // Keep the previous measurement as the last seen position.
    return;
  }

  sensor.isDetected = true;
  sensor.lastLossReason = "None";
  sensor.successfulDetections++;
  applyNoisySensorMeasurement();

  if (!targetAcquisition.isAcquired) {
    initializeTargetAcquisitionFromMeasurement();
  }
}

function applyNoisySensorMeasurement() {
  const noiseX = (Math.random() - 0.5) * 2 * sensor.noiseLevel;
  const noiseY = (Math.random() - 0.5) * 2 * sensor.noiseLevel;

  sensor.detectedX = clamp(
    target.x + noiseX,
    0,
    simulationCanvas.width
  );

  sensor.detectedY = clamp(
    target.y + noiseY,
    0,
    simulationCanvas.height
  );
}

function initializeTargetAcquisitionFromMeasurement() {
  targetAcquisition.isAcquired = true;
  targetAcquisition.firstAcquiredFrame = frameCount;

  estimator.readings = [
    { x: sensor.detectedX, y: sensor.detectedY }
  ];
  estimator.estimatedX = sensor.detectedX;
  estimator.estimatedY = sensor.detectedY;

  resetKalmanFilter(sensor.detectedX, sensor.detectedY);

  resetComparisonKalmanFilter(
    estimatorComparison.kalmanFilter,
    sensor.detectedX,
    sensor.detectedY
  );

  resetComparisonKalmanFilter(
    motionEventAnalysis.kalmanFilter,
    sensor.detectedX,
    sensor.detectedY
  );

  resetComparisonKalmanFilter(
    futurePrediction.kalmanFilter,
    sensor.detectedX,
    sensor.detectedY
  );

  futurePrediction.predictedX = sensor.detectedX;
  futurePrediction.predictedY = sensor.detectedY;

  astarPlanner.path = [];
  astarPlanner.currentWaypointIndex = 0;
  astarPlanner.framesSinceLastPlan = astarPlanner.replanEveryFrames;
  astarPlanner.status = "Target acquired — planning";
}

/* =========================================================
   State Estimation Used by Robot
========================================================= */

function updateEstimator() {
  if (!targetAcquisition.isAcquired) {
    return 0;
  }

  if (estimationModeSelect.value === "kalman") {
    return updateKalmanEstimator();
  }

  return updateMovingAverageEstimator();
}

function updateMovingAverageEstimator() {
  if (sensor.isDetected) {
    estimator.readings.push({
      x: sensor.detectedX,
      y: sensor.detectedY
    });

    if (estimator.readings.length > estimator.windowSize) {
      estimator.readings.shift();
    }
  }

  if (estimator.readings.length > 0) {
    estimator.estimatedX = getAverageReadingValue("x");
    estimator.estimatedY = getAverageReadingValue("y");
  }

  return getDistance(
    target.x,
    target.y,
    estimator.estimatedX,
    estimator.estimatedY
  );
}

function getAverageReadingValue(axisKey) {
  return getAverageFromReadings(estimator.readings, axisKey);
}

function updateKalmanEstimator() {
  kalmanPredict();

  if (sensor.isDetected) {
    kalmanCorrect(sensor.detectedX, sensor.detectedY);
  }

  estimator.estimatedX = kalman.state[0];
  estimator.estimatedY = kalman.state[1];

  return getDistance(
    target.x,
    target.y,
    estimator.estimatedX,
    estimator.estimatedY
  );
}

function kalmanPredict() {
  kalmanPredictFor(kalman);
}

function kalmanCorrect(measuredX, measuredY) {
  kalmanCorrectFor(kalman, measuredX, measuredY);
}

function kalmanPredictFor(filter) {
  const F = getStateTransitionMatrixFor(filter);
  const Q = getProcessNoiseCovarianceFor(filter);

  const stateColumn = vectorToColumn(filter.state);
  const predictedState = matrixMultiply(F, stateColumn);

  const predictedCovariance = matrixAdd(
    matrixMultiply(
      matrixMultiply(F, filter.covariance),
      matrixTranspose(F)
    ),
    Q
  );

  filter.state = columnToVector(predictedState);
  filter.covariance = predictedCovariance;
}

function kalmanCorrectFor(filter, measuredX, measuredY) {
  const H = getMeasurementMatrix();
  const R = getMeasurementNoiseCovarianceFor(filter);
  const I = identityMatrix(4);

  const stateColumn = vectorToColumn(filter.state);
  const measurementColumn = vectorToColumn([measuredX, measuredY]);

  // Innovation: measurement minus predicted measurement.
  const innovation = matrixSubtract(
    measurementColumn,
    matrixMultiply(H, stateColumn)
  );

  // Innovation covariance.
  const innovationCovariance = matrixAdd(
    matrixMultiply(
      matrixMultiply(H, filter.covariance),
      matrixTranspose(H)
    ),
    R
  );

  // Kalman gain.
  const kalmanGain = matrixMultiply(
    matrixMultiply(filter.covariance, matrixTranspose(H)),
    inverse2x2(innovationCovariance)
  );

  // Corrected state estimate.
  const correctedState = matrixAdd(
    stateColumn,
    matrixMultiply(kalmanGain, innovation)
  );

  // Corrected covariance estimate.
  const correctedCovariance = matrixMultiply(
    matrixSubtract(I, matrixMultiply(kalmanGain, H)),
    filter.covariance
  );

  filter.state = columnToVector(correctedState);
  filter.covariance = correctedCovariance;
}

/* =========================================================
   Parallel Estimator Comparison
========================================================= */

function resetEstimatorComparison() {
  resetErrorStats(estimatorComparison.raw);
  resetErrorStats(estimatorComparison.movingAverage);
  resetErrorStats(estimatorComparison.kalman);

  estimatorComparison.movingAverageReadings = [];

  resetComparisonKalmanFilter(
    estimatorComparison.kalmanFilter,
    estimator.estimatedX,
    estimator.estimatedY
  );

  estimatorComparison.history.rawRmse = [];
  estimatorComparison.history.movingAverageRmse = [];
  estimatorComparison.history.kalmanRmse = [];

  updateComparisonDisplay();
  drawComparisonGraph();
}

function updateParallelEstimatorComparison() {
  /*
    Fairness rule:
    All three estimators use the same true target position and the same
    noisy sensor measurement from the current frame.

    If the target is not detected, raw measurement does not exist for that
    frame, so Step 3 skips comparison for that frame.
    Occlusion-specific evaluation comes later in Step 4.
  */
  if (!targetAcquisition.isAcquired || !sensor.isDetected) {
    updateComparisonDisplay();
    drawComparisonGraph();
    return;
  }

  updateRawMeasurementComparison();
  updateMovingAverageComparison();
  updateKalmanComparison();
  saveComparisonHistory();

  updateComparisonDisplay();
  drawComparisonGraph();
}

function updateRawMeasurementComparison() {
  recordEstimatorError(
    estimatorComparison.raw,
    sensor.detectedX,
    sensor.detectedY
  );
}

function updateMovingAverageComparison() {
  estimatorComparison.movingAverageReadings.push({
    x: sensor.detectedX,
    y: sensor.detectedY
  });

  if (estimatorComparison.movingAverageReadings.length > estimator.windowSize) {
    estimatorComparison.movingAverageReadings.shift();
  }

  const estimateX = getAverageFromReadings(
    estimatorComparison.movingAverageReadings,
    "x"
  );

  const estimateY = getAverageFromReadings(
    estimatorComparison.movingAverageReadings,
    "y"
  );

  recordEstimatorError(
    estimatorComparison.movingAverage,
    estimateX,
    estimateY
  );
}

function updateKalmanComparison() {
  const comparisonFilter = estimatorComparison.kalmanFilter;

  kalmanPredictFor(comparisonFilter);
  kalmanCorrectFor(comparisonFilter, sensor.detectedX, sensor.detectedY);

  recordEstimatorError(
    estimatorComparison.kalman,
    comparisonFilter.state[0],
    comparisonFilter.state[1]
  );
}

function getAverageFromReadings(readings, axisKey) {
  if (readings.length === 0) return 0;

  let total = 0;

  for (let i = 0; i < readings.length; i++) {
    total += readings[i][axisKey];
  }

  return total / readings.length;
}

function saveComparisonHistory() {
  estimatorComparison.history.rawRmse.push(
    getRmse(estimatorComparison.raw)
  );

  estimatorComparison.history.movingAverageRmse.push(
    getRmse(estimatorComparison.movingAverage)
  );

  estimatorComparison.history.kalmanRmse.push(
    getRmse(estimatorComparison.kalman)
  );

  trimHistory(estimatorComparison.history.rawRmse, 300);
  trimHistory(estimatorComparison.history.movingAverageRmse, 300);
  trimHistory(estimatorComparison.history.kalmanRmse, 300);
}

function updateComparisonDisplay() {
  updateComparisonRow("raw", estimatorComparison.raw);
  updateComparisonRow("movingAverage", estimatorComparison.movingAverage);
  updateComparisonRow("kalman", estimatorComparison.kalman);
}

function updateComparisonRow(methodKey, stats) {
  comparisonText[methodKey].instant.textContent =
    stats.instantError.toFixed(2);

  comparisonText[methodKey].mean.textContent =
    getMeanError(stats).toFixed(2);

  comparisonText[methodKey].rmse.textContent =
    getRmse(stats).toFixed(2);

  comparisonText[methodKey].max.textContent =
    stats.maxError.toFixed(2);
}

/* =========================================================
   Future-Position Prediction and Virtual Robot Comparison
========================================================= */

function resetFuturePredictionComparison() {
  resetComparisonKalmanFilter(
    futurePrediction.kalmanFilter,
    estimator.estimatedX,
    estimator.estimatedY
  );

  futurePrediction.predictedX = estimator.estimatedX;
  futurePrediction.predictedY = estimator.estimatedY;

  resetVirtualRobot(futurePrediction.virtualRobots.raw);
  resetVirtualRobot(futurePrediction.virtualRobots.kalman);
  resetVirtualRobot(futurePrediction.virtualRobots.future);

  resetFollowStats(futurePrediction.stats.raw);
  resetFollowStats(futurePrediction.stats.kalman);
  resetFollowStats(futurePrediction.stats.future);

  futurePrediction.history.rawDistance = [];
  futurePrediction.history.kalmanDistance = [];
  futurePrediction.history.futureDistance = [];

  updateFuturePredictionDisplay();
  drawFuturePredictionGraph();
}

function resetVirtualRobot(virtualRobot) {
  virtualRobot.x = robot.x;
  virtualRobot.y = robot.y;
  virtualRobot.heading = robot.heading;
  virtualRobot.speed = 0;
}

function updateFuturePredictionComparison() {
  if (!targetAcquisition.isAcquired) {
    updateFuturePredictionDisplay();
    drawFuturePredictionGraph();
    return;
  }

  updateFuturePredictionKalman();

  const rawGoal = {
    x: sensor.detectedX,
    y: sensor.detectedY
  };

  const kalmanGoal = {
    x: futurePrediction.kalmanFilter.state[0],
    y: futurePrediction.kalmanFilter.state[1]
  };

  const futureGoal = {
    x: futurePrediction.predictedX,
    y: futurePrediction.predictedY
  };

  moveVirtualRobotToward(futurePrediction.virtualRobots.raw, rawGoal);
  moveVirtualRobotToward(futurePrediction.virtualRobots.kalman, kalmanGoal);
  moveVirtualRobotToward(futurePrediction.virtualRobots.future, futureGoal);

  const rawDistance = recordFollowDistance(
    futurePrediction.stats.raw,
    futurePrediction.virtualRobots.raw
  );

  const kalmanDistance = recordFollowDistance(
    futurePrediction.stats.kalman,
    futurePrediction.virtualRobots.kalman
  );

  const futureDistance = recordFollowDistance(
    futurePrediction.stats.future,
    futurePrediction.virtualRobots.future
  );

  futurePrediction.history.rawDistance.push(rawDistance);
  futurePrediction.history.kalmanDistance.push(kalmanDistance);
  futurePrediction.history.futureDistance.push(futureDistance);

  trimHistory(futurePrediction.history.rawDistance, 300);
  trimHistory(futurePrediction.history.kalmanDistance, 300);
  trimHistory(futurePrediction.history.futureDistance, 300);

  updateFuturePredictionDisplay();
  drawFuturePredictionGraph();
}

function updateFuturePredictionKalman() {
  const filter = futurePrediction.kalmanFilter;

  kalmanPredictFor(filter);

  if (sensor.isDetected) {
    kalmanCorrectFor(filter, sensor.detectedX, sensor.detectedY);
  }

  const horizon = futurePrediction.horizonFrames;

  futurePrediction.predictedX = clamp(
    filter.state[0] + filter.state[2] * horizon,
    0,
    simulationCanvas.width
  );

  futurePrediction.predictedY = clamp(
    filter.state[1] + filter.state[3] * horizon,
    0,
    simulationCanvas.height
  );
}

function moveVirtualRobotToward(virtualRobot, goal) {
  moveAgentWithController(virtualRobot, goal);
}

function updateFuturePredictionDisplay() {
  updateFollowComparisonRow("raw", futurePrediction.stats.raw);
  updateFollowComparisonRow("kalman", futurePrediction.stats.kalman);
  updateFollowComparisonRow("future", futurePrediction.stats.future);
}

function updateFollowComparisonRow(methodKey, stats) {
  followComparisonText[methodKey].meanDistance.textContent =
    getMeanFollowDistance(stats).toFixed(2);

  followComparisonText[methodKey].maxDistance.textContent =
    stats.maxDistance.toFixed(2);

  followComparisonText[methodKey].withinRange.textContent =
    `${getWithinRangePercentage(stats).toFixed(1)}%`;
}




/* =========================================================
   Dynamic Obstacles
========================================================= */

function createDynamicObstacleScenario(scenarioName) {
  const scenarios = {
    low: [
      {
        x: 600,
        y: 350,
        width: 95,
        height: 26,
        minX: 540,
        maxX: 790,
        minY: 350,
        maxY: 350,
        vx: 1.2,
        vy: 0,
        label: "D1"
      }
    ],

    medium: [
      {
        x: 395,
        y: 115,
        width: 32,
        height: 80,
        minX: 395,
        maxX: 395,
        minY: 80,
        maxY: 190,
        vx: 0,
        vy: 1.0,
        label: "D1"
      },
      {
        x: 765,
        y: 350,
        width: 90,
        height: 26,
        minX: 560,
        maxX: 820,
        minY: 350,
        maxY: 350,
        vx: -1.2,
        vy: 0,
        label: "D2"
      }
    ],

    high: [
      {
        x: 350,
        y: 95,
        width: 30,
        height: 80,
        minX: 350,
        maxX: 350,
        minY: 60,
        maxY: 205,
        vx: 0,
        vy: 1.1,
        label: "D1"
      },
      {
        x: 740,
        y: 350,
        width: 88,
        height: 26,
        minX: 550,
        maxX: 830,
        minY: 350,
        maxY: 350,
        vx: -1.3,
        vy: 0,
        label: "D2"
      },
      {
        x: 520,
        y: 120,
        width: 28,
        height: 82,
        minX: 520,
        maxX: 520,
        minY: 80,
        maxY: 180,
        vx: 0,
        vy: -0.9,
        label: "D3"
      }
    ]
  };

  const selected = scenarios[scenarioName] || scenarios.medium;

  return selected.map(obstacle => ({
    ...obstacle,
    startX: obstacle.x,
    startY: obstacle.y
  }));
}

function resetDynamicObstacleSystem() {
  dynamicObstacles = createDynamicObstacleScenario(currentObstacleScenario);
  dynamicObstacleSystem.replanCount = 0;
  dynamicObstacleSystem.status = dynamicObstacleSystem.enabled
    ? "Enabled"
    : "Disabled";
  updateDynamicObstacleDisplay();
}

function updateDynamicObstacleDisplay() {
  if (!dynamicObstacleStatusText) return;

  dynamicObstacleStatusText.textContent = dynamicObstacleSystem.enabled
    ? dynamicObstacleSystem.status
    : "Disabled";

  dynamicObstacleCountText.textContent = dynamicObstacleSystem.enabled
    ? dynamicObstacles.length
    : 0;

  dynamicObstacleReplansText.textContent = dynamicObstacleSystem.replanCount;
}

function updateDynamicObstacles() {
  if (!dynamicObstacleSystem.enabled) {
    dynamicObstacleSystem.status = "Disabled";
    updateDynamicObstacleDisplay();
    return;
  }

  let moved = false;

  for (const obstacle of dynamicObstacles) {
    const previousX = obstacle.x;
    const previousY = obstacle.y;

    obstacle.x += obstacle.vx * dynamicObstacleSystem.speedMultiplier;
    obstacle.y += obstacle.vy * dynamicObstacleSystem.speedMultiplier;

    if (obstacle.x < obstacle.minX) {
      obstacle.x = obstacle.minX;
      obstacle.vx = Math.abs(obstacle.vx);
    }

    if (obstacle.x > obstacle.maxX) {
      obstacle.x = obstacle.maxX;
      obstacle.vx = -Math.abs(obstacle.vx);
    }

    if (obstacle.y < obstacle.minY) {
      obstacle.y = obstacle.minY;
      obstacle.vy = Math.abs(obstacle.vy);
    }

    if (obstacle.y > obstacle.maxY) {
      obstacle.y = obstacle.maxY;
      obstacle.vy = -Math.abs(obstacle.vy);
    }

    // Keep the simulation physically clean: a moving obstacle should not
    // spawn through the robot or target. If contact happens, the obstacle
    // bounces back and the robot replans on the next frame.
    if (
      rectangleOverlapsCircle(obstacle, robot.x, robot.y, robot.radius + 4) ||
      rectangleOverlapsCircle(obstacle, target.x, target.y, target.radius + 4)
    ) {
      obstacle.x = previousX;
      obstacle.y = previousY;
      obstacle.vx *= -1;
      obstacle.vy *= -1;
    }

    if (obstacle.x !== previousX || obstacle.y !== previousY) {
      moved = true;
    }
  }

  dynamicObstacleSystem.status = moved
    ? "Moving — reactive replanning"
    : "Enabled";

  updateDynamicObstacleDisplay();
}

function rectangleOverlapsCircle(rectangle, circleX, circleY, circleRadius) {
  const closestX = clamp(circleX, rectangle.x, rectangle.x + rectangle.width);
  const closestY = clamp(circleY, rectangle.y, rectangle.y + rectangle.height);
  return getDistance(circleX, circleY, closestX, closestY) <= circleRadius;
}

function getAllObstacles() {
  if (!dynamicObstacleSystem.enabled) {
    return staticObstacles;
  }

  return [...staticObstacles, ...dynamicObstacles];
}

function isDynamicObstaclePathReplanNeeded() {
  if (!dynamicObstacleSystem.enabled || astarPlanner.path.length === 0) {
    return false;
  }

  for (let i = astarPlanner.currentWaypointIndex; i < astarPlanner.path.length; i++) {
    const point = astarPlanner.path[i];

    // If a moving obstacle has entered the current path corridor, force a replan.
    if (isPointInsideExpandedDynamicObstacle(point.x, point.y, getPlanningClearance())) {
      return true;
    }
  }

  return false;
}

function isPointInsideExpandedDynamicObstacle(x, y, margin) {
  return dynamicObstacles.some(obstacle =>
    x >= obstacle.x - margin &&
    x <= obstacle.x + obstacle.width + margin &&
    y >= obstacle.y - margin &&
    y <= obstacle.y + obstacle.height + margin
  );
}

/* =========================================================
   Static Obstacle Avoidance, A* and Dijkstra Path Planning
========================================================= */


function getObstacleScenario(scenarioName) {
  const scenarios = {
    low: [
      { x: 390, y: 190, width: 180, height: 45 },
      { x: 680, y: 80, width: 45, height: 140 }
    ],

    medium: [
      { x: 300, y: 70, width: 50, height: 270 },
      { x: 500, y: 245, width: 250, height: 45 },
      { x: 155, y: 365, width: 185, height: 45 },
      { x: 650, y: 80, width: 45, height: 125 }
    ],

    high: [
      { x: 260, y: 55, width: 45, height: 255 },
      { x: 455, y: 215, width: 285, height: 45 },
      { x: 110, y: 360, width: 235, height: 45 },
      { x: 650, y: 70, width: 45, height: 145 },
      { x: 430, y: 335, width: 45, height: 120 },
      { x: 780, y: 300, width: 45, height: 150 }
    ]
  };

  return (scenarios[scenarioName] || scenarios.medium).map(obstacle => ({ ...obstacle }));
}

function applyObstacleScenario(scenarioName) {
  currentObstacleScenario = scenarioName;
  staticObstacles = getObstacleScenario(currentObstacleScenario);
  resetDynamicObstacleSystem();
  applyInitialPositionsAndReset();
}



function resetAStarPlanner() {
  astarPlanner.framesSinceLastPlan = 999;
  astarPlanner.path = [];
  astarPlanner.currentWaypointIndex = 0;
  astarPlanner.plannedGoal = null;
  astarPlanner.pathLength = 0;
  astarPlanner.planningTimeMs = 0;
  astarPlanner.collisionCount = 0;
  astarPlanner.replanCount = 0;
  astarPlanner.exploredNodes = 0;
  astarPlanner.status = "Waiting";
  updateAStarDisplay();
  updateDijkstraDisplay();
}

function updateAStarDisplay() {
  astarPathStatusText.textContent = astarPlanner.status;
  astarPathLengthText.textContent = `${astarPlanner.pathLength.toFixed(2)} px`;
  astarPlanningTimeText.textContent = `${astarPlanner.planningTimeMs.toFixed(2)} ms`;
  astarCollisionCountText.textContent = astarPlanner.collisionCount;
  updatePlannerComparisonDisplay();
}

function resetDijkstraPlanner() {
  dijkstraPlanner.path = [];
  dijkstraPlanner.pathLength = 0;
  dijkstraPlanner.planningTimeMs = 0;
  dijkstraPlanner.exploredNodes = 0;
  dijkstraPlanner.status = "Waiting";
  updateDijkstraDisplay();
}

function updateDijkstraDisplay() {
  dijkstraPathStatusText.textContent = dijkstraPlanner.status;
  dijkstraPathLengthText.textContent = `${dijkstraPlanner.pathLength.toFixed(2)} px`;
  dijkstraPlanningTimeText.textContent = `${dijkstraPlanner.planningTimeMs.toFixed(2)} ms`;
  dijkstraExploredNodesText.textContent = dijkstraPlanner.exploredNodes;
  updatePlannerComparisonDisplay();
}

function updatePlannerComparisonDisplay() {
  astarCompareStatusText.textContent = astarPlanner.status;
  astarCompareLengthText.textContent = `${astarPlanner.pathLength.toFixed(2)} px`;
  astarCompareTimeText.textContent = `${astarPlanner.planningTimeMs.toFixed(2)} ms`;
  astarCompareNodesText.textContent = astarPlanner.exploredNodes;

  dijkstraCompareStatusText.textContent = dijkstraPlanner.status;
  dijkstraCompareLengthText.textContent = `${dijkstraPlanner.pathLength.toFixed(2)} px`;
  dijkstraCompareTimeText.textContent = `${dijkstraPlanner.planningTimeMs.toFixed(2)} ms`;
  dijkstraCompareNodesText.textContent = dijkstraPlanner.exploredNodes;
}

function getTrackingGoalForPlanner() {
  if (!targetAcquisition.isAcquired) {
    return {
      x: robot.x,
      y: robot.y
    };
  }

  return {
    x: estimator.estimatedX,
    y: estimator.estimatedY
  };
}

function updateAStarPlanner(goal) {
  astarPlanner.framesSinceLastPlan++;

  const dynamicPathBlocked = isDynamicObstaclePathReplanNeeded();
  const dynamicTimeToReplan =
    dynamicObstacleSystem.enabled &&
    astarPlanner.framesSinceLastPlan >= dynamicObstacleSystem.replanEveryFrames;

  const shouldReplan =
    astarPlanner.path.length === 0 ||
    astarPlanner.currentWaypointIndex >= astarPlanner.path.length ||
    astarPlanner.framesSinceLastPlan >= astarPlanner.replanEveryFrames ||
    dynamicPathBlocked ||
    dynamicTimeToReplan;

  if (dynamicPathBlocked || dynamicTimeToReplan) {
    dynamicObstacleSystem.replanCount++;
    dynamicObstacleSystem.status = dynamicPathBlocked
      ? "Path blocked — replanning"
      : "Moving — reactive replanning";
  }

  if (!shouldReplan) {
    updateAStarDisplay();
    return;
  }

  const startCell = findNearestFreeCell(
    worldToGridCell(robot.x, robot.y),
    { x: robot.x, y: robot.y }
  );
  const goalCell = findNearestFreeCell(
    worldToGridCell(goal.x, goal.y),
    { x: goal.x, y: goal.y }
  );

  // Use the nearest safe grid-cell center as the planner's actual final goal.
  // This prevents the robot from trying to drive into a wall when the raw
  // estimate is inside or too close to an obstacle.
  astarPlanner.plannedGoal = gridCellToWorld(goalCell.row, goalCell.col);

  const startTime = performance.now();
  const result = findAStarPath(startCell, goalCell);
  astarPlanner.planningTimeMs = performance.now() - startTime;
  astarPlanner.framesSinceLastPlan = 0;
  astarPlanner.replanCount++;
  astarPlanner.exploredNodes = result.exploredNodes;

  // Step 9 comparison: run Dijkstra on the exact same start and goal.
  // The robot still follows A*; Dijkstra is calculated only for fair comparison.
  const dijkstraStartTime = performance.now();
  const dijkstraResult = findDijkstraPath(startCell, goalCell);
  dijkstraPlanner.planningTimeMs = performance.now() - dijkstraStartTime;
  dijkstraPlanner.exploredNodes = dijkstraResult.exploredNodes;

  if (dijkstraResult.success) {
    dijkstraPlanner.path = dijkstraResult.path.map(cell => gridCellToWorld(cell.row, cell.col));

    if (dijkstraPlanner.path.length > 1) {
      dijkstraPlanner.path.shift();
    }

    dijkstraPlanner.pathLength = calculatePathLength(dijkstraPlanner.path, robot.x, robot.y);
    dijkstraPlanner.status = `Path found (${dijkstraResult.exploredNodes} nodes)`;
  } else {
    dijkstraPlanner.path = [];
    dijkstraPlanner.pathLength = 0;
    dijkstraPlanner.status = "No safe path";
  }

  if (result.success) {
    astarPlanner.path = result.path.map(cell => gridCellToWorld(cell.row, cell.col));

    // The first cell is usually the robot's current cell, so skip it.
    if (astarPlanner.path.length > 1) {
      astarPlanner.path.shift();
    }

    astarPlanner.currentWaypointIndex = 0;
    astarPlanner.pathLength = calculatePathLength(astarPlanner.path, robot.x, robot.y);
    astarPlanner.status = `Path found (${result.exploredNodes} nodes)`;
  } else {
    astarPlanner.path = [];
    astarPlanner.currentWaypointIndex = 0;
    astarPlanner.plannedGoal = null;
    astarPlanner.pathLength = 0;
    astarPlanner.status = "No safe path";
  }

  updateAStarDisplay();
}

function getAStarFollowTarget(goal) {
  const waypointReachDistance = Math.max(12, astarPlanner.cellSize * 0.65);

  // If A* could not find a path, do not drive directly into the raw estimate.
  // Hold position and wait for the next replan.
  if (astarPlanner.path.length === 0 && astarPlanner.status === "No safe path") {
    return {
      x: robot.x,
      y: robot.y,
      stopDistance: 0
    };
  }

  while (astarPlanner.currentWaypointIndex < astarPlanner.path.length) {
    const waypoint = astarPlanner.path[astarPlanner.currentWaypointIndex];
    const distanceToWaypoint = getDistance(robot.x, robot.y, waypoint.x, waypoint.y);

    if (distanceToWaypoint <= waypointReachDistance) {
      astarPlanner.currentWaypointIndex++;
    } else {
      return {
        x: waypoint.x,
        y: waypoint.y,
        stopDistance: 2
      };
    }
  }

  // Use the safe planner goal, not the raw target estimate. The raw estimate can
  // be on the other side of a wall or too close to an obstacle boundary.
  const safeGoal = astarPlanner.plannedGoal || goal;

  return {
    x: safeGoal.x,
    y: safeGoal.y,
    stopDistance: robot.safeDistance
  };
}

function moveRobotWithObstacleSafety(goal) {
  const previousX = robot.x;
  const previousY = robot.y;
  const previousHeading = robot.heading;
  const previousSpeed = robot.speed;

  moveAgentWithController(robot, goal, goal.stopDistance);
  keepRobotInsideWorld();

  if (isCircleCollidingWithObstacle(robot.x, robot.y, robot.radius)) {
    robot.x = previousX;
    robot.y = previousY;
    robot.heading = previousHeading;
    robot.speed = 0;

    // Count each blocked movement attempt. A well-planned path should keep this near zero.
    if (previousSpeed > 0.01) {
      astarPlanner.collisionCount++;
    }

    astarPlanner.status = "Blocked near obstacle — replanning";
    astarPlanner.path = [];
    astarPlanner.currentWaypointIndex = 0;
    astarPlanner.framesSinceLastPlan = astarPlanner.replanEveryFrames;
    updateAStarDisplay();
  }
}

function worldToGridCell(x, y) {
  const col = clamp(
    Math.floor(x / astarPlanner.cellSize),
    0,
    getGridColumnCount() - 1
  );

  const row = clamp(
    Math.floor(y / astarPlanner.cellSize),
    0,
    getGridRowCount() - 1
  );

  return { row, col };
}

function gridCellToWorld(row, col) {
  return {
    x: col * astarPlanner.cellSize + astarPlanner.cellSize / 2,
    y: row * astarPlanner.cellSize + astarPlanner.cellSize / 2
  };
}

function getGridColumnCount() {
  return Math.ceil(simulationCanvas.width / astarPlanner.cellSize);
}

function getGridRowCount() {
  return Math.ceil(simulationCanvas.height / astarPlanner.cellSize);
}

function findNearestFreeCell(cell, preferredPoint = null) {
  if (!isGridCellBlocked(cell.row, cell.col)) {
    return cell;
  }

  // When the robot/goal lies inside the inflated safety margin, snap it to the
  // closest free grid cell in world distance. This avoids choosing a cell on the
  // wrong side of an obstacle just because it was visited first in BFS order.
  const referencePoint = preferredPoint || gridCellToWorld(cell.row, cell.col);
  let bestCell = null;
  let bestDistanceSquared = Infinity;

  for (let row = 0; row < getGridRowCount(); row++) {
    for (let col = 0; col < getGridColumnCount(); col++) {
      if (isGridCellBlocked(row, col)) continue;

      const point = gridCellToWorld(row, col);
      const dx = point.x - referencePoint.x;
      const dy = point.y - referencePoint.y;
      const distanceSquared = dx * dx + dy * dy;

      if (distanceSquared < bestDistanceSquared) {
        bestDistanceSquared = distanceSquared;
        bestCell = { row, col };
      }
    }
  }

  return bestCell || cell;
}

function findAStarPath(startCell, goalCell) {
  const openList = [];
  const allNodes = new Map();
  const closedSet = new Set();

  const startKey = getCellKey(startCell.row, startCell.col);
  const goalKey = getCellKey(goalCell.row, goalCell.col);

  const startNode = {
    row: startCell.row,
    col: startCell.col,
    g: 0,
    h: getAStarHeuristic(startCell, goalCell),
    f: 0,
    parentKey: null
  };
  startNode.f = startNode.g + startNode.h;

  openList.push(startNode);
  allNodes.set(startKey, startNode);

  let exploredNodes = 0;

  while (openList.length > 0) {
    openList.sort((a, b) => a.f - b.f);
    const current = openList.shift();
    const currentKey = getCellKey(current.row, current.col);

    if (closedSet.has(currentKey)) continue;

    closedSet.add(currentKey);
    exploredNodes++;

    if (currentKey === goalKey) {
      return {
        success: true,
        path: reconstructPath(allNodes, currentKey),
        exploredNodes
      };
    }

    const neighbors = getAStarNeighbors(current);

    for (const neighbor of neighbors) {
      const neighborKey = getCellKey(neighbor.row, neighbor.col);
      if (closedSet.has(neighborKey)) continue;

      const stepCost = neighbor.diagonal ? Math.SQRT2 : 1;
      const tentativeG = current.g + stepCost;
      const existingNode = allNodes.get(neighborKey);

      if (!existingNode || tentativeG < existingNode.g) {
        const h = getAStarHeuristic(neighbor, goalCell);
        const updatedNode = {
          row: neighbor.row,
          col: neighbor.col,
          g: tentativeG,
          h,
          f: tentativeG + h,
          parentKey: currentKey
        };

        allNodes.set(neighborKey, updatedNode);
        openList.push(updatedNode);
      }
    }
  }

  return {
    success: false,
    path: [],
    exploredNodes
  };
}


function findDijkstraPath(startCell, goalCell) {
  const openList = [];
  const allNodes = new Map();
  const closedSet = new Set();

  const startKey = getCellKey(startCell.row, startCell.col);
  const goalKey = getCellKey(goalCell.row, goalCell.col);

  const startNode = {
    row: startCell.row,
    col: startCell.col,
    g: 0,
    parentKey: null
  };

  openList.push(startNode);
  allNodes.set(startKey, startNode);

  let exploredNodes = 0;

  while (openList.length > 0) {
    openList.sort((a, b) => a.g - b.g);
    const current = openList.shift();
    const currentKey = getCellKey(current.row, current.col);

    if (closedSet.has(currentKey)) continue;

    closedSet.add(currentKey);
    exploredNodes++;

    if (currentKey === goalKey) {
      return {
        success: true,
        path: reconstructPath(allNodes, currentKey),
        exploredNodes
      };
    }

    const neighbors = getAStarNeighbors(current);

    for (const neighbor of neighbors) {
      const neighborKey = getCellKey(neighbor.row, neighbor.col);
      if (closedSet.has(neighborKey)) continue;

      const stepCost = neighbor.diagonal ? Math.SQRT2 : 1;
      const tentativeG = current.g + stepCost;
      const existingNode = allNodes.get(neighborKey);

      if (!existingNode || tentativeG < existingNode.g) {
        const updatedNode = {
          row: neighbor.row,
          col: neighbor.col,
          g: tentativeG,
          parentKey: currentKey
        };

        allNodes.set(neighborKey, updatedNode);
        openList.push(updatedNode);
      }
    }
  }

  return {
    success: false,
    path: [],
    exploredNodes
  };
}

function getAStarNeighbors(cell) {
  const directions = [
    { dr: -1, dc: 0, diagonal: false },
    { dr: 1, dc: 0, diagonal: false },
    { dr: 0, dc: -1, diagonal: false },
    { dr: 0, dc: 1, diagonal: false },
    { dr: -1, dc: -1, diagonal: true },
    { dr: -1, dc: 1, diagonal: true },
    { dr: 1, dc: -1, diagonal: true },
    { dr: 1, dc: 1, diagonal: true }
  ];

  const neighbors = [];

  for (const direction of directions) {
    const row = cell.row + direction.dr;
    const col = cell.col + direction.dc;

    if (!isCellInsideGrid(row, col)) continue;
    if (isGridCellBlocked(row, col)) continue;

    // For diagonal moves, prevent cutting through obstacle corners.
    if (direction.diagonal) {
      const sideCellAIsBlocked = isGridCellBlocked(cell.row, col);
      const sideCellBIsBlocked = isGridCellBlocked(row, cell.col);

      if (sideCellAIsBlocked || sideCellBIsBlocked) continue;
    }

    neighbors.push({ row, col, diagonal: direction.diagonal });
  }

  return neighbors;
}

function isCellInsideGrid(row, col) {
  return (
    row >= 0 &&
    col >= 0 &&
    row < getGridRowCount() &&
    col < getGridColumnCount()
  );
}

function getPlanningClearance() {
  // The planner treats obstacles as slightly larger than they look.
  // This is necessary because the robot has a radius; it is not a point.
  return robot.radius + astarPlanner.obstacleClearance;
}

function isGridCellBlocked(row, col) {
  const point = gridCellToWorld(row, col);
  return isPointInsideExpandedObstacle(point.x, point.y, getPlanningClearance());
}

function isPointInsideExpandedObstacle(x, y, margin) {
  return getAllObstacles().some(obstacle =>
    x >= obstacle.x - margin &&
    x <= obstacle.x + obstacle.width + margin &&
    y >= obstacle.y - margin &&
    y <= obstacle.y + obstacle.height + margin
  );
}

function isCircleCollidingWithObstacle(x, y, radius) {
  const safetyBuffer = 2;

  return getAllObstacles().some(obstacle => {
    const closestX = clamp(x, obstacle.x, obstacle.x + obstacle.width);
    const closestY = clamp(y, obstacle.y, obstacle.y + obstacle.height);
    return getDistance(x, y, closestX, closestY) <= radius + safetyBuffer;
  });
}

/*
  Camera line-of-sight check.
  The camera can measure the target only when the straight line from robot
  to target is not blocked by an obstacle. This prevents the robot from
  unrealistically seeing through walls.
*/
function isLineOfSightBlocked() {
  const obstacles = getAllObstacles();

  for (let i = 0; i < obstacles.length; i++) {
    if (lineIntersectsRectangle(robot.x, robot.y, target.x, target.y, obstacles[i])) {
      return true;
    }
  }

  return false;
}

function lineIntersectsRectangle(x1, y1, x2, y2, rect) {
  const left = rect.x;
  const right = rect.x + rect.width;
  const top = rect.y;
  const bottom = rect.y + rect.height;

  if (pointInsideRectangle(x1, y1, rect) || pointInsideRectangle(x2, y2, rect)) {
    return true;
  }

  return (
    linesIntersect(x1, y1, x2, y2, left, top, right, top) ||
    linesIntersect(x1, y1, x2, y2, right, top, right, bottom) ||
    linesIntersect(x1, y1, x2, y2, right, bottom, left, bottom) ||
    linesIntersect(x1, y1, x2, y2, left, bottom, left, top)
  );
}

function pointInsideRectangle(px, py, rect) {
  return (
    px >= rect.x &&
    px <= rect.x + rect.width &&
    py >= rect.y &&
    py <= rect.y + rect.height
  );
}

function linesIntersect(x1, y1, x2, y2, x3, y3, x4, y4) {
  const denominator =
    (x1 - x2) * (y3 - y4) -
    (y1 - y2) * (x3 - x4);

  if (Math.abs(denominator) < 1e-9) {
    return false;
  }

  const t =
    ((x1 - x3) * (y3 - y4) -
      (y1 - y3) * (x3 - x4)) /
    denominator;

  const u =
    -((x1 - x2) * (y1 - y3) -
      (y1 - y2) * (x1 - x3)) /
    denominator;

  return t >= 0 && t <= 1 && u >= 0 && u <= 1;
}

function getAStarHeuristic(cell, goalCell) {
  const dr = cell.row - goalCell.row;
  const dc = cell.col - goalCell.col;
  return Math.sqrt(dr * dr + dc * dc);
}

function getCellKey(row, col) {
  return `${row},${col}`;
}

function reconstructPath(allNodes, goalKey) {
  const path = [];
  let currentKey = goalKey;

  while (currentKey) {
    const node = allNodes.get(currentKey);
    path.unshift({ row: node.row, col: node.col });
    currentKey = node.parentKey;
  }

  return path;
}

function calculatePathLength(path, startX, startY) {
  if (path.length === 0) return 0;

  let length = getDistance(startX, startY, path[0].x, path[0].y);

  for (let i = 1; i < path.length; i++) {
    length += getDistance(path[i - 1].x, path[i - 1].y, path[i].x, path[i].y);
  }

  return length;
}

/* =========================================================
   Robot Control
========================================================= */

function updateRobotMotion() {
  if (!targetAcquisition.isAcquired) {
    robot.speed = 0;
    astarPlanner.status = "Waiting for target acquisition";
    astarPlanner.path = [];
    astarPlanner.pathLength = 0;
    dijkstraPlanner.status = "Waiting for target acquisition";
    dijkstraPlanner.path = [];
    dijkstraPlanner.pathLength = 0;
    updateAStarDisplay();
    updateDijkstraDisplay();
    return 0;
  }

  const trackingGoal = getTrackingGoalForPlanner();

  updateAStarPlanner(trackingGoal);

  const followTarget = getAStarFollowTarget(trackingGoal);
  moveRobotWithObstacleSafety(followTarget);

  return getDistance(robot.x, robot.y, target.x, target.y);
}

/* =========================================================
   History Storage
========================================================= */

function savePathHistory() {
  robot.path.push({ x: robot.x, y: robot.y });
  target.path.push({ x: target.x, y: target.y });

  trimHistory(robot.path, 250);
  trimHistory(target.path, 250);
}

function savePositionHistory() {
  positionHistory.push({
    targetX: target.x,
    targetY: target.y,
    robotX: robot.x,
    robotY: robot.y
  });

  trimHistory(positionHistory, 300);
}

/* =========================================================
   Simulation Drawing
========================================================= */

function drawSimulation() {
  simulationCtx.clearRect(
    0,
    0,
    simulationCanvas.width,
    simulationCanvas.height
  );

  drawGrid(simulationCtx, simulationCanvas, 50, 50);
  drawCameraRange();
  drawOcclusionOverlay();
  drawStaticObstacles();
  drawDynamicObstacles();
  drawDijkstraPath();
  drawAStarPath();

  drawPath(target.path, "rgba(239, 68, 68, 0.5)");
  drawPath(robot.path, "rgba(37, 99, 235, 0.5)");

  drawRobotTargetLine();

  if (targetAcquisition.isAcquired || sensor.isDetected) {
    drawTargetDetectionLine();
    drawDetectionEstimateLine();
    drawSensorPoint();
  }

  drawCircle(target.x, target.y, target.radius, "#ef4444", "Target");

  const estimateLabel =
    estimationModeSelect.value === "kalman"
      ? "Kalman Estimate"
      : "MA Estimate";

  if (targetAcquisition.isAcquired) {
    drawCircle(
      estimator.estimatedX,
      estimator.estimatedY,
      estimator.radius,
      "#22c55e",
      estimateLabel
    );

    drawFuturePredictionPoint();
  }

  drawRobotBody();
}

function drawRobotBody() {
  drawCircle(robot.x, robot.y, robot.radius, "#2563eb", "Robot");

  // Heading line shows the robot's current orientation.
  simulationCtx.beginPath();
  simulationCtx.strokeStyle = "#111827";
  simulationCtx.lineWidth = 2;
  simulationCtx.moveTo(robot.x, robot.y);
  simulationCtx.lineTo(
    robot.x + Math.cos(robot.heading) * robot.radius * 1.8,
    robot.y + Math.sin(robot.heading) * robot.radius * 1.8
  );
  simulationCtx.stroke();
}

function drawFuturePredictionPoint() {
  // Cyan marker: where the Kalman model predicts the target will be
  // after the selected prediction horizon.
  drawCircle(
    futurePrediction.predictedX,
    futurePrediction.predictedY,
    7,
    "#06b6d4",
    "Future"
  );
}


function drawStaticObstacles() {
  for (const obstacle of staticObstacles) {
    simulationCtx.beginPath();
    simulationCtx.fillStyle = "rgba(107, 114, 128, 0.65)";
    simulationCtx.strokeStyle = "rgba(55, 65, 81, 0.95)";
    simulationCtx.lineWidth = 2;
    simulationCtx.rect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    simulationCtx.fill();
    simulationCtx.stroke();
  }
}

function drawDynamicObstacles() {
  if (!dynamicObstacleSystem.enabled) return;

  for (const obstacle of dynamicObstacles) {
    simulationCtx.beginPath();
    simulationCtx.fillStyle = "rgba(245, 158, 11, 0.75)";
    simulationCtx.strokeStyle = "rgba(180, 83, 9, 0.95)";
    simulationCtx.lineWidth = 2;
    simulationCtx.rect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    simulationCtx.fill();
    simulationCtx.stroke();

    // Small motion direction indicator.
    const centerX = obstacle.x + obstacle.width / 2;
    const centerY = obstacle.y + obstacle.height / 2;
    const arrowScale = 16;
    simulationCtx.beginPath();
    simulationCtx.strokeStyle = "rgba(120, 53, 15, 0.9)";
    simulationCtx.lineWidth = 2;
    simulationCtx.moveTo(centerX, centerY);
    simulationCtx.lineTo(
      centerX + Math.sign(obstacle.vx) * arrowScale,
      centerY + Math.sign(obstacle.vy) * arrowScale
    );
    simulationCtx.stroke();
  }
}

function drawDijkstraPath() {
  if (dijkstraPlanner.path.length === 0) return;

  simulationCtx.save();
  simulationCtx.beginPath();
  simulationCtx.setLineDash([3, 9]);
  simulationCtx.lineWidth = 2;
  simulationCtx.strokeStyle = "rgba(168, 85, 247, 0.55)";
  simulationCtx.moveTo(robot.x, robot.y);

  for (const point of dijkstraPlanner.path) {
    simulationCtx.lineTo(point.x, point.y);
  }

  simulationCtx.stroke();
  simulationCtx.restore();
}

function drawAStarPath() {
  if (astarPlanner.path.length === 0) return;

  simulationCtx.beginPath();
  simulationCtx.strokeStyle = "#0ea5e9";
  simulationCtx.lineWidth = 3;
  simulationCtx.setLineDash([8, 5]);

  simulationCtx.moveTo(robot.x, robot.y);

  for (let i = astarPlanner.currentWaypointIndex; i < astarPlanner.path.length; i++) {
    simulationCtx.lineTo(astarPlanner.path[i].x, astarPlanner.path[i].y);
  }

  simulationCtx.stroke();
  simulationCtx.setLineDash([]);

  // Mark the next waypoint so the planned path is easier to understand.
  const waypoint = astarPlanner.path[astarPlanner.currentWaypointIndex];
  if (waypoint) {
    simulationCtx.beginPath();
    simulationCtx.fillStyle = "#0ea5e9";
    simulationCtx.arc(waypoint.x, waypoint.y, 4, 0, Math.PI * 2);
    simulationCtx.fill();
  }
}

function drawCameraRange() {
  simulationCtx.beginPath();

  simulationCtx.strokeStyle = sensor.isDetected
    ? "rgba(34, 197, 94, 0.18)"
    : "rgba(239, 68, 68, 0.18)";

  simulationCtx.lineWidth = 2;
  simulationCtx.arc(
    robot.x,
    robot.y,
    sensor.cameraRange,
    0,
    Math.PI * 2
  );
  simulationCtx.stroke();
}

function drawPath(path, color) {
  if (path.length < 2) return;

  simulationCtx.beginPath();
  simulationCtx.strokeStyle = color;
  simulationCtx.lineWidth = 2;
  simulationCtx.moveTo(path[0].x, path[0].y);

  for (let i = 1; i < path.length; i++) {
    simulationCtx.lineTo(path[i].x, path[i].y);
  }

  simulationCtx.stroke();
}

function drawSensorPoint() {
  if (!targetAcquisition.isAcquired && !sensor.isDetected) {
    return;
  }

  if (sensor.isDetected) {
    drawCircle(
      sensor.detectedX,
      sensor.detectedY,
      sensor.radius,
      "#f97316",
      "Noisy Measurement"
    );
  } else {
    let label = "Last Seen";
    let color = "#9ca3af";

    if (sensor.lastLossReason === "Occluded") {
      label = "Occluded / Last Seen";
      color = "#7c3aed";
    } else if (sensor.lastLossReason === "Line of sight blocked") {
      label = "Blocked / Last Seen";
      color = "#dc2626";
    }

    drawCircle(
      sensor.detectedX,
      sensor.detectedY,
      sensor.radius,
      color,
      label
    );
  }
}

function drawOcclusionOverlay() {
  if (!occlusion.isActive) return;

  simulationCtx.save();
  simulationCtx.beginPath();
  simulationCtx.fillStyle = "rgba(124, 58, 237, 0.10)";
  simulationCtx.strokeStyle = "rgba(124, 58, 237, 0.70)";
  simulationCtx.lineWidth = 3;
  simulationCtx.setLineDash([8, 6]);
  simulationCtx.arc(target.x, target.y, target.radius + 24, 0, Math.PI * 2);
  simulationCtx.fill();
  simulationCtx.stroke();
  simulationCtx.setLineDash([]);

  simulationCtx.fillStyle = "#7c3aed";
  simulationCtx.font = "bold 13px Arial";
  simulationCtx.fillText("Occluded", target.x + 28, target.y + 4);
  simulationCtx.restore();
}

function drawCircle(x, y, radius, color, label) {
  simulationCtx.beginPath();
  simulationCtx.fillStyle = color;
  simulationCtx.arc(x, y, radius, 0, Math.PI * 2);
  simulationCtx.fill();

  simulationCtx.fillStyle = "#111827";
  simulationCtx.font = "13px Arial";
  simulationCtx.fillText(label, x + radius + 6, y - radius - 4);
}

function drawRobotTargetLine() {
  const lineColor = sensor.isLineOfSightBlocked
    ? "rgba(220, 38, 38, 0.65)"
    : "rgba(107, 114, 128, 0.5)";

  drawDashedLine(
    simulationCtx,
    robot.x,
    robot.y,
    target.x,
    target.y,
    lineColor,
    [5, 5]
  );
}

function drawTargetDetectionLine() {
  if (!targetAcquisition.isAcquired && !sensor.isDetected) return;

  drawDashedLine(
    simulationCtx,
    target.x,
    target.y,
    sensor.detectedX,
    sensor.detectedY,
    "rgba(249, 115, 22, 0.45)",
    [4, 4]
  );
}

function drawDetectionEstimateLine() {
  if (!targetAcquisition.isAcquired) return;

  drawDashedLine(
    simulationCtx,
    sensor.detectedX,
    sensor.detectedY,
    estimator.estimatedX,
    estimator.estimatedY,
    "rgba(34, 197, 94, 0.45)",
    [4, 4]
  );
}

function drawDashedLine(ctx, x1, y1, x2, y2, color, dashPattern) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.setLineDash(dashPattern);
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.setLineDash([]);
}

/* =========================================================
   Graph Drawing
========================================================= */

function drawGrid(ctx, canvas, stepX, stepY) {
  ctx.strokeStyle = "#eef2f7";
  ctx.lineWidth = 1;

  for (let x = 0; x <= canvas.width; x += stepX) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  for (let y = 0; y <= canvas.height; y += stepY) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
}

function clearGraphCanvas(ctx, canvas) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawGraphLegend(ctx, color, label, x, y) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y - 9, 12, 12);

  ctx.fillStyle = "#111827";
  ctx.font = "12px Arial";
  ctx.fillText(label, x + 16, y);
}

function drawErrorGraph() {
  clearGraphCanvas(errorGraphCtx, errorGraphCanvas);
  drawGrid(errorGraphCtx, errorGraphCanvas, 50, 30);

  errorGraphCtx.fillStyle = "#6b7280";
  errorGraphCtx.font = "12px Arial";
  errorGraphCtx.fillText("Error px", 10, 16);
  errorGraphCtx.fillText(
    "Time →",
    errorGraphCanvas.width - 60,
    errorGraphCanvas.height - 10
  );

  if (errorHistory.length < 2) return;

  const maxError = Math.max(...errorHistory, 50);

  errorGraphCtx.beginPath();
  errorGraphCtx.strokeStyle = "#7c3aed";
  errorGraphCtx.lineWidth = 2;

  for (let i = 0; i < errorHistory.length; i++) {
    const x = (i / 299) * errorGraphCanvas.width;
    const y =
      errorGraphCanvas.height -
      (errorHistory[i] / maxError) * (errorGraphCanvas.height - 25) -
      10;

    if (i === 0) {
      errorGraphCtx.moveTo(x, y);
    } else {
      errorGraphCtx.lineTo(x, y);
    }
  }

  errorGraphCtx.stroke();

  const currentError = errorHistory[errorHistory.length - 1];

  errorGraphCtx.fillStyle = "#111827";
  errorGraphCtx.font = "13px Arial";
  errorGraphCtx.fillText(
    `Current Error: ${currentError.toFixed(2)} px`,
    12,
    errorGraphCanvas.height - 12
  );
}

function drawPositionGraph() {
  clearGraphCanvas(positionGraphCtx, positionGraphCanvas);
  drawGrid(positionGraphCtx, positionGraphCanvas, 50, 40);

  positionGraphCtx.fillStyle = "#6b7280";
  positionGraphCtx.font = "12px Arial";
  positionGraphCtx.fillText("Position px", 10, 16);
  positionGraphCtx.fillText(
    "Time →",
    positionGraphCanvas.width - 60,
    positionGraphCanvas.height - 10
  );

  drawPositionLine("targetX", "#ef4444", "Target X", 80, 18);
  drawPositionLine("robotX", "#2563eb", "Robot X", 170, 18);
  drawPositionLine("targetY", "#f97316", "Target Y", 260, 18);
  drawPositionLine("robotY", "#22c55e", "Robot Y", 350, 18);
}

function drawPositionLine(key, color, label, legendX, legendY) {
  drawGraphLegend(positionGraphCtx, color, label, legendX, legendY);

  if (positionHistory.length < 2) return;

  const maxValue = Math.max(simulationCanvas.width, simulationCanvas.height);

  positionGraphCtx.beginPath();
  positionGraphCtx.strokeStyle = color;
  positionGraphCtx.lineWidth = 2;

  for (let i = 0; i < positionHistory.length; i++) {
    const x = (i / 299) * positionGraphCanvas.width;
    const value = positionHistory[i][key];

    const y =
      positionGraphCanvas.height -
      (value / maxValue) * (positionGraphCanvas.height - 35) -
      15;

    if (i === 0) {
      positionGraphCtx.moveTo(x, y);
    } else {
      positionGraphCtx.lineTo(x, y);
    }
  }

  positionGraphCtx.stroke();
}

function drawComparisonGraph() {
  clearGraphCanvas(comparisonGraphCtx, comparisonGraphCanvas);
  drawGrid(comparisonGraphCtx, comparisonGraphCanvas, 50, 40);

  comparisonGraphCtx.fillStyle = "#6b7280";
  comparisonGraphCtx.font = "12px Arial";
  comparisonGraphCtx.fillText("RMSE px", 10, 16);
  comparisonGraphCtx.fillText(
    "Time →",
    comparisonGraphCanvas.width - 60,
    comparisonGraphCanvas.height - 10
  );

  drawComparisonLine(
    estimatorComparison.history.rawRmse,
    "#f97316",
    "Raw",
    90,
    18
  );

  drawComparisonLine(
    estimatorComparison.history.movingAverageRmse,
    "#22c55e",
    "Moving Avg",
    160,
    18
  );

  drawComparisonLine(
    estimatorComparison.history.kalmanRmse,
    "#7c3aed",
    "Kalman",
    280,
    18
  );
}

function drawComparisonLine(history, color, label, legendX, legendY) {
  drawGraphLegend(comparisonGraphCtx, color, label, legendX, legendY);

  if (history.length < 2) return;

  const combinedHistory = [
    ...estimatorComparison.history.rawRmse,
    ...estimatorComparison.history.movingAverageRmse,
    ...estimatorComparison.history.kalmanRmse
  ];

  const maxValue = Math.max(...combinedHistory, 20);

  comparisonGraphCtx.beginPath();
  comparisonGraphCtx.strokeStyle = color;
  comparisonGraphCtx.lineWidth = 2;

  for (let i = 0; i < history.length; i++) {
    const x = (i / 299) * comparisonGraphCanvas.width;

    const y =
      comparisonGraphCanvas.height -
      (history[i] / maxValue) * (comparisonGraphCanvas.height - 35) -
      15;

    if (i === 0) {
      comparisonGraphCtx.moveTo(x, y);
    } else {
      comparisonGraphCtx.lineTo(x, y);
    }
  }

  comparisonGraphCtx.stroke();
}

function drawMotionEventGraph() {
  clearGraphCanvas(motionEventGraphCtx, motionEventGraphCanvas);
  drawGrid(motionEventGraphCtx, motionEventGraphCanvas, 50, 40);

  motionEventGraphCtx.fillStyle = "#6b7280";
  motionEventGraphCtx.font = "12px Arial";
  motionEventGraphCtx.fillText("Kalman error px", 10, 16);
  motionEventGraphCtx.fillText(
    "Time →",
    motionEventGraphCanvas.width - 60,
    motionEventGraphCanvas.height - 10
  );

  drawGraphLegend(
    motionEventGraphCtx,
    "#dc2626",
    "Kalman Error",
    120,
    18
  );

  drawGraphLegend(
    motionEventGraphCtx,
    "#111827",
    "Motion Change",
    250,
    18
  );

  drawMotionEventErrorLine();
  drawMotionEventMarkers();
}

function drawMotionEventErrorLine() {
  const history = motionEventAnalysis.kalmanErrorHistory;

  if (history.length < 2) return;

  const maxValue = Math.max(
    ...history.map(point => point.error),
    30
  );

  const earliestVisibleFrame = Math.max(0, frameCount - 299);

  motionEventGraphCtx.beginPath();
  motionEventGraphCtx.strokeStyle = "#dc2626";
  motionEventGraphCtx.lineWidth = 2;

  for (let i = 0; i < history.length; i++) {
    const x =
      ((history[i].frame - earliestVisibleFrame) / 299) *
      motionEventGraphCanvas.width;

    const y =
      motionEventGraphCanvas.height -
      (history[i].error / maxValue) * (motionEventGraphCanvas.height - 35) -
      15;

    if (i === 0) {
      motionEventGraphCtx.moveTo(x, y);
    } else {
      motionEventGraphCtx.lineTo(x, y);
    }
  }

  motionEventGraphCtx.stroke();
}

function drawMotionEventMarkers() {
  const earliestVisibleFrame = Math.max(0, frameCount - 299);

  for (const marker of motionEventAnalysis.eventMarkers) {
    const x =
      ((marker.frame - earliestVisibleFrame) / 299) *
      motionEventGraphCanvas.width;

    if (x < 0 || x > motionEventGraphCanvas.width) continue;

    motionEventGraphCtx.beginPath();
    motionEventGraphCtx.strokeStyle = "rgba(17, 24, 39, 0.55)";
    motionEventGraphCtx.setLineDash([5, 5]);
    motionEventGraphCtx.moveTo(x, 25);
    motionEventGraphCtx.lineTo(x, motionEventGraphCanvas.height - 20);
    motionEventGraphCtx.stroke();
    motionEventGraphCtx.setLineDash([]);

    motionEventGraphCtx.save();
    motionEventGraphCtx.translate(x + 4, motionEventGraphCanvas.height - 28);
    motionEventGraphCtx.rotate(-Math.PI / 2);
    motionEventGraphCtx.fillStyle = "#111827";
    motionEventGraphCtx.font = "11px Arial";
    motionEventGraphCtx.fillText(marker.label, 0, 0);
    motionEventGraphCtx.restore();
  }
}

function drawFuturePredictionGraph() {
  clearGraphCanvas(futurePredictionGraphCtx, futurePredictionGraphCanvas);
  drawGrid(futurePredictionGraphCtx, futurePredictionGraphCanvas, 50, 40);

  futurePredictionGraphCtx.fillStyle = "#6b7280";
  futurePredictionGraphCtx.font = "12px Arial";
  futurePredictionGraphCtx.fillText("Robot-target distance px", 10, 16);
  futurePredictionGraphCtx.fillText(
    "Time →",
    futurePredictionGraphCanvas.width - 60,
    futurePredictionGraphCanvas.height - 10
  );

  drawFuturePredictionLine(
    futurePrediction.history.rawDistance,
    "#f97316",
    "Raw follow",
    170,
    18
  );

  drawFuturePredictionLine(
    futurePrediction.history.kalmanDistance,
    "#7c3aed",
    "KF follow",
    285,
    18
  );

  drawFuturePredictionLine(
    futurePrediction.history.futureDistance,
    "#06b6d4",
    "Future follow",
    390,
    18
  );
}

function drawFuturePredictionLine(history, color, label, legendX, legendY) {
  drawGraphLegend(futurePredictionGraphCtx, color, label, legendX, legendY);

  if (history.length < 2) return;

  const combinedHistory = [
    ...futurePrediction.history.rawDistance,
    ...futurePrediction.history.kalmanDistance,
    ...futurePrediction.history.futureDistance
  ];

  const maxValue = Math.max(...combinedHistory, futurePrediction.desiredRange, 50);

  futurePredictionGraphCtx.beginPath();
  futurePredictionGraphCtx.strokeStyle = color;
  futurePredictionGraphCtx.lineWidth = 2;

  for (let i = 0; i < history.length; i++) {
    const x = (i / 299) * futurePredictionGraphCanvas.width;

    const y =
      futurePredictionGraphCanvas.height -
      (history[i] / maxValue) * (futurePredictionGraphCanvas.height - 35) -
      15;

    if (i === 0) {
      futurePredictionGraphCtx.moveTo(x, y);
    } else {
      futurePredictionGraphCtx.lineTo(x, y);
    }
  }

  futurePredictionGraphCtx.stroke();

  const desiredY =
    futurePredictionGraphCanvas.height -
    (futurePrediction.desiredRange / maxValue) *
      (futurePredictionGraphCanvas.height - 35) -
    15;

  futurePredictionGraphCtx.beginPath();
  futurePredictionGraphCtx.strokeStyle = "rgba(17, 24, 39, 0.35)";
  futurePredictionGraphCtx.setLineDash([6, 4]);
  futurePredictionGraphCtx.moveTo(0, desiredY);
  futurePredictionGraphCtx.lineTo(futurePredictionGraphCanvas.width, desiredY);
  futurePredictionGraphCtx.stroke();
  futurePredictionGraphCtx.setLineDash([]);
}



/* =========================================================
   Step 12 Failure Case Analysis
========================================================= */

function resetFailureMonitor() {
  failureMonitor.status = "Healthy";
  failureMonitor.activeCase = "None";
  failureMonitor.severity = "Normal";
  failureMonitor.cause = "No active failure detected.";
  failureMonitor.mitigation = "Continue monitoring tracking error, visibility, path status, and collision count.";
  failureMonitor.notAcquiredFrames = 0;
  failureMonitor.visionLossFrames = 0;
  failureMonitor.plannerFailureFrames = 0;
  failureMonitor.stuckFrames = 0;
  failureMonitor.highErrorFrames = 0;
  failureMonitor.lastDetectionFrame = frameCount;
  failureMonitor.previousRobotX = robot.x;
  failureMonitor.previousRobotY = robot.y;
  failureMonitor.previousCollisionCount = astarPlanner.collisionCount;
  failureMonitor.lastLoggedCase = "None";
  failureMonitor.lastLoggedFrame = -9999;
  failureMonitor.history = [];
}

function clearFailureLog() {
  failureMonitor.logs = [];
  failureMonitor.lastLoggedCase = "None";
  failureMonitor.lastLoggedFrame = -9999;
  updateFailureDisplay();
  drawFailureGraph();
}

function diagnoseFailureCases(trackingError, predictionError) {
  if (sensor.isDetected) {
    failureMonitor.lastDetectionFrame = frameCount;
  }

  if (!targetAcquisition.isAcquired) {
    failureMonitor.notAcquiredFrames++;
  } else {
    failureMonitor.notAcquiredFrames = 0;
  }

  if (targetAcquisition.isAcquired && !sensor.isDetected) {
    failureMonitor.visionLossFrames++;
  } else {
    failureMonitor.visionLossFrames = 0;
  }

  if (
    astarPlanner.status === "No path" ||
    dijkstraPlanner.status === "No path"
  ) {
    failureMonitor.plannerFailureFrames++;
  } else {
    failureMonitor.plannerFailureFrames = 0;
  }

  const robotMoved = getDistance(
    robot.x,
    robot.y,
    failureMonitor.previousRobotX,
    failureMonitor.previousRobotY
  );

  const hasPathToFollow =
    targetAcquisition.isAcquired &&
    astarPlanner.path.length > 0 &&
    astarPlanner.currentWaypointIndex < astarPlanner.path.length;

  const collisionIncreased =
    astarPlanner.collisionCount > failureMonitor.previousCollisionCount;

  if (
    hasPathToFollow &&
    (robotMoved < 0.08 || collisionIncreased) &&
    getDistance(robot.x, robot.y, estimator.estimatedX, estimator.estimatedY) > robot.safeDistance + 25
  ) {
    failureMonitor.stuckFrames++;
  } else {
    failureMonitor.stuckFrames = Math.max(0, failureMonitor.stuckFrames - 2);
  }

  if (targetAcquisition.isAcquired && trackingError > 160) {
    failureMonitor.highErrorFrames++;
  } else {
    failureMonitor.highErrorFrames = Math.max(0, failureMonitor.highErrorFrames - 2);
  }

  failureMonitor.previousRobotX = robot.x;
  failureMonitor.previousRobotY = robot.y;
  failureMonitor.previousCollisionCount = astarPlanner.collisionCount;

  const diagnosis = chooseHighestPriorityFailure(trackingError, predictionError);
  applyFailureDiagnosis(diagnosis);
  saveFailureHistory(diagnosis.score, trackingError);
}

function chooseHighestPriorityFailure(trackingError, predictionError) {
  if (failureMonitor.plannerFailureFrames > 25) {
    return {
      status: "Critical",
      activeCase: "No Valid Path",
      severity: "High",
      score: 4,
      cause: "A* or Dijkstra cannot find a collision-free route from the robot to the estimated target location.",
      mitigation: "Increase obstacle clearance only if collision risk is high; otherwise move the start/target position, reduce obstacle density, or add a search/recovery behavior."
    };
  }

  if (failureMonitor.stuckFrames > 75) {
    return {
      status: "Critical",
      activeCase: "Robot Stuck Near Obstacle",
      severity: "High",
      score: 4,
      cause: "The planner has a path, but the realistic robot controller is not making progress. This usually happens near a wall/corner or moving obstacle.",
      mitigation: "Trigger a replan, slow down near corners, increase waypoint clearance, or add a local unstuck recovery turn."
    };
  }

  if (failureMonitor.notAcquiredFrames > 180) {
    return {
      status: "Warning",
      activeCase: "Target Not Acquired",
      severity: "Medium",
      score: 2,
      cause: "The robot has not received its first valid camera measurement. The target may be outside camera range or behind an obstacle.",
      mitigation: "Move robot/target into line of sight, increase camera range, or add a search/scanning behavior before tracking begins."
    };
  }

  if (failureMonitor.visionLossFrames > 160) {
    const reason = sensor.lastLossReason || "measurement unavailable";

    return {
      status: "Warning",
      activeCase: "Extended Visual Loss",
      severity: "Medium",
      score: 2,
      cause: `The target was acquired earlier, but camera measurements have been unavailable for a long time. Current reason: ${reason}.`,
      mitigation: "Use Kalman prediction temporarily, but limit confidence over time and re-acquire visually before trusting the estimate."
    };
  }

  if (failureMonitor.highErrorFrames > 90) {
    return {
      status: "Warning",
      activeCase: "High Tracking Error",
      severity: "Medium",
      score: 2,
      cause: "The robot is far from the true target for many frames. Possible causes are high noise, slow robot speed, dynamic obstacles, or long visual loss.",
      mitigation: "Reduce sensor noise, increase robot speed/turn rate, reduce dynamic obstacle speed, or shorten the prediction horizon."
    };
  }

  return {
    status: "Healthy",
    activeCase: "None",
    severity: "Normal",
    score: 0,
    cause: "No active failure detected.",
    mitigation: "Continue monitoring tracking error, visibility, path status, and collision count."
  };
}

function applyFailureDiagnosis(diagnosis) {
  failureMonitor.status = diagnosis.status;
  failureMonitor.activeCase = diagnosis.activeCase;
  failureMonitor.severity = diagnosis.severity;
  failureMonitor.cause = diagnosis.cause;
  failureMonitor.mitigation = diagnosis.mitigation;

  if (diagnosis.activeCase !== "None") {
    maybeLogFailureEvent(diagnosis);
  }
}

function maybeLogFailureEvent(diagnosis) {
  const enoughTimePassed = frameCount - failureMonitor.lastLoggedFrame > 180;
  const caseChanged = diagnosis.activeCase !== failureMonitor.lastLoggedCase;

  if (!caseChanged && !enoughTimePassed) return;

  failureMonitor.logs.unshift({
    frame: frameCount,
    timeSeconds: (frameCount / 60).toFixed(2),
    activeCase: diagnosis.activeCase,
    severity: diagnosis.severity,
    cause: diagnosis.cause,
    mitigation: diagnosis.mitigation,
    robotX: robot.x,
    robotY: robot.y,
    targetX: target.x,
    targetY: target.y,
    trackingError: errorHistory.length > 0 ? errorHistory[errorHistory.length - 1] : 0,
    sensorDetected: sensor.isDetected ? 1 : 0,
    targetAcquired: targetAcquisition.isAcquired ? 1 : 0,
    lineOfSightBlocked: sensor.isLineOfSightBlocked ? 1 : 0,
    astarStatus: astarPlanner.status,
    collisionCount: astarPlanner.collisionCount
  });

  trimHistory(failureMonitor.logs, 50);
  failureMonitor.lastLoggedCase = diagnosis.activeCase;
  failureMonitor.lastLoggedFrame = frameCount;
}

function saveFailureHistory(score, trackingError) {
  failureMonitor.history.push({
    frame: frameCount,
    score,
    trackingError: targetAcquisition.isAcquired ? trackingError : 0,
    detected: sensor.isDetected ? 1 : 0
  });

  trimHistory(failureMonitor.history, 300);
}

function updateFailureDisplay() {
  if (!systemHealthStatusText) return;

  const framesSinceDetection = Math.max(0, frameCount - failureMonitor.lastDetectionFrame);

  systemHealthStatusText.textContent = failureMonitor.status;
  activeFailureCaseText.textContent = failureMonitor.activeCase;
  failureSeverityText.textContent = failureMonitor.severity;
  framesSinceDetectionText.textContent = framesSinceDetection;
  failureLogCountText.textContent = failureMonitor.logs.length;

  systemHealthStatusText.classList.remove("status-detected", "status-blocked", "status-lost");
  failureSeverityText.classList.remove("status-detected", "status-blocked", "status-lost");

  if (failureMonitor.status === "Critical") {
    systemHealthStatusText.classList.add("status-lost");
    failureSeverityText.classList.add("status-lost");
  } else if (failureMonitor.status === "Warning") {
    systemHealthStatusText.classList.add("status-blocked");
    failureSeverityText.classList.add("status-blocked");
  } else {
    systemHealthStatusText.classList.add("status-detected");
    failureSeverityText.classList.add("status-detected");
  }

  failureDiagnosisTitleText.textContent = failureMonitor.activeCase === "None"
    ? "No active failure"
    : failureMonitor.activeCase;

  failureDiagnosisText.textContent = failureMonitor.cause;
  failureMitigationText.textContent = `Mitigation: ${failureMonitor.mitigation}`;
  updateFailureLogTable();
}

function updateFailureLogTable() {
  if (!failureLogBody) return;

  failureLogBody.innerHTML = "";

  if (failureMonitor.logs.length === 0) {
    const emptyRow = document.createElement("tr");
    const emptyCell = document.createElement("td");
    emptyCell.colSpan = 5;
    emptyCell.textContent = "No failure cases recorded yet.";
    emptyRow.appendChild(emptyCell);
    failureLogBody.appendChild(emptyRow);
    return;
  }

  for (const event of failureMonitor.logs.slice(0, 8)) {
    const row = document.createElement("tr");
    const cells = [
      `${event.frame} (${event.timeSeconds}s)`,
      event.activeCase,
      event.severity,
      event.cause,
      event.mitigation
    ];

    for (const cellText of cells) {
      const cell = document.createElement("td");
      cell.textContent = cellText;
      row.appendChild(cell);
    }

    failureLogBody.appendChild(row);
  }
}

function exportFailureCsv() {
  if (failureMonitor.logs.length === 0) {
    failureMonitor.status = "Healthy";
    failureMonitor.activeCase = "None";
    failureMonitor.cause = "No failure log exists to export.";
    failureMonitor.mitigation = "Run a failure scenario first, then export the recorded cases.";
    updateFailureDisplay();
    return;
  }

  const headers = [
    "frame",
    "timeSeconds",
    "activeCase",
    "severity",
    "cause",
    "mitigation",
    "robotX",
    "robotY",
    "targetX",
    "targetY",
    "trackingError",
    "sensorDetected",
    "targetAcquired",
    "lineOfSightBlocked",
    "astarStatus",
    "collisionCount"
  ];

  const csv = buildCsv(headers, failureMonitor.logs.slice().reverse());
  downloadTextFile("failure_case_log.csv", csv);
}

function drawFailureGraph() {
  if (!failureGraphCtx) return;

  drawGrid(failureGraphCtx, failureGraphCanvas, 90, 50);

  failureGraphCtx.fillStyle = "#475569";
  failureGraphCtx.font = "13px Arial";

  if (failureMonitor.history.length === 0) {
    failureGraphCtx.fillText(
      "Failure timeline will appear here while the simulation runs.",
      24,
      40
    );
    failureGraphCtx.fillText(
      "Score: 0 healthy, 2 warning, 4 critical.",
      24,
      62
    );
    return;
  }

  const maxScore = 4;
  const maxError = Math.max(
    ...failureMonitor.history.map(point => point.trackingError),
    1
  );

  drawFailureLine(
    failureMonitor.history.map(point => point.score),
    maxScore,
    "#dc2626"
  );

  drawFailureLine(
    failureMonitor.history.map(point => (point.trackingError / maxError) * maxScore),
    maxScore,
    "#2563eb"
  );

  drawGraphLegend(failureGraphCtx, "#dc2626", "Failure score", 650, 24);
  drawGraphLegend(failureGraphCtx, "#2563eb", "Scaled tracking error", 650, 44);

  failureGraphCtx.fillStyle = "#475569";
  failureGraphCtx.fillText("0", 28, failureGraphCanvas.height - 18);
  failureGraphCtx.fillText("Warning", 8, failureGraphCanvas.height / 2 + 4);
  failureGraphCtx.fillText("Critical", 8, 26);
}

function drawFailureLine(values, maxValue, color) {
  if (values.length < 2) return;

  failureGraphCtx.beginPath();
  failureGraphCtx.strokeStyle = color;
  failureGraphCtx.lineWidth = 2;

  values.forEach((value, index) => {
    const x = (index / (values.length - 1)) * failureGraphCanvas.width;
    const y = failureGraphCanvas.height - 18 - (value / maxValue) * (failureGraphCanvas.height - 36);

    if (index === 0) {
      failureGraphCtx.moveTo(x, y);
    } else {
      failureGraphCtx.lineTo(x, y);
    }
  });

  failureGraphCtx.stroke();
}

function applyFailureScenario() {
  const scenario = failureScenarioSelect.value;

  isRunning = false;
  if (animationId) cancelAnimationFrame(animationId);
  cancelActiveExperimentRecording("Scenario changed");

  if (scenario === "normal") {
    currentObstacleScenario = "medium";
    startPositions.robotX = 120;
    startPositions.robotY = 250;
    startPositions.targetX = 800;
    startPositions.targetY = 200;
    robot.maxVelocity = 2.8;
    robot.accelerationLimit = 0.08;
    robot.turnRateLimit = 0.06;
    sensor.noiseLevel = 25;
    sensor.cameraRange = 650;
    dynamicObstacleSystem.enabled = true;
    dynamicObstacleSystem.speedMultiplier = 1.0;
  } else if (scenario === "hiddenStart") {
    currentObstacleScenario = "medium";
    startPositions.robotX = 120;
    startPositions.robotY = 250;
    startPositions.targetX = 820;
    startPositions.targetY = 330;
    robot.maxVelocity = 2.8;
    sensor.noiseLevel = 25;
    sensor.cameraRange = 650;
    dynamicObstacleSystem.enabled = false;
    dynamicObstacleSystem.speedMultiplier = 1.0;
  } else if (scenario === "lowCameraRange") {
    currentObstacleScenario = "medium";
    startPositions.robotX = 120;
    startPositions.robotY = 250;
    startPositions.targetX = 800;
    startPositions.targetY = 200;
    robot.maxVelocity = 2.8;
    sensor.noiseLevel = 25;
    sensor.cameraRange = 120;
    dynamicObstacleSystem.enabled = false;
    dynamicObstacleSystem.speedMultiplier = 1.0;
  } else if (scenario === "highNoise") {
    currentObstacleScenario = "medium";
    startPositions.robotX = 120;
    startPositions.robotY = 250;
    startPositions.targetX = 800;
    startPositions.targetY = 200;
    robot.maxVelocity = 2.8;
    sensor.noiseLevel = 80;
    sensor.cameraRange = 650;
    dynamicObstacleSystem.enabled = true;
    dynamicObstacleSystem.speedMultiplier = 1.0;
  } else if (scenario === "plannerStress") {
    currentObstacleScenario = "high";
    startPositions.robotX = 80;
    startPositions.robotY = 430;
    startPositions.targetX = 845;
    startPositions.targetY = 85;
    robot.maxVelocity = 2.3;
    sensor.noiseLevel = 35;
    sensor.cameraRange = 700;
    dynamicObstacleSystem.enabled = true;
    dynamicObstacleSystem.speedMultiplier = 1.6;
  } else if (scenario === "slowRobot") {
    currentObstacleScenario = "medium";
    startPositions.robotX = 120;
    startPositions.robotY = 250;
    startPositions.targetX = 800;
    startPositions.targetY = 200;
    robot.maxVelocity = 0.8;
    robot.accelerationLimit = 0.04;
    robot.turnRateLimit = 0.04;
    sensor.noiseLevel = 25;
    sensor.cameraRange = 650;
    dynamicObstacleSystem.enabled = true;
    dynamicObstacleSystem.speedMultiplier = 1.8;
  }

  staticObstacles = getObstacleScenario(currentObstacleScenario);
  obstacleScenarioSelect.value = currentObstacleScenario;
  dynamicObstacleModeSelect.value = dynamicObstacleSystem.enabled ? "enabled" : "disabled";
  syncStartPositionInputs(
    { x: startPositions.robotX, y: startPositions.robotY },
    { x: startPositions.targetX, y: startPositions.targetY }
  );

  resetSimulation();
}

/* =========================================================
   Experiment Persistence + Timed Trial Helpers
========================================================= */

function getSelectedTrialMode() {
  return trialModeSelect ? trialModeSelect.value : "testing";
}

function getSelectedAutoExportMode() {
  return autoExportSelect ? autoExportSelect.value : "none";
}

function getRequestedTrialDurationSeconds() {
  const value = trialDurationInput ? Number(trialDurationInput.value) : DEFAULT_TIMED_TRIAL_SECONDS;
  return clamp(Number.isFinite(value) ? value : DEFAULT_TIMED_TRIAL_SECONDS, 5, 180);
}

function getActiveRecordingElapsedSeconds() {
  if (!experimentRecorder.isRecording || !experimentRecorder.recordingStartedAtMs) {
    return 0;
  }
  return Math.max(0, (performance.now() - experimentRecorder.recordingStartedAtMs) / 1000);
}

function persistExperimentStore() {
  try {
    const payload = {
      savedAt: new Date().toISOString(),
      trialCounter: experimentRecorder.trialCounter,
      trials: experimentRecorder.trials,
      savedFrameRows: experimentRecorder.savedFrameRows
    };
    localStorage.setItem(EXPERIMENT_STORAGE_KEY, JSON.stringify(payload));
    if (storageStatusText) {
      storageStatusText.textContent = "Saved in browser";
      storageStatusText.classList.remove("muted-pill");
    }
  } catch (error) {
    if (storageStatusText) {
      storageStatusText.textContent = "Local save failed";
      storageStatusText.classList.add("muted-pill");
    }
    console.warn("Could not save experiment results in localStorage", error);
  }
}

function loadExperimentStore() {
  try {
    const raw = localStorage.getItem(EXPERIMENT_STORAGE_KEY);
    if (!raw) {
      if (storageStatusText) storageStatusText.textContent = "No saved trials yet";
      return;
    }

    const payload = JSON.parse(raw);
    experimentRecorder.trialCounter = Number(payload.trialCounter) || 0;
    experimentRecorder.trials = Array.isArray(payload.trials) ? payload.trials : [];
    experimentRecorder.savedFrameRows = Array.isArray(payload.savedFrameRows) ? payload.savedFrameRows : [];
    experimentRecorder.status = experimentRecorder.trials.length > 0 ? "Loaded saved trials" : "Idle";

    if (storageStatusText) {
      storageStatusText.textContent = `${experimentRecorder.trials.length} restored`;
      storageStatusText.classList.toggle("muted-pill", experimentRecorder.trials.length === 0);
    }
  } catch (error) {
    if (storageStatusText) storageStatusText.textContent = "Could not restore";
    console.warn("Could not restore saved experiment results", error);
  }
}

function getFilteredDashboardTrials() {
  const mode = dashboardFilterSelect ? dashboardFilterSelect.value : "final";
  if (mode === "all") return experimentRecorder.trials;
  return experimentRecorder.trials.filter(trial => (trial.trialMode || "testing") === mode);
}

function getFinalTrials() {
  return experimentRecorder.trials.filter(trial => trial.trialMode === "final");
}

function getTrialByNameFromList(name, list) {
  return list.find(trial => trial.trialName === name);
}

function downloadCurrentResultCsvFiles(modeOverride = null) {
  const mode = modeOverride || getSelectedAutoExportMode();
  if (mode === "summary" || mode === "summary_frames") {
    exportExperimentSummaryCsv();
  }

  if (mode === "summary_frames") {
    exportExperimentFrameCsv();
  }
}

function runSelectedTimedTrial() {
  loadSelectedTestCase();

  const durationSeconds = getRequestedTrialDurationSeconds();
  experimentRecorder.targetDurationSeconds = durationSeconds;

  if (trialCountdownText) trialCountdownText.textContent = `${durationSeconds.toFixed(0)}s remaining`;
  if (trialProgressBar) trialProgressBar.value = 0;
  if (timedTrialStatusText) {
    timedTrialStatusText.textContent = `Timed ${getSelectedTrialMode()} trial started. It will stop automatically after ${durationSeconds.toFixed(0)} seconds.`;
  }

  startExperimentRecording({
    timed: true,
    autoStopEnabled: true,
    trialMode: getSelectedTrialMode(),
    durationSeconds,
    autoExportMode: getSelectedAutoExportMode(),
    testCaseKey: testCaseSelect ? testCaseSelect.value : "manual"
  });
}

function stopTimedTrialNow() {
  if (!experimentRecorder.isRecording) return;
  stopAndSaveExperimentRecording();
}

/* =========================================================
   Step 11 Controlled Experiment Recording
========================================================= */

function startExperimentRecording(options = {}) {
  if (experimentRecorder.isRecording) return;

  const requestedName = experimentNameInput.value.trim();
  const selectedCaseKey = options.testCaseKey || (testCaseSelect ? testCaseSelect.value : "manual");
  const selectedCase = finalTestCases[selectedCaseKey] || null;

  experimentRecorder.trialCounter++;
  experimentRecorder.activeTrialName = requestedName || `trial_${experimentRecorder.trialCounter}`;
  experimentRecorder.activeTrialMode = options.trialMode || getSelectedTrialMode();
  experimentRecorder.activeTestCaseKey = selectedCaseKey;
  experimentRecorder.activeTestCaseTitle = selectedCase ? selectedCase.title : "Manual trial";
  experimentRecorder.targetDurationSeconds = options.durationSeconds || getRequestedTrialDurationSeconds();
  experimentRecorder.autoStopEnabled = Boolean(options.autoStopEnabled);
  experimentRecorder.autoExportMode = options.autoExportMode || getSelectedAutoExportMode();
  experimentRecorder.recordingStartedAtMs = performance.now();
  experimentRecorder.activeTrialStartedAt = new Date().toISOString();
  experimentRecorder.lastAutoExportAt = null;
  experimentRecorder.frameRows = [];
  experimentRecorder.baselineCollisionCount = astarPlanner.collisionCount;
  experimentRecorder.baselineDynamicReplans = dynamicObstacleSystem.replanCount;
  experimentRecorder.isRecording = true;
  experimentRecorder.status = experimentRecorder.autoStopEnabled
    ? `Timed ${experimentRecorder.activeTrialMode} trial running`
    : `Manual ${experimentRecorder.activeTrialMode} trial running`;

  if (!isRunning) {
    if (frameCount === 0) {
      readStartPositionInputs();
      resetSimulation();
    }

    isRunning = true;
    animate();
  }

  updateExperimentDisplay();
}

function stopAndSaveExperimentRecording() {
  if (!experimentRecorder.isRecording) {
    updateExperimentDisplay();
    return;
  }

  experimentRecorder.isRecording = false;

  if (experimentRecorder.frameRows.length === 0) {
    experimentRecorder.status = "No data saved";
    updateExperimentDisplay();
    return;
  }

  const summary = summarizeExperimentTrial(experimentRecorder.frameRows);
  experimentRecorder.trials.push(summary);
  experimentRecorder.savedFrameRows.push(...experimentRecorder.frameRows);
  experimentRecorder.frameRows = [];
  experimentRecorder.status = `${summary.trialMode} trial saved`;

  persistExperimentStore();
  updateExperimentDisplay();
  drawExperimentGraph();

  if (experimentRecorder.autoExportMode !== "none") {
    // Let the UI update first, then download files built from all saved trials.
    setTimeout(() => downloadCurrentResultCsvFiles(experimentRecorder.autoExportMode), 100);
  }
}

function cancelActiveExperimentRecording(reasonText) {
  if (!experimentRecorder.isRecording) return;

  experimentRecorder.isRecording = false;
  experimentRecorder.frameRows = [];
  experimentRecorder.status = reasonText || "Cancelled";
  updateExperimentDisplay();
}

function recordExperimentFrame(trackingError, predictionError) {
  if (!experimentRecorder.isRecording) return;

  const elapsedSeconds = getActiveRecordingElapsedSeconds();
  const row = {
    trialMode: experimentRecorder.activeTrialMode,
    testCaseKey: experimentRecorder.activeTestCaseKey,
    testCaseTitle: experimentRecorder.activeTestCaseTitle,
    trialName: experimentRecorder.activeTrialName,
    startedAt: experimentRecorder.activeTrialStartedAt,
    targetDurationSeconds: experimentRecorder.targetDurationSeconds,
    frame: frameCount,
    sampleIndex: experimentRecorder.frameRows.length + 1,
    timeSeconds: elapsedSeconds.toFixed(3),
    targetX: target.x,
    targetY: target.y,
    robotX: robot.x,
    robotY: robot.y,
    estimateX: targetAcquisition.isAcquired ? estimator.estimatedX : "",
    estimateY: targetAcquisition.isAcquired ? estimator.estimatedY : "",
    sensorX: sensor.isDetected ? sensor.detectedX : "",
    sensorY: sensor.isDetected ? sensor.detectedY : "",
    targetAcquired: targetAcquisition.isAcquired ? 1 : 0,
    sensorDetected: sensor.isDetected ? 1 : 0,
    lineOfSightBlocked: sensor.isLineOfSightBlocked ? 1 : 0,
    occluded: occlusion.isActive ? 1 : 0,
    trackingError,
    predictionError: targetAcquisition.isAcquired ? predictionError : "",
    robotSpeed: robot.speed,
    robotMaxVelocity: robot.maxVelocity,
    accelerationLimit: robot.accelerationLimit,
    turnRateLimit: robot.turnRateLimit,
    safeDistance: robot.safeDistance,
    sensorNoise: sensor.noiseLevel,
    cameraRange: sensor.cameraRange,
    estimationWindow: estimator.windowSize,
    predictionHorizon: futurePrediction.horizonFrames,
    obstacleScenario: currentObstacleScenario,
    dynamicObstaclesEnabled: dynamicObstacleSystem.enabled ? 1 : 0,
    dynamicObstacleSpeed: dynamicObstacleSystem.speedMultiplier,
    astarStatus: astarPlanner.status,
    astarPathLength: astarPlanner.pathLength,
    astarPlanningTimeMs: astarPlanner.planningTimeMs,
    astarExploredNodes: astarPlanner.exploredNodes,
    dijkstraStatus: dijkstraPlanner.status,
    dijkstraPathLength: dijkstraPlanner.pathLength,
    dijkstraPlanningTimeMs: dijkstraPlanner.planningTimeMs,
    dijkstraExploredNodes: dijkstraPlanner.exploredNodes,
    collisionCount: astarPlanner.collisionCount,
    dynamicReplans: dynamicObstacleSystem.replanCount
  };

  experimentRecorder.frameRows.push(row);

  if (experimentRecorder.autoStopEnabled && elapsedSeconds >= experimentRecorder.targetDurationSeconds) {
    stopAndSaveExperimentRecording();
    return;
  }

  updateExperimentDisplay();
}

function summarizeExperimentTrial(rows) {
  const acquiredRows = rows.filter(row => row.targetAcquired === 1);
  const detectedRows = rows.filter(row => row.sensorDetected === 1);
  const lineBlockedRows = rows.filter(row => row.lineOfSightBlocked === 1);
  const occludedRows = rows.filter(row => row.occluded === 1);

  const trackingErrors = acquiredRows.map(row => Number(row.trackingError));
  const predictionErrors = acquiredRows
    .map(row => Number(row.predictionError))
    .filter(value => Number.isFinite(value));

  const firstRow = rows[0];
  const lastRow = rows[rows.length - 1];
  const finishedAt = new Date().toISOString();
  const durationSeconds = Number(lastRow.timeSeconds) || rows.length / 60;

  return {
    trialNumber: experimentRecorder.trials.length + 1,
    trialMode: experimentRecorder.activeTrialMode,
    testCaseKey: experimentRecorder.activeTestCaseKey,
    testCaseTitle: experimentRecorder.activeTestCaseTitle,
    trialName: experimentRecorder.activeTrialName,
    startedAt: experimentRecorder.activeTrialStartedAt,
    finishedAt,
    targetDurationSeconds: experimentRecorder.targetDurationSeconds,
    frames: rows.length,
    durationSeconds,
    obstacleScenario: firstRow.obstacleScenario,
    sensorNoise: firstRow.sensorNoise,
    robotMaxVelocity: firstRow.robotMaxVelocity,
    cameraRange: firstRow.cameraRange,
    dynamicObstaclesEnabled: firstRow.dynamicObstaclesEnabled,
    dynamicObstacleSpeed: firstRow.dynamicObstacleSpeed,
    meanTrackingError: getMeanFromList(trackingErrors),
    trackingRmse: getRmseFromList(trackingErrors),
    maxTrackingError: getMaxFromList(trackingErrors),
    meanPredictionError: getMeanFromList(predictionErrors),
    predictionRmse: getRmseFromList(predictionErrors),
    detectionRate: (detectedRows.length / rows.length) * 100,
    acquisitionRate: (acquiredRows.length / rows.length) * 100,
    lineBlockedRate: (lineBlockedRows.length / rows.length) * 100,
    occlusionRate: (occludedRows.length / rows.length) * 100,
    meanAstarPlanningTimeMs: getMeanFromList(rows.map(row => Number(row.astarPlanningTimeMs))),
    meanDijkstraPlanningTimeMs: getMeanFromList(rows.map(row => Number(row.dijkstraPlanningTimeMs))),
    meanAstarExploredNodes: getMeanFromList(rows.map(row => Number(row.astarExploredNodes))),
    meanDijkstraExploredNodes: getMeanFromList(rows.map(row => Number(row.dijkstraExploredNodes))),
    meanAstarPathLength: getMeanFromList(rows.map(row => Number(row.astarPathLength))),
    meanDijkstraPathLength: getMeanFromList(rows.map(row => Number(row.dijkstraPathLength))),
    collisionCount: lastRow.collisionCount - experimentRecorder.baselineCollisionCount,
    dynamicReplans: lastRow.dynamicReplans - experimentRecorder.baselineDynamicReplans
  };
}

function getMeanFromList(values) {
  const cleanValues = values.filter(value => Number.isFinite(value));
  if (cleanValues.length === 0) return 0;
  return cleanValues.reduce((sum, value) => sum + value, 0) / cleanValues.length;
}

function getRmseFromList(values) {
  const cleanValues = values.filter(value => Number.isFinite(value));
  if (cleanValues.length === 0) return 0;

  const meanSquared = cleanValues.reduce((sum, value) => sum + value * value, 0) / cleanValues.length;
  return Math.sqrt(meanSquared);
}

function getMaxFromList(values) {
  const cleanValues = values.filter(value => Number.isFinite(value));
  if (cleanValues.length === 0) return 0;
  return Math.max(...cleanValues);
}

function getLiveExperimentRmse() {
  const errors = experimentRecorder.frameRows
    .filter(row => row.targetAcquired === 1)
    .map(row => Number(row.trackingError));

  return getRmseFromList(errors);
}

function updateTimedTrialProgress() {
  const targetSeconds = experimentRecorder.targetDurationSeconds || getRequestedTrialDurationSeconds();
  const elapsedSeconds = getActiveRecordingElapsedSeconds();
  const remainingSeconds = Math.max(0, targetSeconds - elapsedSeconds);
  const progress = experimentRecorder.isRecording
    ? clamp((elapsedSeconds / targetSeconds) * 100, 0, 100)
    : 0;

  if (trialCountdownText) {
    trialCountdownText.textContent = experimentRecorder.isRecording
      ? `${remainingSeconds.toFixed(1)}s remaining`
      : "Not running";
  }

  if (trialProgressBar) {
    trialProgressBar.value = progress;
  }

  if (timedTrialStatusText) {
    if (experimentRecorder.isRecording) {
      timedTrialStatusText.textContent = `${experimentRecorder.activeTrialName} (${experimentRecorder.activeTrialMode}) recording: ${elapsedSeconds.toFixed(1)}s / ${targetSeconds.toFixed(0)}s.`;
    } else {
      timedTrialStatusText.textContent = experimentRecorder.status || "Idle";
    }
  }
}

function updateExperimentDisplay() {
  if (!experimentStatusText) return;

  const elapsedSeconds = getActiveRecordingElapsedSeconds();
  const targetSeconds = experimentRecorder.targetDurationSeconds || getRequestedTrialDurationSeconds();

  experimentStatusText.textContent = experimentRecorder.isRecording
    ? `${experimentRecorder.status}`
    : experimentRecorder.status;

  experimentFrameCountText.textContent = experimentRecorder.isRecording
    ? `${elapsedSeconds.toFixed(1)}s / ${targetSeconds.toFixed(0)}s`
    : `${experimentRecorder.frameRows.length}s / ${targetSeconds.toFixed(0)}s`;
  experimentLiveRmseText.textContent = `${getLiveExperimentRmse().toFixed(2)} px`;
  experimentSavedCountText.textContent = experimentRecorder.trials.length;

  updateTimedTrialProgress();
  updateExperimentResultsTable();
  updateFindingsDashboard();
}

function updateExperimentResultsTable() {
  if (!experimentResultsBody) return;

  experimentResultsBody.innerHTML = "";

  if (experimentRecorder.trials.length === 0) {
    const emptyRow = document.createElement("tr");
    const emptyCell = document.createElement("td");
    emptyCell.colSpan = 11;
    emptyCell.textContent = "No recorded trials yet.";
    emptyRow.appendChild(emptyCell);
    experimentResultsBody.appendChild(emptyRow);
    return;
  }

  for (const trial of experimentRecorder.trials) {
    const row = document.createElement("tr");
    row.className = trial.trialMode === "final" ? "final-trial-row" : "testing-trial-row";
    const cells = [
      (trial.trialMode || "testing").toUpperCase(),
      `${trial.trialNumber}. ${trial.trialName}`,
      trial.obstacleScenario,
      `${trial.sensorNoise}px`,
      `${Number(trial.robotMaxVelocity).toFixed(1)}`,
      `${Number(trial.durationSeconds || 0).toFixed(1)}s`,
      `${trial.trackingRmse.toFixed(2)}px`,
      `${trial.detectionRate.toFixed(1)}%`,
      `${trial.meanAstarPlanningTimeMs.toFixed(2)}ms`,
      `${trial.meanDijkstraPlanningTimeMs.toFixed(2)}ms`,
      trial.collisionCount
    ];

    for (const cellText of cells) {
      const cell = document.createElement("td");
      cell.textContent = cellText;
      row.appendChild(cell);
    }

    experimentResultsBody.appendChild(row);
  }
}

function clearExperimentResults() {
  const confirmClear = confirm("Clear all saved testing and final trials from this browser?");
  if (!confirmClear) return;

  cancelActiveExperimentRecording("Idle");
  experimentRecorder.trials = [];
  experimentRecorder.savedFrameRows = [];
  experimentRecorder.frameRows = [];
  experimentRecorder.status = "Idle";

  try {
    localStorage.removeItem(EXPERIMENT_STORAGE_KEY);
    if (storageStatusText) storageStatusText.textContent = "Saved trials cleared";
  } catch (error) {
    console.warn("Could not clear local experiment storage", error);
  }

  updateExperimentDisplay();
  drawExperimentGraph();
}

function exportExperimentSummaryCsv() {
  if (experimentRecorder.trials.length === 0) {
    experimentRecorder.status = "No saved summary to export";
    updateExperimentDisplay();
    return;
  }

  const headers = [
    "trialNumber",
    "trialMode",
    "testCaseKey",
    "testCaseTitle",
    "trialName",
    "startedAt",
    "finishedAt",
    "targetDurationSeconds",
    "frames",
    "durationSeconds",
    "obstacleScenario",
    "sensorNoise",
    "robotMaxVelocity",
    "cameraRange",
    "dynamicObstaclesEnabled",
    "dynamicObstacleSpeed",
    "meanTrackingError",
    "trackingRmse",
    "maxTrackingError",
    "meanPredictionError",
    "predictionRmse",
    "detectionRate",
    "acquisitionRate",
    "lineBlockedRate",
    "occlusionRate",
    "meanAstarPlanningTimeMs",
    "meanDijkstraPlanningTimeMs",
    "meanAstarExploredNodes",
    "meanDijkstraExploredNodes",
    "meanAstarPathLength",
    "meanDijkstraPathLength",
    "collisionCount",
    "dynamicReplans"
  ];

  const csv = buildCsv(headers, experimentRecorder.trials);
  downloadTextFile("controlled_experiment_summary.csv", csv);
  experimentRecorder.status = "Summary CSV exported";
  updateExperimentDisplay();
}

function exportExperimentFrameCsv() {
  const rows = experimentRecorder.isRecording
    ? [...experimentRecorder.savedFrameRows, ...experimentRecorder.frameRows]
    : experimentRecorder.savedFrameRows;

  if (rows.length === 0) {
    experimentRecorder.status = "No frame data to export";
    updateExperimentDisplay();
    return;
  }

  const headers = [
    "trialMode",
    "testCaseKey",
    "testCaseTitle",
    "trialName",
    "startedAt",
    "targetDurationSeconds",
    "frame",
    "sampleIndex",
    "timeSeconds",
    "targetX",
    "targetY",
    "robotX",
    "robotY",
    "estimateX",
    "estimateY",
    "sensorX",
    "sensorY",
    "targetAcquired",
    "sensorDetected",
    "lineOfSightBlocked",
    "occluded",
    "trackingError",
    "predictionError",
    "robotSpeed",
    "robotMaxVelocity",
    "accelerationLimit",
    "turnRateLimit",
    "safeDistance",
    "sensorNoise",
    "cameraRange",
    "estimationWindow",
    "predictionHorizon",
    "obstacleScenario",
    "dynamicObstaclesEnabled",
    "dynamicObstacleSpeed",
    "astarStatus",
    "astarPathLength",
    "astarPlanningTimeMs",
    "astarExploredNodes",
    "dijkstraStatus",
    "dijkstraPathLength",
    "dijkstraPlanningTimeMs",
    "dijkstraExploredNodes",
    "collisionCount",
    "dynamicReplans"
  ];

  const csv = buildCsv(headers, rows);
  downloadTextFile("controlled_experiment_frames.csv", csv);
  experimentRecorder.status = "Frame CSV exported";
  updateExperimentDisplay();
}

function buildCsv(headers, rows) {
  const lines = [headers.join(",")];

  for (const row of rows) {
    lines.push(headers.map(header => formatCsvValue(row[header])).join(","));
  }

  return lines.join("\n");
}

function formatCsvValue(value) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value.toFixed(4) : "";
  }

  if (value === null || value === undefined) {
    return "";
  }

  const text = String(value).replace(/"/g, '""');
  return `"${text}"`;
}

function downloadTextFile(filename, text) {
  const blob = new Blob([text], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function drawExperimentGraph() {
  drawGrid(experimentGraphCtx, experimentGraphCanvas, 90, 55);

  experimentGraphCtx.fillStyle = "#475569";
  experimentGraphCtx.font = "13px Arial";

  if (experimentRecorder.trials.length === 0) {
    experimentGraphCtx.fillText(
      "Record and save controlled trials to compare tracking RMSE and mean error.",
      24,
      40
    );
    return;
  }

  const maxValue = Math.max(
    ...experimentRecorder.trials.map(trial => Math.max(trial.trackingRmse, trial.meanTrackingError)),
    1
  );

  const left = 52;
  const bottom = experimentGraphCanvas.height - 34;
  const top = 24;
  const graphHeight = bottom - top;
  const groupWidth = Math.max(72, (experimentGraphCanvas.width - left - 32) / experimentRecorder.trials.length);
  const barWidth = Math.min(24, groupWidth / 4);

  experimentGraphCtx.strokeStyle = "#94a3b8";
  experimentGraphCtx.beginPath();
  experimentGraphCtx.moveTo(left, top);
  experimentGraphCtx.lineTo(left, bottom);
  experimentGraphCtx.lineTo(experimentGraphCanvas.width - 20, bottom);
  experimentGraphCtx.stroke();

  experimentGraphCtx.fillStyle = "#475569";
  experimentGraphCtx.fillText(`${maxValue.toFixed(1)} px`, 8, top + 5);
  experimentGraphCtx.fillText("0", 32, bottom + 4);

  experimentRecorder.trials.forEach((trial, index) => {
    const groupX = left + index * groupWidth + 24;
    const rmseHeight = (trial.trackingRmse / maxValue) * graphHeight;
    const meanHeight = (trial.meanTrackingError / maxValue) * graphHeight;

    experimentGraphCtx.fillStyle = "#2563eb";
    experimentGraphCtx.fillRect(groupX, bottom - rmseHeight, barWidth, rmseHeight);

    experimentGraphCtx.fillStyle = "#16a34a";
    experimentGraphCtx.fillRect(groupX + barWidth + 4, bottom - meanHeight, barWidth, meanHeight);

    experimentGraphCtx.fillStyle = "#334155";
    experimentGraphCtx.fillText(`T${trial.trialNumber}`, groupX - 2, bottom + 18);
  });

  drawGraphLegend(experimentGraphCtx, "#2563eb", "Tracking RMSE", 650, 24);
  drawGraphLegend(experimentGraphCtx, "#16a34a", "Mean Error", 650, 44);
}

/* =========================================================
   Animation Loop
========================================================= */

function animate() {
  if (!isRunning) return;

  updateDynamicObstacles();
  updateTargetSourceMotion();
  updateOcclusionState();
  updateSensorDetection();
  updateParallelEstimatorComparison();
  updateMotionChangeAnalysis();
  updateFuturePredictionComparison();

  const predictionError = updateEstimator();
  updateOcclusionMetrics(predictionError);
  const trackingError = updateRobotMotion();

  updateMetrics(trackingError, predictionError);
  diagnoseFailureCases(trackingError, predictionError);
  recordExperimentFrame(trackingError, predictionError);

  savePathHistory();
  savePositionHistory();

  drawSimulation();
  drawErrorGraph();
  drawPositionGraph();
  drawComparisonGraph();
  drawMotionEventGraph();
  drawFuturePredictionGraph();
  drawExperimentGraph();
  drawFailureGraph();

  animationId = requestAnimationFrame(animate);
}


/* =========================================================
   Test Assistant and Findings Dashboard
========================================================= */

function updateTestAssistantInfo() {
  if (!testCaseSelect || !currentTestNameText) return;

  const testCase = finalTestCases[testCaseSelect.value] || finalTestCases.baseline;
  currentTestNameText.textContent = testCase.trialName;
  currentScreenshotFileText.textContent = testCase.screenshot;
  currentReasonText.textContent = testCase.reason;
  currentValuesToExtractText.textContent = testCase.extract;
  currentExpectedText.textContent = testCase.expected;
}

function setControlValue(element, value, eventName) {
  if (!element) return;
  element.value = value;
  element.dispatchEvent(new Event(eventName, { bubbles: true }));
}

function loadSelectedTestCase() {
  if (!testCaseSelect) return;

  const testCase = finalTestCases[testCaseSelect.value] || finalTestCases.baseline;
  const settings = testCase.settings;

  isRunning = false;
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
  cancelActiveExperimentRecording("Test case changed");

  setControlValue(robotStartXInput, settings.robotX, "change");
  setControlValue(robotStartYInput, settings.robotY, "change");
  setControlValue(targetStartXInput, settings.targetX, "change");
  setControlValue(targetStartYInput, settings.targetY, "change");
  setControlValue(sensorNoiseSlider, settings.sensorNoise, "input");
  setControlValue(cameraRangeSlider, settings.cameraRange, "input");
  setControlValue(robotSpeedSlider, settings.robotMaxVelocity, "input");
  setControlValue(obstacleScenarioSelect, settings.obstacleScenario, "change");
  setControlValue(dynamicObstacleModeSelect, settings.dynamicObstacleMode, "change");
  setControlValue(dynamicObstacleSpeedSlider, settings.dynamicObstacleSpeed, "input");
  setControlValue(failureScenarioSelect, settings.failureScenario, "change");
  setControlValue(estimationModeSelect, "kalman", "change");

  if (experimentNameInput) {
    experimentNameInput.value = testCase.trialName;
  }

  readStartPositionInputs();
  resetSimulation();

  if (testLoadStatusText) {
    testLoadStatusText.textContent = `${testCase.trialName} loaded`;
  }

  updateTestAssistantInfo();
  updateFindingsDashboard();
}

function getTrialByName(name, preferFinal = true) {
  const searchList = preferFinal ? getFinalTrials() : experimentRecorder.trials;
  return getTrialByNameFromList(name, searchList) || experimentRecorder.trials.find(trial => trial.trialName === name);
}

function getLastSavedTrial() {
  if (!experimentRecorder || experimentRecorder.trials.length === 0) return null;
  return experimentRecorder.trials[experimentRecorder.trials.length - 1];
}

function formatPercentChange(currentValue, baselineValue) {
  if (!Number.isFinite(currentValue) || !Number.isFinite(baselineValue) || baselineValue === 0) {
    return "--";
  }
  const change = ((currentValue - baselineValue) / baselineValue) * 100;
  const direction = change >= 0 ? "higher" : "lower";
  return `${Math.abs(change).toFixed(1)}% ${direction}`;
}

function getAStarNodeSavingForTrial(trial) {
  if (!trial || !Number.isFinite(trial.meanDijkstraExploredNodes) || trial.meanDijkstraExploredNodes === 0) {
    return null;
  }
  return ((trial.meanDijkstraExploredNodes - trial.meanAstarExploredNodes) / trial.meanDijkstraExploredNodes) * 100;
}

function buildReadmeFindingSentence() {
  const finalTrials = getFinalTrials();
  const useFinalOnly = finalTrials.length > 0;
  const list = useFinalOnly ? finalTrials : experimentRecorder.trials;

  const baseline = getTrialByNameFromList("baseline", list);
  const highNoise = getTrialByNameFromList("high_noise", list);
  const los = getTrialByNameFromList("line_of_sight_blocked", list);
  const dense = getTrialByNameFromList("dense_obstacles", list);
  const dynamic = getTrialByNameFromList("dynamic_obstacles", list);
  const slow = getTrialByNameFromList("slow_robot", list);

  if (!baseline) {
    return "Mark trials as Final and record the baseline trial first. Then record high_noise, line_of_sight_blocked, dense_obstacles, dynamic_obstacles, and slow_robot to generate a final evidence sentence.";
  }

  const prefix = useFinalOnly ? "final controlled trials" : "saved test trials";
  const parts = [
    `In the ${prefix}, the baseline run achieved ${baseline.trackingRmse.toFixed(2)} px tracking RMSE with ${baseline.detectionRate.toFixed(1)}% detection rate and ${baseline.collisionCount} collisions.`
  ];

  if (highNoise) {
    parts.push(`Under high sensor noise, tracking RMSE became ${highNoise.trackingRmse.toFixed(2)} px, ${formatPercentChange(highNoise.trackingRmse, baseline.trackingRmse)} than baseline.`);
  }

  if (los) {
    parts.push(`In the line-of-sight blocked case, the blocked-rate was ${los.lineBlockedRate.toFixed(1)}%, confirming that the camera model does not see through obstacles.`);
  }

  if (dense) {
    const saving = getAStarNodeSavingForTrial(dense);
    if (saving !== null) {
      parts.push(`In dense obstacles, A* explored ${dense.meanAstarExploredNodes.toFixed(1)} nodes versus Dijkstra's ${dense.meanDijkstraExploredNodes.toFixed(1)}, giving a ${saving.toFixed(1)}% node reduction.`);
    }
  }

  if (dynamic) {
    parts.push(`With dynamic obstacles enabled, the planner triggered ${dynamic.dynamicReplans} replans while recording ${dynamic.collisionCount} collisions.`);
  }

  if (slow) {
    parts.push(`The slow-robot stress case reached ${slow.trackingRmse.toFixed(2)} px RMSE, showing how robot speed limits affect target-following performance.`);
  }

  return parts.join(" ");
}

function renderDashboardResultsTable() {
  if (!dashboardResultsBody) return;

  const trials = getFilteredDashboardTrials();
  dashboardResultsBody.innerHTML = "";

  if (trials.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 10;
    const selected = dashboardFilterSelect ? dashboardFilterSelect.value : "final";
    cell.textContent = selected === "final"
      ? "No final trials yet. Mark Trial as Final before running report-quality tests."
      : "No saved trials for this view yet.";
    row.appendChild(cell);
    dashboardResultsBody.appendChild(row);
    return;
  }

  for (const trial of trials) {
    const saving = getAStarNodeSavingForTrial(trial);
    const row = document.createElement("tr");
    row.className = trial.trialMode === "final" ? "final-trial-row" : "testing-trial-row";

    const cells = [
      (trial.trialMode || "testing").toUpperCase(),
      trial.trialName,
      `${trial.trackingRmse.toFixed(2)} px`,
      `${trial.detectionRate.toFixed(1)}%`,
      `${trial.lineBlockedRate.toFixed(1)}%`,
      `${trial.meanAstarExploredNodes.toFixed(1)}`,
      `${trial.meanDijkstraExploredNodes.toFixed(1)}`,
      saving === null ? "--" : `${saving.toFixed(1)}%`,
      trial.dynamicReplans,
      trial.collisionCount
    ];

    for (const cellText of cells) {
      const cell = document.createElement("td");
      cell.textContent = cellText;
      row.appendChild(cell);
    }

    dashboardResultsBody.appendChild(row);
  }
}

function updateFindingsDashboard() {
  if (!liveRmseFindingText) return;

  const detectionRateValue =
    sensor.totalDetectionChecks > 0
      ? (sensor.successfulDetections / sensor.totalDetectionChecks) * 100
      : 100;

  liveRmseFindingText.textContent = `${getLiveExperimentRmse().toFixed(2)} px`;
  liveDetectionFindingText.textContent = `${detectionRateValue.toFixed(1)}%`;

  const lastTrial = getLastSavedTrial();
  if (lastTrial) {
    latestSavedTrialFindingText.textContent = `${(lastTrial.trialMode || "testing").toUpperCase()} · ${lastTrial.trialName}: ${lastTrial.trackingRmse.toFixed(2)} px RMSE`;
  } else {
    latestSavedTrialFindingText.textContent = "None";
  }

  const finalTrials = getFinalTrials();
  const baselineFinal = getTrialByNameFromList("baseline", finalTrials);
  const highNoiseFinal = getTrialByNameFromList("high_noise", finalTrials);
  const denseFinal = getTrialByNameFromList("dense_obstacles", finalTrials);
  const fallbackDense = denseFinal || getTrialByName("dense_obstacles", false) || lastTrial;
  const saving = getAStarNodeSavingForTrial(fallbackDense);

  plannerEfficiencyFindingText.textContent = saving === null ? "Waiting" : `${saving.toFixed(1)}% fewer nodes`;

  if (finalTrialsCountText) finalTrialsCountText.textContent = String(finalTrials.length);
  if (baselineFinalRmseText) baselineFinalRmseText.textContent = baselineFinal ? `${baselineFinal.trackingRmse.toFixed(2)} px` : "Waiting";
  if (highNoiseDeltaText) {
    highNoiseDeltaText.textContent = baselineFinal && highNoiseFinal
      ? formatPercentChange(highNoiseFinal.trackingRmse, baselineFinal.trackingRmse)
      : "Waiting";
  }
  if (collisionFinalTotalText) {
    const totalCollisions = finalTrials.reduce((sum, trial) => sum + Number(trial.collisionCount || 0), 0);
    collisionFinalTotalText.textContent = String(totalCollisions);
  }

  const savedCount = experimentRecorder.trials.length;
  if (resultReadinessStatusText) {
    resultReadinessStatusText.textContent = savedCount === 0
      ? "No trials yet"
      : `${savedCount} saved · ${finalTrials.length} final`;
    resultReadinessStatusText.classList.toggle("muted-pill", savedCount === 0);
  }

  if (readmeFindingText) {
    readmeFindingText.textContent = buildReadmeFindingSentence();
  }

  renderDashboardResultsTable();
}

function openExperimentsPanel() {
  const experimentsPanel = document.getElementById("experimentsPanel");
  if (experimentsPanel) {
    experimentsPanel.open = true;
    experimentsPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function copyReadmeFinding() {
  if (!readmeFindingText) return;
  const text = readmeFindingText.textContent;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      if (copyReadmeFindingBtn) copyReadmeFindingBtn.textContent = "Copied";
      setTimeout(() => {
        if (copyReadmeFindingBtn) copyReadmeFindingBtn.textContent = "Copy Result Sentence";
      }, 1200);
    }).catch(() => {
      if (copyReadmeFindingBtn) copyReadmeFindingBtn.textContent = "Copy failed";
    });
  }
}

function buildFinalReportText() {
  const finalTrials = getFinalTrials();
  const trials = finalTrials.length > 0 ? finalTrials : experimentRecorder.trials;
  const lines = [
    "Uncertainty-Aware Target-Following Robot — Experiment Findings",
    "",
    buildReadmeFindingSentence(),
    "",
    "Saved trial summary:"
  ];

  if (trials.length === 0) {
    lines.push("No saved trials yet.");
  } else {
    for (const trial of trials) {
      const saving = getAStarNodeSavingForTrial(trial);
      lines.push(`- [${(trial.trialMode || "testing").toUpperCase()}] ${trial.trialName}: RMSE ${trial.trackingRmse.toFixed(2)} px, detection ${trial.detectionRate.toFixed(1)}%, LOS blocked ${trial.lineBlockedRate.toFixed(1)}%, A* nodes ${trial.meanAstarExploredNodes.toFixed(1)}, Dijkstra nodes ${trial.meanDijkstraExploredNodes.toFixed(1)}, A* saving ${saving === null ? "--" : saving.toFixed(1) + "%"}, replans ${trial.dynamicReplans}, collisions ${trial.collisionCount}.`);
    }
  }

  lines.push("", "Generated from real saved trials in the browser dashboard.");
  return lines.join("\n");
}

function exportFinalReportText() {
  downloadTextFile("robotics_project_experiment_report.txt", buildFinalReportText());
}

/* =========================================================
   Event Listeners
========================================================= */


if (testCaseSelect) {
  testCaseSelect.addEventListener("change", updateTestAssistantInfo);
}

if (loadTestCaseBtn) {
  loadTestCaseBtn.addEventListener("click", loadSelectedTestCase);
}

if (jumpToExperimentsBtn) {
  jumpToExperimentsBtn.addEventListener("click", openExperimentsPanel);
}

if (runAutomatedTrialBtn) {
  runAutomatedTrialBtn.addEventListener("click", runSelectedTimedTrial);
}

if (stopTimedTrialBtn) {
  stopTimedTrialBtn.addEventListener("click", stopTimedTrialNow);
}

if (dashboardFilterSelect) {
  dashboardFilterSelect.addEventListener("change", updateFindingsDashboard);
}

if (trialDurationInput) {
  trialDurationInput.addEventListener("input", () => {
    experimentRecorder.targetDurationSeconds = getRequestedTrialDurationSeconds();
    updateExperimentDisplay();
  });
}

if (copyReadmeFindingBtn) {
  copyReadmeFindingBtn.addEventListener("click", copyReadmeFinding);
}

if (exportFinalReportBtn) {
  exportFinalReportBtn.addEventListener("click", exportFinalReportText);
}

robotSpeedSlider.addEventListener("input", () => {
  robot.maxVelocity = Number(robotSpeedSlider.value);
  updateMetricDisplay(0, 0);
});

accelerationLimitSlider.addEventListener("input", () => {
  robot.accelerationLimit = Number(accelerationLimitSlider.value);
  updateMetricDisplay(0, 0);
});

turnRateSlider.addEventListener("input", () => {
  robot.turnRateLimit = Number(turnRateSlider.value);
  updateMetricDisplay(0, 0);
});

safeDistanceSlider.addEventListener("input", () => {
  robot.safeDistance = Number(safeDistanceSlider.value);
  updateMetricDisplay(0, 0);
});

sensorNoiseSlider.addEventListener("input", () => {
  sensor.noiseLevel = Number(sensorNoiseSlider.value);
  updateMetricDisplay(0, 0);
});

cameraRangeSlider.addEventListener("input", () => {
  sensor.cameraRange = Number(cameraRangeSlider.value);
  updateMetricDisplay(0, 0);
});

estimationWindowSlider.addEventListener("input", () => {
  estimator.windowSize = Number(estimationWindowSlider.value);
  estimator.readings = [];
  estimatorComparison.movingAverageReadings = [];
  updateMetricDisplay(0, 0);
});

predictionHorizonSlider.addEventListener("input", () => {
  futurePrediction.horizonFrames = Number(predictionHorizonSlider.value);
  updateMetricDisplay(0, 0);
});

desiredRangeSlider.addEventListener("input", () => {
  futurePrediction.desiredRange = Number(desiredRangeSlider.value);
  updateMetricDisplay(0, 0);
  updateFuturePredictionDisplay();
  drawFuturePredictionGraph();
});

obstacleScenarioSelect.addEventListener("change", () => {
  applyObstacleScenario(obstacleScenarioSelect.value);
});

dynamicObstacleModeSelect.addEventListener("change", () => {
  dynamicObstacleSystem.enabled = dynamicObstacleModeSelect.value === "enabled";
  resetDynamicObstacleSystem();
  resetAStarPlanner();
  resetDijkstraPlanner();
  updateMetricDisplay(0, 0);
  drawSimulation();
});

dynamicObstacleSpeedSlider.addEventListener("input", () => {
  dynamicObstacleSystem.speedMultiplier = Number(dynamicObstacleSpeedSlider.value);
  updateMetricDisplay(0, 0);
});

estimationModeSelect.addEventListener("change", () => {
  estimator.readings = [];

  if (targetAcquisition.isAcquired) {
    resetKalmanFilter(sensor.detectedX, sensor.detectedY);
  } else {
    resetKalmanFilter(robot.x, robot.y);
    estimator.estimatedX = robot.x;
    estimator.estimatedY = robot.y;
  }

  updateMetricDisplay(0, 0);
});

measurementSourceSelect.addEventListener("change", () => {
  webcamTracker.measurementSource = measurementSourceSelect.value;

  // Switching the source changes the meaning of the target coordinates, so
  // reset target acquisition and let the robot acquire the target again.
  targetAcquisition.isAcquired = false;
  targetAcquisition.firstAcquiredFrame = null;
  sensor.isDetected = false;
  sensor.lastLossReason = isUsingWebcamTargetSource()
    ? "Webcam not ready"
    : "Not acquired";

  if (!isUsingWebcamTargetSource()) {
    webcamTracker.status = "Simulation mode";
    webcamTracker.isDetected = false;
    webcamTracker.confidence = 0;
    drawWebcamPlaceholder();
  } else if (!webcamTracker.isReady) {
    webcamTracker.status = "Start webcam first";
    drawWebcamMessage("Start webcam, then show a red object");
  }

  resetAStarPlanner();
  resetDijkstraPlanner();
  updateMetricDisplay(0, 0);
  drawSimulation();
});

startWebcamBtn.addEventListener("click", () => {
  startWebcamStream();
});

stopWebcamBtn.addEventListener("click", () => {
  stopWebcamStream();
});

startExperimentBtn.addEventListener("click", () => {
  startExperimentRecording();
});

stopExperimentBtn.addEventListener("click", () => {
  stopAndSaveExperimentRecording();
});

exportExperimentCsvBtn.addEventListener("click", () => {
  exportExperimentSummaryCsv();
});

exportExperimentFramesCsvBtn.addEventListener("click", () => {
  exportExperimentFrameCsv();
});

clearExperimentBtn.addEventListener("click", () => {
  clearExperimentResults();
});

applyFailureScenarioBtn.addEventListener("click", () => {
  applyFailureScenario();
});

clearFailureLogBtn.addEventListener("click", () => {
  clearFailureLog();
});

exportFailureCsvBtn.addEventListener("click", () => {
  exportFailureCsv();
});

applyStartPositionsBtn.addEventListener("click", () => {
  applyInitialPositionsAndReset();
});

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    // If the simulation has not started yet or was reset, read the setup
    // inputs so the user can change start positions and press Start directly.
    if (frameCount === 0) {
      readStartPositionInputs();
      resetSimulation();
    }

    isRunning = true;
    animate();
  }
});

pauseBtn.addEventListener("click", () => {
  isRunning = false;

  if (animationId) {
    cancelAnimationFrame(animationId);
  }
});

resetBtn.addEventListener("click", () => {
  isRunning = false;

  if (animationId) {
    cancelAnimationFrame(animationId);
  }

  cancelActiveExperimentRecording("Stopped by reset");
  resetSimulation();
});

/* =========================================================
   Initial Draw
========================================================= */

loadExperimentStore();
updateTestAssistantInfo();
updateExperimentDisplay();
updateFindingsDashboard();
resetSimulation();
