"use client";

import { Reveal } from "@/components/ui/reveal";

interface ArchitectureNode {
  icon: React.ReactNode;
  label: string;
}

interface ArchitectureDiagramProps {
  nodes: ArchitectureNode[];
}

export function ArchitectureDiagram({ nodes }: ArchitectureDiagramProps) {
  return (
    <div className="flex flex-col items-center gap-0" aria-hidden="true">
      {nodes.map((node, index) => (
        <Reveal key={node.label} delay={index * 100}>
          <div
            className={`
              relative flex items-center gap-3 bg-bg-elevated border border-line rounded-[var(--radius)]
              px-4 py-3 w-full max-w-xs transition-all duration-500 ease-out
              ${index < nodes.length - 1 ? "pb-8" : "pb-3"}
            `}
          >
            {index < nodes.length - 1 && (
              <>
                <div
                  className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[1px] h-6 bg-line"
                  aria-hidden="true"
                />
                <div
                  className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2 h-2 rounded-full bg-accent shadow-[0_0_6px_var(--accent)] animate-pulse-flow"
                  style={{
                    animationDelay: `${index * 0.8}s`,
                  }}
                  aria-hidden="true"
                />
              </>
            )}
            <span className="text-base" aria-hidden="true">
              {node.icon}
            </span>
            <span className="font-mono text-xs text-muted">
              {node.label}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}