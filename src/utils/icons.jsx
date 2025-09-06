// src/utils/icons.jsx  (renamed from .js to .jsx)
import { lazy, Suspense } from 'react';  // Added Suspense import
import { 
  MdDiversity3,
  MdFoundation,
  MdTextFields,
  MdVoiceChat,
  MdWorkOff,
  MdWorkspaces,
} from "react-icons/md";
import { GiSkills } from "react-icons/gi";

// Export individual icons
export {
  MdDiversity3,
  MdFoundation,
  MdTextFields,
  MdVoiceChat,
  MdWorkOff,
  MdWorkspaces,
  GiSkills,
};

// Alternative: If you want to lazy load icons
export const LazyIcons = {
  MdDiversity3: lazy(() => import("react-icons/md").then(mod => ({ 
    default: mod.MdDiversity3 
  }))),
  MdFoundation: lazy(() => import("react-icons/md").then(mod => ({ 
    default: mod.MdFoundation 
  }))),
  MdTextFields: lazy(() => import("react-icons/md").then(mod => ({ 
    default: mod.MdTextFields 
  }))),
  MdVoiceChat: lazy(() => import("react-icons/md").then(mod => ({ 
    default: mod.MdVoiceChat 
  }))),
  MdWorkOff: lazy(() => import("react-icons/md").then(mod => ({ 
    default: mod.MdWorkOff 
  }))),
  MdWorkspaces: lazy(() => import("react-icons/md").then(mod => ({ 
    default: mod.MdWorkspaces 
  }))),
  GiSkills: lazy(() => import("react-icons/gi").then(mod => ({ 
    default: mod.GiSkills 
  }))),
};

// Usage example with lazy loading
export const IconWrapper = ({ iconName, ...props }) => {
  const Icon = LazyIcons[iconName];
  return (
    <Suspense fallback={<div className="w-6 h-6" />}>
      <Icon {...props} />
    </Suspense>
  );
};