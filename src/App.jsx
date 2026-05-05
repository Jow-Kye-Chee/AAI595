import React, { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
} from "recharts";

const dashboardRuns = [
  {
    "label": "Days 1-5",
    "range": "Original selected result",
    "finalSelected": {
      "horizon": "120 bars / 5 days",
      "model": "ensemble",
      "title": "Ensemble Learning Output",
      "actionNow": "HOLD",
      "profitProbability": 52.37,
      "expectedReturn": -0.58,
      "totalReturn": 2.76,
      "buyHoldReturn": 0.44,
      "excessReturn": 2.32,
      "sharpeRatio": 0.423029,
      "maxDrawdown": -0.031855,
      "strategyNote": "Ensemble model has the best trading performance."
    },
    "h24Aggregated": {
      "horizon": "24 bars / 1 day",
      "totalReturn": -3.38,
      "buyHoldReturn": -3.94,
      "excessReturn": 0.56,
      "sharpeRatio": -0.202279
    },
    "perModelResults": [
      {
        "model": "ensemble",
        "actionNow": "HOLD",
        "totalReturn": 2.76,
        "buyHoldReturn": 0.44,
        "excessReturn": 2.32,
        "sharpeRatio": 0.423029,
        "maxDrawdown": -0.031855,
        "signal": "DOWN",
        "profitProbability": 52.37,
        "expectedReturn": -0.58
      },
      {
        "model": "driftaware_lstm",
        "actionNow": "BUY",
        "totalReturn": 1.75,
        "buyHoldReturn": 0.44,
        "excessReturn": 1.32,
        "sharpeRatio": 0.158608,
        "maxDrawdown": -0.106241,
        "signal": "UP",
        "profitProbability": 64.83,
        "expectedReturn": 0.41
      },
      {
        "model": "xgboost",
        "actionNow": "BUY",
        "totalReturn": 1.53,
        "buyHoldReturn": 0.44,
        "excessReturn": 1.09,
        "sharpeRatio": 0.307931,
        "maxDrawdown": -0.016401,
        "signal": "UP",
        "profitProbability": 62.22,
        "expectedReturn": 0.2
      },
      {
        "model": "lstm",
        "actionNow": "SELL",
        "totalReturn": 1.17,
        "buyHoldReturn": 0.44,
        "excessReturn": 0.74,
        "sharpeRatio": 0.181917,
        "maxDrawdown": -0.032339,
        "signal": "DOWN",
        "profitProbability": 46.5,
        "expectedReturn": -1.04
      },
      {
        "model": "arima",
        "actionNow": "HOLD",
        "totalReturn": 0.61,
        "buyHoldReturn": 0.44,
        "excessReturn": 0.18,
        "sharpeRatio": 0.125586,
        "maxDrawdown": -0.026205,
        "signal": "DOWN",
        "profitProbability": 47.17,
        "expectedReturn": -0.99
      },
      {
        "model": "uncertainty_ensemble",
        "actionNow": "SELL",
        "totalReturn": 0.53,
        "buyHoldReturn": 0.44,
        "excessReturn": 0.09,
        "sharpeRatio": 0.096293,
        "maxDrawdown": -0.031855,
        "signal": "DOWN",
        "profitProbability": 45.69,
        "expectedReturn": -1.1
      },
      {
        "model": "hybrid_xgboost",
        "actionNow": "HOLD",
        "totalReturn": 0.21,
        "buyHoldReturn": 0.44,
        "excessReturn": -0.23,
        "sharpeRatio": 0.053227,
        "maxDrawdown": -0.030974,
        "signal": "DOWN",
        "profitProbability": 53.97,
        "expectedReturn": -0.45
      }
    ],
    "forecastMetrics": [
      {
        "model": "hybrid_xgboost",
        "rmse": 0.002838
      },
      {
        "model": "driftaware_lstm",
        "rmse": 0.003812
      },
      {
        "model": "ensemble",
        "rmse": 0.004794
      },
      {
        "model": "uncertainty_ensemble",
        "rmse": 0.004979
      },
      {
        "model": "xgboost",
        "rmse": 0.005065
      },
      {
        "model": "lstm",
        "rmse": 0.005249
      },
      {
        "model": "arima",
        "rmse": 0.005927
      }
    ],
    "horizonComparison": [
      {
        "horizon": "h24 / 1 day",
        "strategyReturn": -3.38,
        "buyHoldReturn": -3.94,
        "excessReturn": 0.56
      },
      {
        "horizon": "h120 / 5 days",
        "strategyReturn": 2.76,
        "buyHoldReturn": 0.44,
        "excessReturn": 2.32
      }
    ]
  },
  {
    "label": "Days 6-10",
    "range": "days_01_05",
    "finalSelected": {
      "horizon": "120 bars / 5 days",
      "model": "arima",
      "title": "ARIMA Output",
      "actionNow": "SELL",
      "profitProbability": 42.79,
      "expectedReturn": -1.33,
      "totalReturn": 7.24,
      "buyHoldReturn": 0.44,
      "excessReturn": 6.8,
      "sharpeRatio": 1.550249,
      "maxDrawdown": -0.009597,
      "strategyNote": "ARIMA model has the best trading performance."
    },
    "h24Aggregated": {
      "horizon": "24 bars / 1 day",
      "totalReturn": 1.78,
      "buyHoldReturn": -3.94,
      "excessReturn": 5.72,
      "sharpeRatio": 0.163818
    },
    "perModelResults": [
      {
        "model": "arima",
        "actionNow": "SELL",
        "totalReturn": 7.24,
        "buyHoldReturn": 0.44,
        "excessReturn": 6.8,
        "sharpeRatio": 1.550249,
        "maxDrawdown": -0.009597,
        "signal": "DOWN",
        "profitProbability": 42.79,
        "expectedReturn": -1.33
      },
      {
        "model": "xgboost",
        "actionNow": "SELL",
        "totalReturn": 4.64,
        "buyHoldReturn": 0.44,
        "excessReturn": 4.21,
        "sharpeRatio": 0.604066,
        "maxDrawdown": -0.032339,
        "signal": "DOWN",
        "profitProbability": 43.42,
        "expectedReturn": -1.28
      },
      {
        "model": "uncertainty_ensemble",
        "actionNow": "SELL",
        "totalReturn": 3.61,
        "buyHoldReturn": 0.44,
        "excessReturn": 3.17,
        "sharpeRatio": 0.539325,
        "maxDrawdown": -0.028665,
        "signal": "DOWN",
        "profitProbability": 41.98,
        "expectedReturn": -1.4
      },
      {
        "model": "ensemble",
        "actionNow": "SELL",
        "totalReturn": 2.64,
        "buyHoldReturn": 0.44,
        "excessReturn": 2.2,
        "sharpeRatio": 0.403999,
        "maxDrawdown": -0.028665,
        "signal": "DOWN",
        "profitProbability": 41.13,
        "expectedReturn": -1.46
      },
      {
        "model": "lstm",
        "actionNow": "SELL",
        "totalReturn": 1.84,
        "buyHoldReturn": 0.44,
        "excessReturn": 1.4,
        "sharpeRatio": 0.286292,
        "maxDrawdown": -0.029113,
        "signal": "DOWN",
        "profitProbability": 40.92,
        "expectedReturn": -1.48
      },
      {
        "model": "driftaware_lstm",
        "actionNow": "SELL",
        "totalReturn": 0.25,
        "buyHoldReturn": 0.44,
        "excessReturn": -0.18,
        "sharpeRatio": 0.054151,
        "maxDrawdown": -0.106241,
        "signal": "DOWN",
        "profitProbability": 42.31,
        "expectedReturn": -1.37
      },
      {
        "model": "hybrid_xgboost",
        "actionNow": "HOLD",
        "totalReturn": -0.17,
        "buyHoldReturn": 0.44,
        "excessReturn": -0.61,
        "sharpeRatio": 0.025762,
        "maxDrawdown": -0.106241,
        "signal": "DOWN",
        "profitProbability": 48.62,
        "expectedReturn": -0.87
      }
    ],
    "forecastMetrics": [
      {
        "model": "uncertainty_ensemble",
        "rmse": 0.002857
      },
      {
        "model": "xgboost",
        "rmse": 0.004195
      },
      {
        "model": "hybrid_xgboost",
        "rmse": 0.004229
      },
      {
        "model": "ensemble",
        "rmse": 0.004514
      },
      {
        "model": "arima",
        "rmse": 0.004521
      },
      {
        "model": "driftaware_lstm",
        "rmse": 0.004983
      },
      {
        "model": "lstm",
        "rmse": 0.00603
      }
    ],
    "horizonComparison": [
      {
        "horizon": "h24 / 1 day",
        "strategyReturn": 1.78,
        "buyHoldReturn": -3.94,
        "excessReturn": 5.72
      },
      {
        "horizon": "h120 / 5 days",
        "strategyReturn": 7.24,
        "buyHoldReturn": 0.44,
        "excessReturn": 6.8
      }
    ]
  },
  {
    "label": "Days 11-15",
    "range": "days_11_15",
    "finalSelected": {
      "horizon": "120 bars / 5 days",
      "model": "lstm",
      "title": "LSTM Output",
      "actionNow": "SELL",
      "profitProbability": 36.92,
      "expectedReturn": -1.8,
      "totalReturn": 1.26,
      "buyHoldReturn": 0.44,
      "excessReturn": 0.82,
      "sharpeRatio": 0.266752,
      "maxDrawdown": -0.028665,
      "strategyNote": "LSTM model has the best trading performance."
    },
    "h24Aggregated": {
      "horizon": "24 bars / 1 day",
      "totalReturn": 1.78,
      "buyHoldReturn": -3.94,
      "excessReturn": 5.72,
      "sharpeRatio": 0.163818
    },
    "perModelResults": [
      {
        "model": "lstm",
        "actionNow": "SELL",
        "totalReturn": 1.26,
        "buyHoldReturn": 0.44,
        "excessReturn": 0.82,
        "sharpeRatio": 0.266752,
        "maxDrawdown": -0.028665,
        "signal": "DOWN",
        "profitProbability": 36.92,
        "expectedReturn": -1.8
      },
      {
        "model": "hybrid_xgboost",
        "actionNow": "HOLD",
        "totalReturn": 0.79,
        "buyHoldReturn": 0.44,
        "excessReturn": 0.35,
        "sharpeRatio": 0.091739,
        "maxDrawdown": -0.106241,
        "signal": "DOWN",
        "profitProbability": 55.59,
        "expectedReturn": -0.32
      },
      {
        "model": "uncertainty_ensemble",
        "actionNow": "SELL",
        "totalReturn": 0.53,
        "buyHoldReturn": 0.44,
        "excessReturn": 0.09,
        "sharpeRatio": 0.074289,
        "maxDrawdown": -0.106241,
        "signal": "DOWN",
        "profitProbability": 29.87,
        "expectedReturn": -2.35
      },
      {
        "model": "ensemble",
        "actionNow": "SELL",
        "totalReturn": 0.5,
        "buyHoldReturn": 0.44,
        "excessReturn": 0.06,
        "sharpeRatio": 0.098404,
        "maxDrawdown": -0.035903,
        "signal": "DOWN",
        "profitProbability": 41.62,
        "expectedReturn": -1.42
      },
      {
        "model": "driftaware_lstm",
        "actionNow": "BUY",
        "totalReturn": 0.13,
        "buyHoldReturn": 0.44,
        "excessReturn": -0.31,
        "sharpeRatio": 0.040241,
        "maxDrawdown": -0.028665,
        "signal": "UP",
        "profitProbability": 62.24,
        "expectedReturn": 0.2
      },
      {
        "model": "arima",
        "actionNow": "SELL",
        "totalReturn": -0.98,
        "buyHoldReturn": 0.44,
        "excessReturn": -1.42,
        "sharpeRatio": -0.036347,
        "maxDrawdown": -0.106241,
        "signal": "DOWN",
        "profitProbability": 25.05,
        "expectedReturn": -2.73
      },
      {
        "model": "xgboost",
        "actionNow": "BUY",
        "totalReturn": -1.66,
        "buyHoldReturn": 0.44,
        "excessReturn": -2.09,
        "sharpeRatio": -0.08946,
        "maxDrawdown": -0.106241,
        "signal": "UP",
        "profitProbability": 72.0,
        "expectedReturn": 0.97
      }
    ],
    "forecastMetrics": [
      {
        "model": "arima",
        "rmse": 0.003653
      },
      {
        "model": "uncertainty_ensemble",
        "rmse": 0.0065
      },
      {
        "model": "hybrid_xgboost",
        "rmse": 0.007742
      },
      {
        "model": "xgboost",
        "rmse": 0.008336
      },
      {
        "model": "ensemble",
        "rmse": 0.009113
      },
      {
        "model": "driftaware_lstm",
        "rmse": 0.009859
      },
      {
        "model": "lstm",
        "rmse": 0.012267
      }
    ],
    "horizonComparison": [
      {
        "horizon": "h24 / 1 day",
        "strategyReturn": 1.78,
        "buyHoldReturn": -3.94,
        "excessReturn": 5.72
      },
      {
        "horizon": "h120 / 5 days",
        "strategyReturn": 1.26,
        "buyHoldReturn": 0.44,
        "excessReturn": 0.82
      }
    ]
  },
  {
    "label": "Days 16-20",
    "range": "days_16_20",
    "finalSelected": {
      "horizon": "120 bars / 5 days",
      "model": "arima",
      "title": "ARIMA Output",
      "actionNow": "HOLD",
      "profitProbability": 46.09,
      "expectedReturn": -1.07,
      "totalReturn": 2.35,
      "buyHoldReturn": 0.44,
      "excessReturn": 1.91,
      "sharpeRatio": 0.471885,
      "maxDrawdown": -0.016131,
      "strategyNote": "ARIMA model has the best trading performance."
    },
    "h24Aggregated": {
      "horizon": "24 bars / 1 day",
      "totalReturn": 1.78,
      "buyHoldReturn": -3.94,
      "excessReturn": 5.72,
      "sharpeRatio": 0.163818
    },
    "perModelResults": [
      {
        "model": "arima",
        "actionNow": "HOLD",
        "totalReturn": 2.35,
        "buyHoldReturn": 0.44,
        "excessReturn": 1.91,
        "sharpeRatio": 0.471885,
        "maxDrawdown": -0.016131,
        "signal": "DOWN",
        "profitProbability": 46.09,
        "expectedReturn": -1.07
      },
      {
        "model": "ensemble",
        "actionNow": "HOLD",
        "totalReturn": 2.34,
        "buyHoldReturn": 0.44,
        "excessReturn": 1.9,
        "sharpeRatio": 0.325701,
        "maxDrawdown": -0.030056,
        "signal": "DOWN",
        "profitProbability": 49.03,
        "expectedReturn": -0.84
      },
      {
        "model": "hybrid_xgboost",
        "actionNow": "SELL",
        "totalReturn": 1.96,
        "buyHoldReturn": 0.44,
        "excessReturn": 1.52,
        "sharpeRatio": 0.171606,
        "maxDrawdown": -0.106241,
        "signal": "DOWN",
        "profitProbability": 31.12,
        "expectedReturn": -2.25
      },
      {
        "model": "lstm",
        "actionNow": "HOLD",
        "totalReturn": -0.79,
        "buyHoldReturn": 0.44,
        "excessReturn": -1.22,
        "sharpeRatio": -0.017048,
        "maxDrawdown": -0.106241,
        "signal": "DOWN",
        "profitProbability": 54.65,
        "expectedReturn": -0.4
      },
      {
        "model": "uncertainty_ensemble",
        "actionNow": "SELL",
        "totalReturn": -1.14,
        "buyHoldReturn": 0.44,
        "excessReturn": -1.58,
        "sharpeRatio": -0.043034,
        "maxDrawdown": -0.106241,
        "signal": "DOWN",
        "profitProbability": 43.25,
        "expectedReturn": -1.3
      },
      {
        "model": "driftaware_lstm",
        "actionNow": "BUY",
        "totalReturn": -2.02,
        "buyHoldReturn": 0.44,
        "excessReturn": -2.46,
        "sharpeRatio": -0.10704,
        "maxDrawdown": -0.106241,
        "signal": "UP",
        "profitProbability": 60.55,
        "expectedReturn": 0.07
      },
      {
        "model": "xgboost",
        "actionNow": "SELL",
        "totalReturn": -5.11,
        "buyHoldReturn": 0.44,
        "excessReturn": -5.55,
        "sharpeRatio": -0.358286,
        "maxDrawdown": -0.106241,
        "signal": "DOWN",
        "profitProbability": 40.88,
        "expectedReturn": -1.48
      }
    ],
    "forecastMetrics": [
      {
        "model": "xgboost",
        "rmse": 0.005652
      },
      {
        "model": "arima",
        "rmse": 0.005947
      },
      {
        "model": "hybrid_xgboost",
        "rmse": 0.006581
      },
      {
        "model": "uncertainty_ensemble",
        "rmse": 0.007613
      },
      {
        "model": "ensemble",
        "rmse": 0.009145
      },
      {
        "model": "driftaware_lstm",
        "rmse": 0.010676
      },
      {
        "model": "lstm",
        "rmse": 0.014059
      }
    ],
    "horizonComparison": [
      {
        "horizon": "h24 / 1 day",
        "strategyReturn": 1.78,
        "buyHoldReturn": -3.94,
        "excessReturn": 5.72
      },
      {
        "horizon": "h120 / 5 days",
        "strategyReturn": 2.35,
        "buyHoldReturn": 0.44,
        "excessReturn": 1.91
      }
    ]
  }
];

const modelColors = [
  "#f5dd9a",
  "rgb(232, 243, 82)",
  "#ffe856",
  "rgb(244, 147, 111)",
  "#ffa45e",
  "#ff4e4e",
  "rgb(239, 65, 91)",
];

const horizonColors = {
  strategyReturn: "rgb(95, 188, 237)",
  buyHoldReturn: "rgb(64, 104, 215)",
  excessReturn: "rgb(52, 70, 148)",
};

function pct(value, digits = 2) {
  return `${Number(value).toFixed(digits)}%`;
}

function num(value, digits = 3) {
  return Number(value).toFixed(digits);
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl shadow-sm border border-slate-200 ${className}`}>
      {children}
    </div>
  );
}

function ActionPill({ action, large = false }) {
  const value = String(action).toUpperCase();

  const style =
    value === "BUY"
      ? "bg-green-100 text-green-700 border-green-200"
      : value === "SELL"
      ? "bg-red-100 text-red-700 border-red-200"
      : "bg-white text-blue-800 border-blue-300";

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border font-bold tracking-wide ${style} ${
        large ? "px-7 py-2 text-3xl" : "px-4 py-1.5 text-lg"
      }`}
    >
      {value}
    </span>
  );
}

function SignalPill({ signal }) {
  const value = String(signal).toUpperCase();

  const style =
    value === "UP"
      ? "bg-green-100 text-green-700 border-green-200"
      : "bg-orange-100 text-orange-700 border-orange-200";

  return (
    <span className={`inline-flex rounded-full border px-4 py-1.5 text-lg font-semibold ${style}`}>
      {value}
    </span>
  );
}

function MetricCard({ title, value, subtitle }) {
  return (
    <Card className="p-6 bg-white">
      <p className="text-lg font-semibold text-slate-600">{title}</p>
      <p className="mt-3 text-4xl font-bold text-slate-900">{value}</p>
      <p className="mt-3 text-lg font-medium text-slate-500">{subtitle}</p>
    </Card>
  );
}

function BuyHoldOnlyLegend() {
  return (
    <div className="mt-2 flex justify-center text-base">
      <div className="flex items-center gap-2">
        <span
          style={{
            width: 14,
            height: 14,
            backgroundColor: "#6d6f73",
            display: "inline-block",
          }}
        />
        <span className="text-slate-600">Buy-Hold Return (%)</span>
      </div>
    </div>
  );
}

function CustomScatterTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;

  const data = payload[0].payload;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-md text-lg">
      <p className="font-bold text-slate-900">{data.model}</p>
      <p className="text-slate-600">Sharpe: {num(data.sharpeRatio, 3)}</p>
      <p className="text-slate-600">Drawdown: {pct(data.maxDrawdown)}</p>
      <p className="text-slate-600">Return: {pct(data.totalReturn)}</p>
    </div>
  );
}

export default function App() {
  const [activeRun, setActiveRun] = useState(0);
  const selectedRun = dashboardRuns[activeRun];

  const finalSelected = selectedRun.finalSelected;
  const perModelResults = selectedRun.perModelResults;
  const forecastMetrics = selectedRun.forecastMetrics;
  const horizonComparison = selectedRun.horizonComparison;

  const bestReturnModel = useMemo(
    () => [...perModelResults].sort((a, b) => b.totalReturn - a.totalReturn)[0],
    [perModelResults]
  );

  const bestRMSEModel = useMemo(
    () => [...forecastMetrics].sort((a, b) => a.rmse - b.rmse)[0],
    [forecastMetrics]
  );

  return (
    <div className="min-h-screen bg-slate-50 px-8 py-8 text-lg">
      <div className="mx-auto max-w-7xl space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">
            DQN Trading Results Dashboard
          </h1>
          <p className="mt-2 text-xl text-slate-600">
            BTCUSDT forecasting and trading evaluation summary.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {dashboardRuns.map((run, index) => (
              <button
                key={run.label}
                type="button"
                onClick={() => setActiveRun(index)}
                className={`rounded-full border px-6 py-2 text-lg font-bold transition ${
                  activeRun === index
                    ? "bg-blue-700 text-white border-blue-700 shadow-sm"
                    : "bg-white text-slate-700 border-slate-300 hover:border-blue-400"
                }`}
              >
                {run.label}
              </button>
            ))}
          </div>
        </div>

        <Card className="p-8 bg-blue-100 border-blue-300">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xl font-semibold text-black">
                Selected Trading Decision:
              </p>
              <h2 className="mt-3 text-4xl font-bold text-blue-800">
                {finalSelected.title}
              </h2>
              <p className="mt-4 max-w-2xl text-xl leading-8 font-medium text-black">
                {finalSelected.strategyNote}
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 lg:items-center">
              <p className="text-xl font-semibold text-black">Action Now</p>
              <ActionPill action={finalSelected.actionNow} large />
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
          <MetricCard
            title="Strategy Return"
            value={pct(finalSelected.totalReturn)}
            subtitle={`${finalSelected.model} strategy return`}
          />
          <MetricCard
            title="Buy-and-Hold Return"
            value={pct(finalSelected.buyHoldReturn)}
            subtitle="Baseline return over same window"
          />
          <MetricCard
            title="Strategy Excess Return"
            value={pct(finalSelected.excessReturn)}
            subtitle="Strategy return minus buy-and-hold"
          />
          <MetricCard
            title="Sharpe Ratio"
            value={num(finalSelected.sharpeRatio, 4)}
            subtitle="Risk-adjusted performance"
          />
          <MetricCard
            title="Max Drawdown"
            value={pct(finalSelected.maxDrawdown)}
            subtitle="Largest reported peak-to-trough drop"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <Card className="p-6 bg-white">
            <h3 className="text-2xl font-bold text-slate-900">
              Per-Model Strategy Return
            </h3>

            <div className="mt-6 h-[430px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={perModelResults} margin={{ left: 20, right: 20, bottom: 15 }}>
                  <CartesianGrid stroke="#e5e7eb" strokeDasharray="2 2" />
                  <XAxis
                    dataKey="model"
                    angle={-30}
                    textAnchor="end"
                    interval={0}
                    height={130}
                    tick={{ fontSize: 18, fontWeight: 600, fill: "#111827" }}
                  />
                  <YAxis tick={{ fontSize: 18, fontWeight: 600, fill: "#111827" }} />
                  <Tooltip contentStyle={{ fontSize: "16px" }} />


                  <Bar dataKey="totalReturn" name="Strategy Return (%)" radius={[8, 8, 0, 0]}>
                    {perModelResults.map((entry, index) => (
                      <Cell key={entry.model} fill={modelColors[index % modelColors.length]} />
                    ))}
                  </Bar>

                  <Bar
                    dataKey="buyHoldReturn"
                    name="Buy-Hold Return (%)"
                    fill="rgb(159, 159, 159)"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <p className="mt-4 text-lg font-medium text-slate-600">
              Best trading return came from{" "}
              <span className="font-bold text-blue-700">{bestReturnModel.model}</span>{" "}
              at {pct(bestReturnModel.totalReturn)}.
            </p>
          </Card>

          <Card className="p-6 bg-white">
            <h3 className="text-2xl font-bold text-slate-900">
              Forecast RMSE by Model
            </h3>

            <div className="mt-6 h-[430px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={forecastMetrics} margin={{ left: 20, right: 20, bottom: 10 }}>
                  <CartesianGrid stroke="#e5e7eb" strokeDasharray="2 2" />
                  <XAxis
                    dataKey="model"
                    angle={-30}
                    textAnchor="end"
                    interval={0}
                    height={130}
                    tick={{ fontSize: 18, fontWeight: 600, fill: "#111827" }}
                  />
                  <YAxis tick={{ fontSize: 18, fontWeight: 600, fill: "#111827" }} />
                  <Tooltip contentStyle={{ fontSize: "16px" }} />
                  <Bar dataKey="rmse" name="RMSE" radius={[8, 8, 0, 0]}>
                    {forecastMetrics.map((entry, index) => (
                      <Cell key={entry.model} fill={modelColors[index % modelColors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <p className="mt-4 text-lg font-medium text-slate-600">
              Lowest RMSE came from{" "}
              <span className="font-bold text-blue-700">{bestRMSEModel.model}</span>{" "}
              with RMSE {bestRMSEModel.rmse}.
            </p>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <Card className="p-6 bg-white">
            <h3 className="text-2xl font-bold text-slate-900">
              Horizon Comparison
            </h3>

            <div className="mt-6 h-[420px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={horizonComparison} margin={{ left: 20, right: 20, bottom: 30 }}>
                  <CartesianGrid stroke="#e5e7eb" strokeDasharray="2 2" />
                  <XAxis dataKey="horizon" tick={{ fontSize: 16 }} />
                  <YAxis tick={{ fontSize: 16 }} />
                  <Tooltip contentStyle={{ fontSize: "16px" }} />
                  <Legend wrapperStyle={{ fontSize: "16px" }} />
                  <Bar
                    dataKey="strategyReturn"
                    name="Strategy Return (%)"
                    fill={horizonColors.strategyReturn}
                    radius={[8, 8, 0, 0]}
                  />
                  <Bar
                    dataKey="buyHoldReturn"
                    name="Buy-Hold Return (%)"
                    fill={horizonColors.buyHoldReturn}
                    radius={[8, 8, 0, 0]}
                  />
                  <Bar
                    dataKey="excessReturn"
                    name="Excess Return (%)"
                    fill={horizonColors.excessReturn}
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <p className="mt-4 text-lg font-medium text-slate-600">
              The selected 5-day output outperformed buy-and-hold by{" "}
              {pct(finalSelected.excessReturn)}.
            </p>
          </Card>

          <Card className="p-6 bg-white">
            <h3 className="text-2xl font-bold text-slate-900">
              Sharpe vs Drawdown by Model
            </h3>

            <div className="mt-6 h-[420px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ left: 20, right: 20, bottom: 30 }}>
                  <CartesianGrid stroke="#e5e7eb" strokeDasharray="2 2" />
                  <XAxis
                    dataKey="maxDrawdown"
                    type="number"
                    name="Drawdown"
                    tick={{ fontSize: 16 }}
                    tickFormatter={(value) => `${value.toFixed(2)}%`}
                  />
                  <YAxis
                    dataKey="sharpeRatio"
                    type="number"
                    name="Sharpe"
                    tick={{ fontSize: 16 }}
                  />
                  <Tooltip content={<CustomScatterTooltip />} />

                  <Legend
                    wrapperStyle={{
                      fontSize: "15px",
                    }}
                    formatter={(value) => (
                      <span style={{ color: "#000000", fontWeight: 500 }}>
                        {value}
                      </span>
                    )}
                  />

                  {perModelResults.map((row, index) => (
                    <Scatter
                      key={row.model}
                      name={row.model}
                      data={[row]}
                      fill={modelColors[index % modelColors.length]}
                    />
                  ))}
                </ScatterChart>
              </ResponsiveContainer>
            </div>

            <p className="mt-4 text-lg font-medium text-slate-600">
              Higher Sharpe is better, while drawdown closer to zero means smaller peak-to-trough loss.
            </p>
          </Card>
        </div>

        <Card className="p-6 bg-white">
          <h3 className="text-2xl font-bold text-slate-900">
            Per-Model RL Output Summary
          </h3>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-lg">
              <thead>
                <tr className="border-b text-left text-slate-600">
                  <th className="py-4 pr-5">Model</th>
                  <th className="py-4 pr-5">Action</th>
                  <th className="py-4 pr-5">Signal</th>
                  <th className="py-4 pr-5">P(profit)</th>
                  <th className="py-4 pr-5">E[5d]</th>
                  <th className="py-4 pr-5">Return</th>
                  <th className="py-4 pr-5">Excess</th>
                  <th className="py-4 pr-5">Sharpe</th>
                  <th className="py-4 pr-5">Drawdown</th>
                </tr>
              </thead>

              <tbody>
                {perModelResults.map((row) => (
                  <tr
                    key={row.model}
                    className={`border-b last:border-0 ${
                      row.model === finalSelected.model ? "bg-blue-50" : ""
                    }`}
                  >
                    <td className="py-4 pr-5 font-bold text-slate-800">
                      {row.model}
                    </td>
                    <td className="py-4 pr-5">
                      <ActionPill action={row.actionNow} />
                    </td>
                    <td className="py-4 pr-5">
                      <SignalPill signal={row.signal} />
                    </td>
                    <td className="py-4 pr-5">{pct(row.profitProbability)}</td>
                    <td className="py-4 pr-5">{pct(row.expectedReturn)}</td>
                    <td className="py-4 pr-5 font-bold">{pct(row.totalReturn)}</td>
                    <td className="py-4 pr-5">{pct(row.excessReturn)}</td>
                    <td className="py-4 pr-5">{num(row.sharpeRatio, 3)}</td>
                    <td className="py-4 pr-5">{pct(row.maxDrawdown)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}