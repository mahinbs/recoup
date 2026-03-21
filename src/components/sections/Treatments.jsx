import React, { useState } from "react";
import { Section } from "../ui/Section";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { conditions } from "../../conditions/conditions";
import { Link } from "react-router-dom";

const Treatments = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <Section id="treatments" className="bg-white py-24 overflow-hidden">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8 relative z-10 px-4">
        <div className="max-w-3xl">
          <span className="text-primary-light font-bold tracking-widest uppercase text-xs mb-4 block border-b border-primary-light/20 pb-4 w-fit">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark leading-tight">
            What We{" "}
            <span className="text-primary italic font-serif">Treat</span>
          </h2>
        </div>
        <Link
          to="/conditions"
          className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-primary transition-colors"
        >
          Explore Services
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Desktop Horizontal Accordion */}
      <div className="hidden lg:flex h-[500px] w-full gap-2 px-4">
        {conditions.slice(0, 6).map((item, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={index}
              className={cn(
                "relative h-full rounded-3xl overflow-hidden transition-all duration-500 ease-in-out",
                isHovered ? "flex-[3.5]" : "flex-1",
              )}
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <img
                src={item.cover}
                alt={item.title}
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-transform duration-700",
                  isHovered
                    ? "scale-110 brightness-90"
                    : "scale-100 brightness-50 grayscale hover:grayscale-0",
                )}
              />
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300",
                  isHovered ? "opacity-100" : "opacity-60",
                )}
              />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div
                  className={cn(
                    "transition-all duration-300",
                    isHovered ? "mb-0" : "mb-4",
                  )}
                >
                  {/* Vertical Title for collapsed state */}
                  <h3
                    className={cn(
                      "text-2xl font-bold text-white whitespace-nowrap origin-bottom-left transition-all duration-300",
                      !isHovered &&
                        "rotate-[-90deg] translate-x-8 -translate-y-8 absolute bottom-0 left-0",
                    )}
                  >
                    {isHovered ? item.title : item.title}
                  </h3>

                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-500 grid",
                      isHovered
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="min-h-0">
                      <p className="text-gray-200 text-base leading-relaxed max-w-md">
                        {item.desc}
                      </p>
                      <Link
                        to={`/conditions/${item.slug}`}
                        className="mt-6 flex items-center text-primary-light font-bold text-sm uppercase tracking-wider"
                      >
                        Learn More <ArrowUpRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Horizontal Scroll */}
      <div className="lg:hidden flex overflow-x-auto gap-4 px-4 pb-8 snap-x snap-mandatory scrollbar-hide">
        {conditions.map((item, index) => (
          <Link
            key={index}
            to={`/conditions/${item.slug}`}
            className="flex-none w-[85vw] h-[400px] relative rounded-3xl overflow-hidden snap-center block"
          >
            <img
              src={item.cover}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {item.fullTitle}
              </h3>
              <p className="text-gray-200 text-sm mb-3">{item.desc}</p>
              <span className="inline-flex items-center text-primary-light font-bold text-sm uppercase tracking-wider">
                Learn more <ArrowUpRight className="ml-2 w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default Treatments;
