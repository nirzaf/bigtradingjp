import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, BadgeCheck, BanknoteIcon, CreditCard, 
  TruckIcon, Paintbrush, ClipboardCheck, PackageOpen, Wrench
} from 'lucide-react';

// Color constants from color-codes.md
const COLORS = {
  byzantineBlue: '#3E5AC1',
  ivory: '#F7F7EA',
  white: '#FEFEFE',
  pumpkin: '#F76C09',
  violetBlue: '#1844C6',
  safetyOrange: '#E77D2E'
};

interface BusinessAdvantageIconProps {
  id: number;
  delay?: number;
}

const BusinessAdvantageIcon: React.FC<BusinessAdvantageIconProps> = ({ id, delay = 0 }) => {
  // Function to get icon and colors based on advantage ID
  const getIconConfig = (id: number) => {
    switch (id) {
      case 1: // Quick Response
        return {
          icon: <Zap strokeWidth={1.5} />,
          primaryColor: COLORS.pumpkin,
          secondaryColor: COLORS.safetyOrange,
          bgGradient: `radial-gradient(circle, ${COLORS.pumpkin}20, ${COLORS.byzantineBlue}10)`,
          pulseColor: COLORS.pumpkin
        };
      case 2: // Free Machine Appraisal
        return {
          icon: <BadgeCheck strokeWidth={1.5} />,
          primaryColor: COLORS.byzantineBlue,
          secondaryColor: COLORS.violetBlue,
          bgGradient: `radial-gradient(circle, ${COLORS.byzantineBlue}20, ${COLORS.ivory}10)`,
          pulseColor: COLORS.byzantineBlue
        };
      case 3: // Highest Payout
        return {
          icon: <BanknoteIcon strokeWidth={1.5} />,
          primaryColor: COLORS.safetyOrange,
          secondaryColor: COLORS.pumpkin,
          bgGradient: `radial-gradient(circle, ${COLORS.safetyOrange}20, ${COLORS.pumpkin}10)`,
          pulseColor: COLORS.safetyOrange
        };
      case 4: // Cash Settlement
        return {
          icon: <CreditCard strokeWidth={1.5} />,
          primaryColor: COLORS.violetBlue,
          secondaryColor: COLORS.byzantineBlue,
          bgGradient: `radial-gradient(circle, ${COLORS.violetBlue}20, ${COLORS.byzantineBlue}10)`,
          pulseColor: COLORS.violetBlue
        };
      case 5: // Transport Service
        return {
          icon: <TruckIcon strokeWidth={1.5} />,
          primaryColor: COLORS.byzantineBlue,
          secondaryColor: COLORS.violetBlue,
          bgGradient: `radial-gradient(circle, ${COLORS.byzantineBlue}20, ${COLORS.violetBlue}10)`,
          pulseColor: COLORS.byzantineBlue
        };
      case 6: // Company Logo Removal
        return {
          icon: <Paintbrush strokeWidth={1.5} />,
          primaryColor: COLORS.pumpkin,
          secondaryColor: COLORS.safetyOrange,
          bgGradient: `radial-gradient(circle, ${COLORS.pumpkin}20, ${COLORS.safetyOrange}10)`,
          pulseColor: COLORS.pumpkin
        };
      case 7: // We Do All the Paperwork
        return {
          icon: <ClipboardCheck strokeWidth={1.5} />,
          primaryColor: COLORS.violetBlue,
          secondaryColor: COLORS.byzantineBlue,
          bgGradient: `radial-gradient(circle, ${COLORS.violetBlue}20, ${COLORS.ivory}10)`,
          pulseColor: COLORS.violetBlue
        };
      case 8: // Various Types of Machine
        return {
          icon: <PackageOpen strokeWidth={1.5} />,
          primaryColor: COLORS.safetyOrange,
          secondaryColor: COLORS.byzantineBlue,
          bgGradient: `radial-gradient(circle, ${COLORS.safetyOrange}20, ${COLORS.byzantineBlue}10)`,
          pulseColor: COLORS.safetyOrange
        };
      case 9: // Any Machines, Any Condition
        return {
          icon: <Wrench strokeWidth={1.5} />,
          primaryColor: COLORS.byzantineBlue,
          secondaryColor: COLORS.pumpkin,
          bgGradient: `radial-gradient(circle, ${COLORS.byzantineBlue}20, ${COLORS.pumpkin}10)`,
          pulseColor: COLORS.byzantineBlue
        };
      default:
        return {
          icon: <Zap strokeWidth={1.5} />,
          primaryColor: COLORS.byzantineBlue,
          secondaryColor: COLORS.pumpkin,
          bgGradient: `radial-gradient(circle, ${COLORS.byzantineBlue}20, ${COLORS.pumpkin}10)`,
          pulseColor: COLORS.byzantineBlue
        };
    }
  };

  const { icon, primaryColor, secondaryColor, bgGradient, pulseColor } = getIconConfig(id);

  return (
    <div className="relative">
      <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md">
        {/* Main Icon */}
        <div style={{ color: primaryColor }}>
          {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6" })}
        </div>
        
        {/* Inner Glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ opacity: 0.5 }}
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: delay
          }}
          style={{ 
            background: `linear-gradient(135deg, ${primaryColor}30, ${secondaryColor}10)`,
            filter: "blur(1px)"
          }}
        />
      </div>
      
      {/* Outer Pulse Effect */}
      <motion.div
        className="absolute inset-0 rounded-full z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.4, 0, 0.4], 
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: delay + 0.5
        }}
        style={{ 
          background: bgGradient,
          boxShadow: `0 0 10px 2px ${pulseColor}20`
        }}
      />
      
      {/* Accent Dot */}
      <motion.div
        className="absolute w-2 h-2 rounded-full z-20"
        style={{ 
          background: secondaryColor,
          top: '15%',
          right: '15%'
        }}
        animate={{ 
          opacity: [1, 0.6, 1],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: delay + 1
        }}
      />
    </div>
  );
};

export default BusinessAdvantageIcon;
