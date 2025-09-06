"use client";
import React from "react";
import { motion } from "motion/react";
import { Upload, Users, Download, Activity, Calendar, Search, Clock, RotateCcw, Shield, BarChart3 } from "lucide-react";

// Icon mapping object
const iconMap = {
  Upload,
  Users,
  Download,
  Activity,
  Calendar,
  Search,
  Clock,
  RotateCcw,
  Shield,
  BarChart3,
};

export const TestimonialsColumn = (props) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background">
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, icon, name, role }, i) => {
                const IconComponent = iconMap[icon];
                return (
                  <div
                    className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full"
                    key={i}>
                    <div>{text}</div>
                    <div className="flex items-center gap-2 mt-5">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {IconComponent && (
                          <IconComponent 
                            size={20} 
                            className="text-primary"
                          />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <div className="font-medium tracking-tight leading-5">{name}</div>
                        <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};