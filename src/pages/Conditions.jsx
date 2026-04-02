import React, { useState, useMemo } from "react";
import { Section } from "../components/ui/Section";
import { Card, CardContent } from "../components/ui/Card";
import { ArrowRight, Search, Filter, X } from "lucide-react";
import { Link } from "react-router-dom";
import { conditions } from "../conditions/conditions";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "Neurological",
  "Metabolic & Internal Medicine",
  "Physical Rehab & Pain",
  "Mental Health & Recovery",
  "Wellness & Longevity",
  "Specialized Care",
];

const CategoryBadge = ({ category }) => {
  const getColors = (cat) => {
    switch (cat) {
      case "Neurological":
        return "bg-purple-50 text-purple-600 border-purple-100";
      case "Metabolic & Internal Medicine":
        return "bg-blue-50 text-blue-600 border-blue-100";
      case "Physical Rehab & Pain":
        return "bg-orange-50 text-orange-600 border-orange-100";
      case "Mental Health & Recovery":
        return "bg-green-50 text-green-600 border-green-100";
      case "Wellness & Longevity":
        return "bg-teal-50 text-teal-600 border-teal-100";
      case "Specialized Care":
        return "bg-slate-50 text-slate-600 border-slate-100";
      default:
        return "bg-gray-50 text-gray-600 border-gray-100";
    }
  };

  return (
    <span
      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getColors(category)}`}
    >
      {category}
    </span>
  );
};

const Conditions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredConditions = useMemo(() => {
    return conditions.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const groupedConditions = useMemo(() => {
    if (selectedCategory !== "All" || searchTerm) return null;

    const groups = {};
    categories
      .filter((c) => c !== "All")
      .forEach((cat) => {
        const items = conditions.filter((item) => item.category === cat);
        if (items.length > 0) groups[cat] = items;
      });
    return groups;
  }, [selectedCategory, searchTerm]);

  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      {/* Hero Section */}
      <Section className="pt-16 md:pt-24 pb-4 bg-white text-center border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-secondary-light font-bold tracking-widest uppercase text-xs mb-3 block">
            Integrative Health Programs
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary-dark mb-6 tracking-tight">
            Precision Care,{" "}
            <span className="text-primary italic font-serif">Personalized</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our 34+ specialized programs designed to target the root
            causes of chronic illness and optimize your biological potential.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="max-w-5xl mx-auto mt-12 mb-8 px-4">
          <div className="flex flex-col gap-4 items-center justify-between bg-slate-50 p-2 rounded-2xl border border-slate-200 shadow-sm">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by condition or symptom..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-inner"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 flex-wrap w-full md:w-auto px-2 py-1">
              <span className="text-slate-400 text-sm font-medium hidden lg:block whitespace-nowrap">
                <Filter className="w-4 h-4 inline mr-1" /> Filters:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap block ${
                    selectedCategory === cat
                      ? "bg-primary text-white shadow-md scale-105"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Results Grid */}
      <Section className="py-16 bg-slate-50 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatePresence mode="wait">
            {filteredConditions.length === 0 ? (
              <motion.div
                key="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100">
                  <Search className="w-8 h-8 text-slate-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  No programs found
                </h3>
                <p className="text-slate-500">
                  We couldn't find any protocol matching "{searchTerm}". Try
                  adjusting your filters.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="mt-6 text-primary font-bold border-b-2 border-primary/20 hover:border-primary transition-all pb-0.5"
                >
                  Clear all filters
                </button>
              </motion.div>
            ) : groupedConditions ? (
              /* Grouped View for "All" selection to reduce fatigue */
              <motion.div
                key="grouped"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-24"
              >
                {Object.entries(groupedConditions).map(
                  ([cat, items], catIdx) => (
                    <div key={cat} className="relative">
                      <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary-dark">
                          {cat}
                        </h2>
                        <div className="h-px bg-slate-200 flex-grow" />
                        <span className="text-slate-400 font-medium text-sm">
                          {items.length} Programs
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {items.map((item, idx) => (
                          <ProgramCard key={item.slug} item={item} idx={idx} />
                        ))}
                      </div>
                    </div>
                  ),
                )}
              </motion.div>
            ) : (
              /* Filtered/Search Flat Grid */
              <motion.div
                key="filtered"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredConditions.map((item, idx) => (
                  <ProgramCard key={item.slug} item={item} idx={idx} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>
    </div>
  );
};

const ProgramCard = ({ item, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: idx * 0.05 }}
    className="h-full"
  >
    <Link to={`/conditions/${item.slug}`} className="block h-full">
      <Card className="overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-500 bg-white group h-full flex flex-col rounded-2xl">
        <div className="h-56 overflow-hidden relative shrink-0">
          <img
            src={item.cover}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <div className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black text-primary-dark uppercase tracking-[0.1em] shadow-lg border border-slate-100">
              Protocol
            </div>
            <CategoryBadge category={item.category} />
          </div>
        </div>
        <CardContent className="p-7 flex flex-col flex-grow relative bg-white">
          <h2 className="text-xl font-extrabold text-slate-800 mb-3 line-clamp-2 leading-tight group-hover:text-primary transition-colors duration-300">
            {item.title}
          </h2>
          <p className="text-slate-500 text-[14px] leading-relaxed mb-8 line-clamp-3 flex-grow font-medium">
            {item.desc}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
            <span className="text-primary-light font-bold text-xs flex items-center group-hover:translate-x-1 transition-transform tracking-wider uppercase">
              See How We Treat This <ArrowRight className="ml-2 w-3.5 h-3.5" />
            </span>
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:bg-primary/10">
              <ArrowRight className="w-4 h-4 text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  </motion.div>
);

export default Conditions;
