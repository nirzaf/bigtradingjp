import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Brand colors from color-codes.md (converted to 0-1 range for Lottie)
const BRAND_COLORS = {
  byzantineBlue: [0.243, 0.353, 0.757, 1], // #3E5AC1
  ivory: [0.969, 0.969, 0.918, 1], // #F7F7EA
  white: [0.996, 0.996, 0.996, 1], // #FEFEFE
  pumpkin: [0.969, 0.424, 0.035, 1], // #F76C09
  violetBlue: [0.094, 0.267, 0.776, 1], // #1844C6
  safetyOrange: [0.906, 0.49, 0.18, 1], // #E77D2E
  black: [0.1, 0.1, 0.1, 1],
  darkGray: [0.3, 0.3, 0.3, 1],
  lightGray: [0.7, 0.7, 0.7, 1]
};

// Color schemes for each vehicle type
const COLOR_SCHEMES = {
  'sports-car-animation.json': {
    primaryColor: BRAND_COLORS.pumpkin,
    secondaryColor: BRAND_COLORS.violetBlue,
    accentColor: BRAND_COLORS.white,
    wheelColor: BRAND_COLORS.black,
    hubColor: BRAND_COLORS.lightGray,
    windowColor: BRAND_COLORS.byzantineBlue,
    headlightColor: BRAND_COLORS.white
  },
  'excavator-animation.json': {
    primaryColor: BRAND_COLORS.safetyOrange,
    secondaryColor: BRAND_COLORS.byzantineBlue,
    accentColor: BRAND_COLORS.ivory,
    cabinColor: BRAND_COLORS.safetyOrange,
    armColor: BRAND_COLORS.byzantineBlue,
    bucketColor: BRAND_COLORS.darkGray,
    trackColor: BRAND_COLORS.black
  },
  'bulldozer-animation.json': {
    primaryColor: BRAND_COLORS.byzantineBlue,
    secondaryColor: BRAND_COLORS.safetyOrange,
    accentColor: BRAND_COLORS.white,
    bladeColor: BRAND_COLORS.safetyOrange,
    cabinColor: BRAND_COLORS.byzantineBlue,
    trackColor: BRAND_COLORS.black
  },
  'dump-truck-animation.json': {
    primaryColor: BRAND_COLORS.violetBlue,
    secondaryColor: BRAND_COLORS.safetyOrange,
    accentColor: BRAND_COLORS.ivory,
    bedColor: BRAND_COLORS.safetyOrange,
    cabinColor: BRAND_COLORS.violetBlue,
    wheelColor: BRAND_COLORS.black
  },
  'equipment-animation.json': {
    primaryColor: BRAND_COLORS.byzantineBlue,
    secondaryColor: BRAND_COLORS.pumpkin,
    accentColor: BRAND_COLORS.white,
    frameColor: BRAND_COLORS.byzantineBlue,
    detailColor: BRAND_COLORS.pumpkin
  },
  'forklift-animation.json': {
    primaryColor: BRAND_COLORS.safetyOrange,
    secondaryColor: BRAND_COLORS.byzantineBlue,
    accentColor: BRAND_COLORS.ivory,
    frameColor: BRAND_COLORS.safetyOrange,
    forkColor: BRAND_COLORS.byzantineBlue,
    wheelColor: BRAND_COLORS.black
  },
  'truck-animation.json': {
    primaryColor: BRAND_COLORS.violetBlue,
    secondaryColor: BRAND_COLORS.byzantineBlue,
    accentColor: BRAND_COLORS.white,
    cabinColor: BRAND_COLORS.violetBlue,
    trailerColor: BRAND_COLORS.byzantineBlue,
    wheelColor: BRAND_COLORS.black
  },
  'car-animation.json': {
    primaryColor: BRAND_COLORS.byzantineBlue,
    secondaryColor: BRAND_COLORS.ivory,
    accentColor: BRAND_COLORS.safetyOrange,
    bodyColor: BRAND_COLORS.byzantineBlue,
    windowColor: BRAND_COLORS.ivory,
    wheelColor: BRAND_COLORS.black
  },
  'luxury-car-animation.json': {
    primaryColor: BRAND_COLORS.violetBlue,
    secondaryColor: BRAND_COLORS.white,
    accentColor: BRAND_COLORS.pumpkin,
    bodyColor: BRAND_COLORS.violetBlue,
    trimColor: BRAND_COLORS.pumpkin,
    windowColor: BRAND_COLORS.white,
    wheelColor: BRAND_COLORS.black
  }
};

// Process all animation files
const animationsDir = path.join(__dirname, 'src', 'assets', 'animations');
fs.readdir(animationsDir, (err, files) => {
  if (err) {
    console.error('Error reading animations directory:', err);
    return;
  }
  
  files.forEach(file => {
    if (file.endsWith('.json') && COLOR_SCHEMES[file]) {
      const filePath = path.join(animationsDir, file);
      
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(`Error reading file ${file}:`, err);
          return;
        }
        
        try {
          let animation = JSON.parse(data);
          const colorScheme = COLOR_SCHEMES[file];
          
          // Apply colors directly to all layers
          if (animation.layers && animation.layers.length > 0) {
            // Process each layer
            animation.layers.forEach(layer => {
              if (layer.shapes && layer.shapes.length > 0) {
                // Process each shape group
                layer.shapes.forEach(shape => {
                  // Check if this is a group with items
                  if (shape.it && shape.it.length > 0) {
                    // Find fill items in the group
                    shape.it.forEach(item => {
                      // If this is a fill item
                      if (item.ty === 'fl' && item.c && item.c.k) {
                        // Apply appropriate color based on the group name
                        const groupName = shape.nm ? shape.nm.toLowerCase() : '';
                        
                        // Apply primary color by default
                        let newColor = colorScheme.primaryColor;
                        
                        // Check group name to determine which color to apply
                        if (groupName.includes('wheel') || groupName.includes('tire') || groupName.includes('track')) {
                          newColor = colorScheme.wheelColor || BRAND_COLORS.black;
                        } else if (groupName.includes('hub') || groupName.includes('rim')) {
                          newColor = colorScheme.hubColor || BRAND_COLORS.lightGray;
                        } else if (groupName.includes('window') || groupName.includes('glass')) {
                          newColor = colorScheme.windowColor || colorScheme.secondaryColor;
                        } else if (groupName.includes('cabin') || groupName.includes('cockpit')) {
                          newColor = colorScheme.cabinColor || colorScheme.primaryColor;
                        } else if (groupName.includes('body') || groupName.includes('base') || groupName.includes('frame')) {
                          newColor = colorScheme.bodyColor || colorScheme.primaryColor;
                        } else if (groupName.includes('arm') || groupName.includes('boom')) {
                          newColor = colorScheme.armColor || colorScheme.secondaryColor;
                        } else if (groupName.includes('bucket') || groupName.includes('blade') || groupName.includes('scoop')) {
                          newColor = colorScheme.bladeColor || colorScheme.secondaryColor;
                        } else if (groupName.includes('light') || groupName.includes('lamp')) {
                          newColor = colorScheme.headlightColor || BRAND_COLORS.white;
                        } else if (groupName.includes('detail') || groupName.includes('trim') || groupName.includes('accent')) {
                          newColor = colorScheme.accentColor;
                        } else if (groupName.includes('trailer') || groupName.includes('bed')) {
                          newColor = colorScheme.trailerColor || colorScheme.secondaryColor;
                        } else if (groupName.includes('fork')) {
                          newColor = colorScheme.forkColor || colorScheme.secondaryColor;
                        }
                        
                        // Apply the new color
                        item.c.k = newColor;
                      }
                    });
                  }
                });
              }
            });
          }
          
          // Write the updated animation back to the file
          fs.writeFile(filePath, JSON.stringify(animation), 'utf8', err => {
            if (err) {
              console.error(`Error writing file ${file}:`, err);
              return;
            }
            console.log(`Updated ${file} with brand colors`);
          });
        } catch (e) {
          console.error(`Error processing file ${file}:`, e);
        }
      });
    }
  });
});
