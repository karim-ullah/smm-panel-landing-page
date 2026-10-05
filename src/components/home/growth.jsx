const growthPeriods = [
  {
    period: "Weeks 1-2",
    steps: [
      {
        title: "What You Do",
        description:
          "Use SMM services to build initial followers and engagement",
      },
      {
        title: "Why it Works",
        description:
          "Creates baseline credibility and improves first impression",
      },
      {
        title: "Estimated Cost/Time",
        description: "৳2,000–5,000",
      },
    ],
  },
  {
    period: "Weeks 3-4",
    steps: [
      {
        title: "What You Do",
        description: "Start posting consistent, high-quality content",
      },
      {
        title: "Why it Works",
        description: "Larger follower base increases organic engagement",
      },
      {
        title: "Estimated Cost/Time",
        description: "Mostly content effort",
      },
    ],
  },
  {
    period: "Months 2-3",
    steps: [
      {
        title: "What You Do",
        description: "Continue content + light support if needed",
      },
      {
        title: "Why it Works",
        description: "Faster reach, better algorithm response",
      },
      {
        title: "Estimated Cost/Time",
        description: "Reduced SMM usage",
      },
    ],
  },
  {
    period: "Months 3-6",
    steps: [
      {
        title: "What You Do",
        description: "Focus mainly on organic growth",
      },
      {
        title: "Why it Works",
        description: "Strong engagement pushes content naturally",
      },
      {
        title: "Estimated Cost/Time",
        description: "Minimal or no SMM needed",
      },
    ],
  },
];

function TimelineStep({ number, title, description, isLast }) {
  return (
    <li className="relative flex min-h-28 gap-3 rounded-xl bg-card px-3 py-4 sm:px-4">
      <div className="relative z-10 shrink-0">
        <span className="flex size-8 items-center justify-center rounded-lg border border-[#ffd7ba] bg-background text-[11px] font-semibold text-primary">
          {String(number).padStart(2, "0")}
        </span>

        {!isLast && (
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-11 -bottom-9 -translate-x-1/2 border-l border-dashed border-primary before:absolute before:-left-[3.5px] before:-top-1 before:size-1.5 before:rounded-full before:bg-primary after:absolute after:-bottom-1 after:-left-[3.5px] after:size-1.5 after:rounded-full after:bg-primary"
          />
        )}
      </div>

      <div className="min-w-0 pt-1">
        <h3 className="font-parkin text-primary! text-2xl!">
          {title}
        </h3>
        <div className="mt-3 text-sm leading-5 font-normal text-muted-foreground">
          {description}
        </div>
      </div>
    </li>
  );
}

function GrowthPeriodCard({ period, steps }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#ffc69d] bg-background p-3 shadow-[0_3px_0_0_#f4f4f5] sm:p-4">
      <div className="mx-auto flex min-h-11 w-full max-w-44 items-center justify-center rounded-lg bg-linear-to-r from-[#ff9243] via-[#dd6017] to-[#b43b00] px-4 py-2 text-center text-sm font-medium text-white">
        {period}
      </div>

      <ol className="mt-5 grid flex-1 auto-rows-fr gap-3">
        {steps.map((step, index) => (
          <TimelineStep
            key={step.title}
            number={index + 1}
            title={step.title}
            description={step.description}
            isLast={index === steps.length - 1}
          />
        ))}
      </ol>
    </article>
  );
}

export default function Growth() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center">
          <h4 className="mx-auto w-fit border-b-3 border-border pb-1 uppercase">
            Growth
          </h4>
          <h2 className="mt-4 mb-5">
            Growing on Social Media in{" "}
            <span className="text-primary">Bangladesh</span>
          </h2>
          <p className="mx-auto max-w-5xl">
            The smartest way to grow is by combining SMM support with real
            content. You use SMM at the beginning for momentum, then let organic
            growth take over.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {growthPeriods.map((growthPeriod) => (
            <GrowthPeriodCard key={growthPeriod.period} {...growthPeriod} />
          ))}
        </div>
      </div>
    </section>
  );
}
