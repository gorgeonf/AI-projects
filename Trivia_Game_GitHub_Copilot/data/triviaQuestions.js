// Quiz questions organized by theme
// Each question includes a theme property for filtering
const triviaQuestions = [
  {
    theme: "Biology",
    question: "What is the basic unit of life?",
    options: [
      "Atom",
      "Cell",
      "Molecule",
      "Organ"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which organelle is known as the powerhouse of the cell?",
    options: [
      "Nucleus",
      "Ribosome",
      "Mitochondrion",
      "Golgi apparatus"
    ],
    answer: 2
  },
  {
    theme: "Biology",
    question: "What process do plants use to convert sunlight into energy?",
    options: [
      "Respiration",
      "Photosynthesis",
      "Digestion",
      "Fermentation"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which blood cells fight infection?",
    options: [
      "Red blood cells",
      "Platelets",
      "White blood cells",
      "Stem cells"
    ],
    answer: 2
  },
  {
    theme: "Biology",
    question: "What molecule carries genetic information?",
    options: [
      "RNA",
      "DNA",
      "Protein",
      "Lipid"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which part of the plant absorbs water from the soil?",
    options: [
      "Leaves",
      "Flowers",
      "Roots",
      "Stem"
    ],
    answer: 2
  },
  {
    theme: "Biology",
    question: "What is the function of red blood cells?",
    options: [
      "Fight infection",
      "Carry oxygen",
      "Clot blood",
      "Digest food"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which organ filters blood in the human body?",
    options: [
      "Heart",
      "Lungs",
      "Kidney",
      "Liver"
    ],
    answer: 2
  },
  {
    theme: "Biology",
    question: "What is the name of the process by which cells divide?",
    options: [
      "Respiration",
      "Mitosis",
      "Transpiration",
      "Diffusion"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which vitamin is produced by the skin when exposed to sunlight?",
    options: [
      "Vitamin A",
      "Vitamin C",
      "Vitamin D",
      "Vitamin K"
    ],
    answer: 2
  },
  {
    theme: "Biology",
    question: "What do enzymes do?",
    options: [
      "Store energy",
      "Speed up chemical reactions",
      "Carry oxygen",
      "Form bones"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which gas do plants take in during photosynthesis?",
    options: [
      "Oxygen",
      "Carbon dioxide",
      "Nitrogen",
      "Hydrogen"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "What is the basic unit of life?",
    options: [
      "Atom",
      "Cell",
      "Molecule",
      "Organ"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which organelle is known as the powerhouse of the cell?",
    options: [
      "Nucleus",
      "Ribosome",
      "Mitochondrion",
      "Golgi apparatus"
    ],
    answer: 2
  },
  {
    theme: "Biology",
    question: "What process do plants use to convert sunlight into energy?",
    options: [
      "Respiration",
      "Photosynthesis",
      "Digestion",
      "Fermentation"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which blood cells fight infection?",
    options: [
      "Red blood cells",
      "Platelets",
      "White blood cells",
      "Stem cells"
    ],
    answer: 2
  },
  {
    theme: "Biology",
    question: "What molecule carries genetic information?",
    options: [
      "RNA",
      "DNA",
      "Protein",
      "Lipid"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which part of the plant absorbs water from the soil?",
    options: [
      "Leaves",
      "Flowers",
      "Roots",
      "Stem"
    ],
    answer: 2
  },
  {
    theme: "Biology",
    question: "What is the function of red blood cells?",
    options: [
      "Fight infection",
      "Carry oxygen",
      "Clot blood",
      "Digest food"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which organ filters blood in the human body?",
    options: [
      "Heart",
      "Lungs",
      "Kidney",
      "Liver"
    ],
    answer: 2
  },
  {
    theme: "Biology",
    question: "What is the name of the process by which cells divide?",
    options: [
      "Respiration",
      "Mitosis",
      "Transpiration",
      "Diffusion"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which vitamin is produced by the skin when exposed to sunlight?",
    options: [
      "Vitamin A",
      "Vitamin C",
      "Vitamin D",
      "Vitamin K"
    ],
    answer: 2
  },
  {
    theme: "Biology",
    question: "What do enzymes do?",
    options: [
      "Store energy",
      "Speed up chemical reactions",
      "Carry oxygen",
      "Form bones"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which gas do plants take in during photosynthesis?",
    options: [
      "Oxygen",
      "Carbon dioxide",
      "Nitrogen",
      "Hydrogen"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "What is the basic unit of life?",
    options: [
      "Atom",
      "Cell",
      "Molecule",
      "Organ"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which organelle is known as the powerhouse of the cell?",
    options: [
      "Nucleus",
      "Ribosome",
      "Mitochondrion",
      "Golgi apparatus"
    ],
    answer: 2
  },
  {
    theme: "Biology",
    question: "What process do plants use to convert sunlight into energy?",
    options: [
      "Respiration",
      "Photosynthesis",
      "Digestion",
      "Fermentation"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which blood cells fight infection?",
    options: [
      "Red blood cells",
      "Platelets",
      "White blood cells",
      "Stem cells"
    ],
    answer: 2
  },
  {
    theme: "Biology",
    question: "What molecule carries genetic information?",
    options: [
      "RNA",
      "DNA",
      "Protein",
      "Lipid"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which part of the plant absorbs water from the soil?",
    options: [
      "Leaves",
      "Flowers",
      "Roots",
      "Stem"
    ],
    answer: 2
  },
  {
    theme: "Biology",
    question: "What is the function of red blood cells?",
    options: [
      "Fight infection",
      "Carry oxygen",
      "Clot blood",
      "Digest food"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which organ filters blood in the human body?",
    options: [
      "Heart",
      "Lungs",
      "Kidney",
      "Liver"
    ],
    answer: 2
  },
  {
    theme: "Biology",
    question: "What is the name of the process by which cells divide?",
    options: [
      "Respiration",
      "Mitosis",
      "Transpiration",
      "Diffusion"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which vitamin is produced by the skin when exposed to sunlight?",
    options: [
      "Vitamin A",
      "Vitamin C",
      "Vitamin D",
      "Vitamin K"
    ],
    answer: 2
  },
  {
    theme: "Biology",
    question: "What do enzymes do?",
    options: [
      "Store energy",
      "Speed up chemical reactions",
      "Carry oxygen",
      "Form bones"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which gas do plants take in during photosynthesis?",
    options: [
      "Oxygen",
      "Carbon dioxide",
      "Nitrogen",
      "Hydrogen"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "What is the basic unit of life?",
    options: [
      "Atom",
      "Cell",
      "Molecule",
      "Organ"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which organelle is known as the powerhouse of the cell?",
    options: [
      "Nucleus",
      "Ribosome",
      "Mitochondrion",
      "Golgi apparatus"
    ],
    answer: 2
  },
  {
    theme: "Biology",
    question: "What process do plants use to convert sunlight into energy?",
    options: [
      "Respiration",
      "Photosynthesis",
      "Digestion",
      "Fermentation"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which blood cells fight infection?",
    options: [
      "Red blood cells",
      "Platelets",
      "White blood cells",
      "Stem cells"
    ],
    answer: 2
  },
  {
    theme: "Biology",
    question: "What molecule carries genetic information?",
    options: [
      "RNA",
      "DNA",
      "Protein",
      "Lipid"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which part of the plant absorbs water from the soil?",
    options: [
      "Leaves",
      "Flowers",
      "Roots",
      "Stem"
    ],
    answer: 2
  },
  {
    theme: "Biology",
    question: "What is the function of red blood cells?",
    options: [
      "Fight infection",
      "Carry oxygen",
      "Clot blood",
      "Digest food"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which organ filters blood in the human body?",
    options: [
      "Heart",
      "Lungs",
      "Kidney",
      "Liver"
    ],
    answer: 2
  },
  {
    theme: "Biology",
    question: "What is the name of the process by which cells divide?",
    options: [
      "Respiration",
      "Mitosis",
      "Transpiration",
      "Diffusion"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which vitamin is produced by the skin when exposed to sunlight?",
    options: [
      "Vitamin A",
      "Vitamin C",
      "Vitamin D",
      "Vitamin K"
    ],
    answer: 2
  },
  {
    theme: "Biology",
    question: "What do enzymes do?",
    options: [
      "Store energy",
      "Speed up chemical reactions",
      "Carry oxygen",
      "Form bones"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which gas do plants take in during photosynthesis?",
    options: [
      "Oxygen",
      "Carbon dioxide",
      "Nitrogen",
      "Hydrogen"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "What is the basic unit of life?",
    options: [
      "Atom",
      "Cell",
      "Molecule",
      "Organ"
    ],
    answer: 1
  },
  {
    theme: "Biology",
    question: "Which organelle is known as the powerhouse of the cell?",
    options: [
      "Nucleus",
      "Ribosome",
      "Mitochondrion",
      "Golgi apparatus"
    ],
    answer: 2
  },
  {
    theme: "Oceanography",
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    answer: 3
  },
  {
    theme: "Oceanography",
    question: "What causes tides?",
    options: [
      "Wind",
      "Earth's rotation",
      "Moon's gravity",
      "Temperature"
    ],
    answer: 2
  },
  {
    theme: "Oceanography",
    question: "What is the term for underwater mountain ranges?",
    options: [
      "Plateaus",
      "Ridges",
      "Canyons",
      "Seamounts"
    ],
    answer: 3
  },
  {
    theme: "Oceanography",
    question: "What is salinity?",
    options: [
      "The amount of salt in water",
      "The depth of the ocean",
      "The speed of waves",
      "The temperature of water"
    ],
    answer: 0
  },
  {
    theme: "Oceanography",
    question: "What is the name for a large body of salt water?",
    options: [
      "River",
      "Lake",
      "Ocean",
      "Pond"
    ],
    answer: 2
  },
  {
    theme: "Oceanography",
    question: "Which current brings warm water to Europe?",
    options: [
      "California Current",
      "Gulf Stream",
      "Peru Current",
      "Labrador Current"
    ],
    answer: 1
  },
  {
    theme: "Oceanography",
    question: "What is the continental shelf?",
    options: [
      "A shallow area near the coast",
      "Deep ocean trench",
      "Coral reef",
      "A sea cliff"
    ],
    answer: 0
  },
  {
    theme: "Oceanography",
    question: "What do ocean waves mainly transfer?",
    options: [
      "Water mass",
      "Energy",
      "Salt",
      "Sand"
    ],
    answer: 1
  },
  {
    theme: "Oceanography",
    question: "Which ocean is the smallest?",
    options: [
      "Atlantic",
      "Pacific",
      "Indian",
      "Arctic"
    ],
    answer: 3
  },
  {
    theme: "Oceanography",
    question: "What are coral reefs made of?",
    options: [
      "Sand",
      "Living animals",
      "Rock",
      "Ice"
    ],
    answer: 1
  },
  {
    theme: "Oceanography",
    question: "What causes surface ocean currents?",
    options: [
      "Wind",
      "Earthquakes",
      "Gravity",
      "Volcanoes"
    ],
    answer: 0
  },
  {
    theme: "Oceanography",
    question: "What is an estuary?",
    options: [
      "A place where freshwater meets saltwater",
      "A deep ocean trench",
      "A coral island",
      "A seamount"
    ],
    answer: 0
  },
  {
    theme: "Oceanography",
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    answer: 3
  },
  {
    theme: "Oceanography",
    question: "What causes tides?",
    options: [
      "Wind",
      "Earth's rotation",
      "Moon's gravity",
      "Temperature"
    ],
    answer: 2
  },
  {
    theme: "Oceanography",
    question: "What is the term for underwater mountain ranges?",
    options: [
      "Plateaus",
      "Ridges",
      "Canyons",
      "Seamounts"
    ],
    answer: 3
  },
  {
    theme: "Oceanography",
    question: "What is salinity?",
    options: [
      "The amount of salt in water",
      "The depth of the ocean",
      "The speed of waves",
      "The temperature of water"
    ],
    answer: 0
  },
  {
    theme: "Oceanography",
    question: "What is the name for a large body of salt water?",
    options: [
      "River",
      "Lake",
      "Ocean",
      "Pond"
    ],
    answer: 2
  },
  {
    theme: "Oceanography",
    question: "Which current brings warm water to Europe?",
    options: [
      "California Current",
      "Gulf Stream",
      "Peru Current",
      "Labrador Current"
    ],
    answer: 1
  },
  {
    theme: "Oceanography",
    question: "What is the continental shelf?",
    options: [
      "A shallow area near the coast",
      "Deep ocean trench",
      "Coral reef",
      "A sea cliff"
    ],
    answer: 0
  },
  {
    theme: "Oceanography",
    question: "What do ocean waves mainly transfer?",
    options: [
      "Water mass",
      "Energy",
      "Salt",
      "Sand"
    ],
    answer: 1
  },
  {
    theme: "Oceanography",
    question: "Which ocean is the smallest?",
    options: [
      "Atlantic",
      "Pacific",
      "Indian",
      "Arctic"
    ],
    answer: 3
  },
  {
    theme: "Oceanography",
    question: "What are coral reefs made of?",
    options: [
      "Sand",
      "Living animals",
      "Rock",
      "Ice"
    ],
    answer: 1
  },
  {
    theme: "Oceanography",
    question: "What causes surface ocean currents?",
    options: [
      "Wind",
      "Earthquakes",
      "Gravity",
      "Volcanoes"
    ],
    answer: 0
  },
  {
    theme: "Oceanography",
    question: "What is an estuary?",
    options: [
      "A place where freshwater meets saltwater",
      "A deep ocean trench",
      "A coral island",
      "A seamount"
    ],
    answer: 0
  },
  {
    theme: "Oceanography",
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    answer: 3
  },
  {
    theme: "Oceanography",
    question: "What causes tides?",
    options: [
      "Wind",
      "Earth's rotation",
      "Moon's gravity",
      "Temperature"
    ],
    answer: 2
  },
  {
    theme: "Oceanography",
    question: "What is the term for underwater mountain ranges?",
    options: [
      "Plateaus",
      "Ridges",
      "Canyons",
      "Seamounts"
    ],
    answer: 3
  },
  {
    theme: "Oceanography",
    question: "What is salinity?",
    options: [
      "The amount of salt in water",
      "The depth of the ocean",
      "The speed of waves",
      "The temperature of water"
    ],
    answer: 0
  },
  {
    theme: "Oceanography",
    question: "What is the name for a large body of salt water?",
    options: [
      "River",
      "Lake",
      "Ocean",
      "Pond"
    ],
    answer: 2
  },
  {
    theme: "Oceanography",
    question: "Which current brings warm water to Europe?",
    options: [
      "California Current",
      "Gulf Stream",
      "Peru Current",
      "Labrador Current"
    ],
    answer: 1
  },
  {
    theme: "Oceanography",
    question: "What is the continental shelf?",
    options: [
      "A shallow area near the coast",
      "Deep ocean trench",
      "Coral reef",
      "A sea cliff"
    ],
    answer: 0
  },
  {
    theme: "Oceanography",
    question: "What do ocean waves mainly transfer?",
    options: [
      "Water mass",
      "Energy",
      "Salt",
      "Sand"
    ],
    answer: 1
  },
  {
    theme: "Oceanography",
    question: "Which ocean is the smallest?",
    options: [
      "Atlantic",
      "Pacific",
      "Indian",
      "Arctic"
    ],
    answer: 3
  },
  {
    theme: "Oceanography",
    question: "What are coral reefs made of?",
    options: [
      "Sand",
      "Living animals",
      "Rock",
      "Ice"
    ],
    answer: 1
  },
  {
    theme: "Oceanography",
    question: "What causes surface ocean currents?",
    options: [
      "Wind",
      "Earthquakes",
      "Gravity",
      "Volcanoes"
    ],
    answer: 0
  },
  {
    theme: "Oceanography",
    question: "What is an estuary?",
    options: [
      "A place where freshwater meets saltwater",
      "A deep ocean trench",
      "A coral island",
      "A seamount"
    ],
    answer: 0
  },
  {
    theme: "Oceanography",
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    answer: 3
  },
  {
    theme: "Oceanography",
    question: "What causes tides?",
    options: [
      "Wind",
      "Earth's rotation",
      "Moon's gravity",
      "Temperature"
    ],
    answer: 2
  },
  {
    theme: "Oceanography",
    question: "What is the term for underwater mountain ranges?",
    options: [
      "Plateaus",
      "Ridges",
      "Canyons",
      "Seamounts"
    ],
    answer: 3
  },
  {
    theme: "Oceanography",
    question: "What is salinity?",
    options: [
      "The amount of salt in water",
      "The depth of the ocean",
      "The speed of waves",
      "The temperature of water"
    ],
    answer: 0
  },
  {
    theme: "Oceanography",
    question: "What is the name for a large body of salt water?",
    options: [
      "River",
      "Lake",
      "Ocean",
      "Pond"
    ],
    answer: 2
  },
  {
    theme: "Oceanography",
    question: "Which current brings warm water to Europe?",
    options: [
      "California Current",
      "Gulf Stream",
      "Peru Current",
      "Labrador Current"
    ],
    answer: 1
  },
  {
    theme: "Oceanography",
    question: "What is the continental shelf?",
    options: [
      "A shallow area near the coast",
      "Deep ocean trench",
      "Coral reef",
      "A sea cliff"
    ],
    answer: 0
  },
  {
    theme: "Oceanography",
    question: "What do ocean waves mainly transfer?",
    options: [
      "Water mass",
      "Energy",
      "Salt",
      "Sand"
    ],
    answer: 1
  },
  {
    theme: "Oceanography",
    question: "Which ocean is the smallest?",
    options: [
      "Atlantic",
      "Pacific",
      "Indian",
      "Arctic"
    ],
    answer: 3
  },
  {
    theme: "Oceanography",
    question: "What are coral reefs made of?",
    options: [
      "Sand",
      "Living animals",
      "Rock",
      "Ice"
    ],
    answer: 1
  },
  {
    theme: "Oceanography",
    question: "What causes surface ocean currents?",
    options: [
      "Wind",
      "Earthquakes",
      "Gravity",
      "Volcanoes"
    ],
    answer: 0
  },
  {
    theme: "Oceanography",
    question: "What is an estuary?",
    options: [
      "A place where freshwater meets saltwater",
      "A deep ocean trench",
      "A coral island",
      "A seamount"
    ],
    answer: 0
  },
  {
    theme: "Oceanography",
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    answer: 3
  },
  {
    theme: "Oceanography",
    question: "What causes tides?",
    options: [
      "Wind",
      "Earth's rotation",
      "Moon's gravity",
      "Temperature"
    ],
    answer: 2
  },
  {
    theme: "History",
    question: "Which civilization built Machu Picchu?",
    options: [
      "Maya",
      "Inca",
      "Aztec",
      "Roman"
    ],
    answer: 1
  },
  {
    theme: "History",
    question: "What was the main purpose of the Silk Road?",
    options: [
      "Trade routes linking East and West",
      "Military conquest",
      "Religious pilgrimage only",
      "Fishing network"
    ],
    answer: 0
  },
  {
    theme: "History",
    question: "Who was the first emperor of Rome?",
    options: [
      "Julius Caesar",
      "Augustus",
      "Nero",
      "Hadrian"
    ],
    answer: 1
  },
  {
    theme: "History",
    question: "What event began in 1789 in France?",
    options: [
      "The French Revolution",
      "The Hundred Years' War",
      "The Renaissance",
      "The Great Fire of London"
    ],
    answer: 0
  },
  {
    theme: "History",
    question: "Which empire was ruled by Julius Caesar?",
    options: [
      "Persian",
      "Roman",
      "Ottoman",
      "Mughal"
    ],
    answer: 1
  },
  {
    theme: "History",
    question: "What was the main religion spread by missionaries in medieval Europe?",
    options: [
      "Islam",
      "Buddhism",
      "Christianity",
      "Hinduism"
    ],
    answer: 2
  },
  {
    theme: "History",
    question: "Which city was the center of the Byzantine Empire?",
    options: [
      "Athens",
      "Rome",
      "Constantinople",
      "Cairo"
    ],
    answer: 2
  },
  {
    theme: "History",
    question: "What was the main goal of the Crusades?",
    options: [
      "To spread democracy",
      "To gain control of holy lands",
      "To discover America",
      "To build railroads"
    ],
    answer: 1
  },
  {
    theme: "History",
    question: "Who founded the Mongol Empire?",
    options: [
      "Genghis Khan",
      "Timur",
      "Kublai Khan",
      "Batu Khan"
    ],
    answer: 0
  },
  {
    theme: "History",
    question: "Which document limited the power of English monarchs in 1215?",
    options: [
      "Magna Carta",
      "Declaration of Independence",
      "Treaty of Versailles",
      "Edict of Nantes"
    ],
    answer: 0
  },
  {
    theme: "History",
    question: "What was the Renaissance?",
    options: [
      "A period of European cultural rebirth",
      "A military campaign",
      "A trade route",
      "An ancient dynasty"
    ],
    answer: 0
  },
  {
    theme: "History",
    question: "Which empire controlled most of the Indian subcontinent before British rule?",
    options: [
      "Mughal Empire",
      "Ottoman Empire",
      "Persian Empire",
      "Sassanid Empire"
    ],
    answer: 0
  },
  {
    theme: "History",
    question: "Which civilization built Machu Picchu?",
    options: [
      "Maya",
      "Inca",
      "Aztec",
      "Roman"
    ],
    answer: 1
  },
  {
    theme: "History",
    question: "What was the main purpose of the Silk Road?",
    options: [
      "Trade routes linking East and West",
      "Military conquest",
      "Religious pilgrimage only",
      "Fishing network"
    ],
    answer: 0
  },
  {
    theme: "History",
    question: "Who was the first emperor of Rome?",
    options: [
      "Julius Caesar",
      "Augustus",
      "Nero",
      "Hadrian"
    ],
    answer: 1
  },
  {
    theme: "History",
    question: "What event began in 1789 in France?",
    options: [
      "The French Revolution",
      "The Hundred Years' War",
      "The Renaissance",
      "The Great Fire of London"
    ],
    answer: 0
  },
  {
    theme: "History",
    question: "Which empire was ruled by Julius Caesar?",
    options: [
      "Persian",
      "Roman",
      "Ottoman",
      "Mughal"
    ],
    answer: 1
  },
  {
    theme: "History",
    question: "What was the main religion spread by missionaries in medieval Europe?",
    options: [
      "Islam",
      "Buddhism",
      "Christianity",
      "Hinduism"
    ],
    answer: 2
  },
  {
    theme: "History",
    question: "Which city was the center of the Byzantine Empire?",
    options: [
      "Athens",
      "Rome",
      "Constantinople",
      "Cairo"
    ],
    answer: 2
  },
  {
    theme: "History",
    question: "What was the main goal of the Crusades?",
    options: [
      "To spread democracy",
      "To gain control of holy lands",
      "To discover America",
      "To build railroads"
    ],
    answer: 1
  },
  {
    theme: "History",
    question: "Who founded the Mongol Empire?",
    options: [
      "Genghis Khan",
      "Timur",
      "Kublai Khan",
      "Batu Khan"
    ],
    answer: 0
  },
  {
    theme: "History",
    question: "Which document limited the power of English monarchs in 1215?",
    options: [
      "Magna Carta",
      "Declaration of Independence",
      "Treaty of Versailles",
      "Edict of Nantes"
    ],
    answer: 0
  },
  {
    theme: "History",
    question: "What was the Renaissance?",
    options: [
      "A period of European cultural rebirth",
      "A military campaign",
      "A trade route",
      "An ancient dynasty"
    ],
    answer: 0
  },
  {
    theme: "History",
    question: "Which empire controlled most of the Indian subcontinent before British rule?",
    options: [
      "Mughal Empire",
      "Ottoman Empire",
      "Persian Empire",
      "Sassanid Empire"
    ],
    answer: 0
  },
  {
    theme: "History",
    question: "Which civilization built Machu Picchu?",
    options: [
      "Maya",
      "Inca",
      "Aztec",
      "Roman"
    ],
    answer: 1
  },
  {
    theme: "History",
    question: "What was the main purpose of the Silk Road?",
    options: [
      "Trade routes linking East and West",
      "Military conquest",
      "Religious pilgrimage only",
      "Fishing network"
    ],
    answer: 0
  },
  {
    theme: "History",
    question: "Who was the first emperor of Rome?",
    options: [
      "Julius Caesar",
      "Augustus",
      "Nero",
      "Hadrian"
    ],
    answer: 1
  },
  {
    theme: "History",
    question: "What event began in 1789 in France?",
    options: [
      "The French Revolution",
      "The Hundred Years' War",
      "The Renaissance",
      "The Great Fire of London"
    ],
    answer: 0
  },
  {
    theme: "History",
    question: "Which empire was ruled by Julius Caesar?",
    options: [
      "Persian",
      "Roman",
      "Ottoman",
      "Mughal"
    ],
    answer: 1
  },
  {
    theme: "History",
    question: "What was the main religion spread by missionaries in medieval Europe?",
    options: [
      "Islam",
      "Buddhism",
      "Christianity",
      "Hinduism"
    ],
    answer: 2
  },
  {
    theme: "History",
    question: "Which city was the center of the Byzantine Empire?",
    options: [
      "Athens",
      "Rome",
      "Constantinople",
      "Cairo"
    ],
    answer: 2
  },
  {
    theme: "History",
    question: "What was the main goal of the Crusades?",
    options: [
      "To spread democracy",
      "To gain control of holy lands",
      "To discover America",
      "To build railroads"
    ],
    answer: 1
  },
  {
    theme: "History",
    question: "Who founded the Mongol Empire?",
    options: [
      "Genghis Khan",
      "Timur",
      "Kublai Khan",
      "Batu Khan"
    ],
    answer: 0
  },
  {
    theme: "History",
    question: "Which document limited the power of English monarchs in 1215?",
    options: [
      "Magna Carta",
      "Declaration of Independence",
      "Treaty of Versailles",
      "Edict of Nantes"
    ],
    answer: 0
  },
  {
    theme: "History",
    question: "What was the Renaissance?",
    options: [
      "A period of European cultural rebirth",
      "A military campaign",
      "A trade route",
      "An ancient dynasty"
    ],
    answer: 0
  },
  {
    theme: "History",
    question: "Which empire controlled most of the Indian subcontinent before British rule?",
    options: [
      "Mughal Empire",
      "Ottoman Empire",
      "Persian Empire",
      "Sassanid Empire"
    ],
    answer: 0
  },
  {
    theme: "History",
    question: "Which civilization built Machu Picchu?",
    options: [
      "Maya",
      "Inca",
      "Aztec",
      "Roman"
    ],
    answer: 1
  },
  {
    theme: "History",
    question: "What was the main purpose of the Silk Road?",
    options: [
      "Trade routes linking East and West",
      "Military conquest",
      "Religious pilgrimage only",
      "Fishing network"
    ],
    answer: 0
  },
  {
    theme: "History",
    question: "Who was the first emperor of Rome?",
    options: [
      "Julius Caesar",
      "Augustus",
      "Nero",
      "Hadrian"
    ],
    answer: 1
  },
  {
    theme: "History",
    question: "What event began in 1789 in France?",
    options: [
      "The French Revolution",
      "The Hundred Years' War",
      "The Renaissance",
      "The Great Fire of London"
    ],
    answer: 0
  },
  {
    theme: "History",
    question: "Which empire was ruled by Julius Caesar?",
    options: [
      "Persian",
      "Roman",
      "Ottoman",
      "Mughal"
    ],
    answer: 1
  },
  {
    theme: "History",
    question: "What was the main religion spread by missionaries in medieval Europe?",
    options: [
      "Islam",
      "Buddhism",
      "Christianity",
      "Hinduism"
    ],
    answer: 2
  },
  {
    theme: "History",
    question: "Which city was the center of the Byzantine Empire?",
    options: [
      "Athens",
      "Rome",
      "Constantinople",
      "Cairo"
    ],
    answer: 2
  },
  {
    theme: "History",
    question: "What was the main goal of the Crusades?",
    options: [
      "To spread democracy",
      "To gain control of holy lands",
      "To discover America",
      "To build railroads"
    ],
    answer: 1
  },
  {
    theme: "History",
    question: "Who founded the Mongol Empire?",
    options: [
      "Genghis Khan",
      "Timur",
      "Kublai Khan",
      "Batu Khan"
    ],
    answer: 0
  },
  {
    theme: "History",
    question: "Which document limited the power of English monarchs in 1215?",
    options: [
      "Magna Carta",
      "Declaration of Independence",
      "Treaty of Versailles",
      "Edict of Nantes"
    ],
    answer: 0
  },
  {
    theme: "History",
    question: "What was the Renaissance?",
    options: [
      "A period of European cultural rebirth",
      "A military campaign",
      "A trade route",
      "An ancient dynasty"
    ],
    answer: 0
  },
  {
    theme: "History",
    question: "Which empire controlled most of the Indian subcontinent before British rule?",
    options: [
      "Mughal Empire",
      "Ottoman Empire",
      "Persian Empire",
      "Sassanid Empire"
    ],
    answer: 0
  },
  {
    theme: "History",
    question: "Which civilization built Machu Picchu?",
    options: [
      "Maya",
      "Inca",
      "Aztec",
      "Roman"
    ],
    answer: 1
  },
  {
    theme: "History",
    question: "What was the main purpose of the Silk Road?",
    options: [
      "Trade routes linking East and West",
      "Military conquest",
      "Religious pilgrimage only",
      "Fishing network"
    ],
    answer: 0
  },
  {
    theme: "Geography",
    question: "What is the capital of France?",
    options: [
      "Berlin",
      "Madrid",
      "Paris",
      "Rome"
    ],
    answer: 2
  },
  {
    theme: "Geography",
    question: "Which river is the longest in the world?",
    options: [
      "Amazon",
      "Nile",
      "Yangtze",
      "Mississippi"
    ],
    answer: 1
  },
  {
    theme: "Geography",
    question: "What is the largest continent?",
    options: [
      "Africa",
      "Asia",
      "Europe",
      "North America"
    ],
    answer: 1
  },
  {
    theme: "Geography",
    question: "Which country is known for the Amazon Rainforest?",
    options: [
      "Brazil",
      "India",
      "Canada",
      "Kenya"
    ],
    answer: 0
  },
  {
    theme: "Geography",
    question: "What is the highest mountain in the world?",
    options: [
      "K2",
      "Kangchenjunga",
      "Mount Everest",
      "Lhotse"
    ],
    answer: 2
  },
  {
    theme: "Geography",
    question: "Which sea lies between Europe and Africa?",
    options: [
      "Red Sea",
      "Mediterranean Sea",
      "Black Sea",
      "Caspian Sea"
    ],
    answer: 1
  },
  {
    theme: "Geography",
    question: "What is the capital of Japan?",
    options: [
      "Seoul",
      "Tokyo",
      "Kyoto",
      "Osaka"
    ],
    answer: 1
  },
  {
    theme: "Geography",
    question: "Which country has the most natural lakes?",
    options: [
      "Canada",
      "Russia",
      "Brazil",
      "India"
    ],
    answer: 0
  },
  {
    theme: "Geography",
    question: "What is the longest river in Europe?",
    options: [
      "Danube",
      "Volga",
      "Rhine",
      "Po"
    ],
    answer: 1
  },
  {
    theme: "Geography",
    question: "Which desert is the largest hot desert in the world?",
    options: [
      "Sahara",
      "Arabian Desert",
      "Gobi",
      "Kalahari"
    ],
    answer: 0
  },
  {
    theme: "Geography",
    question: "Which mountain range contains Mount Kilimanjaro?",
    options: [
      "Andes",
      "Rockies",
      "Alps",
      "Himalayas"
    ],
    answer: 3
  },
  {
    theme: "Geography",
    question: "What is the capital of Australia?",
    options: [
      "Sydney",
      "Melbourne",
      "Canberra",
      "Perth"
    ],
    answer: 2
  },
  {
    theme: "Geography",
    question: "What is the capital of France?",
    options: [
      "Berlin",
      "Madrid",
      "Paris",
      "Rome"
    ],
    answer: 2
  },
  {
    theme: "Geography",
    question: "Which river is the longest in the world?",
    options: [
      "Amazon",
      "Nile",
      "Yangtze",
      "Mississippi"
    ],
    answer: 1
  },
  {
    theme: "Geography",
    question: "What is the largest continent?",
    options: [
      "Africa",
      "Asia",
      "Europe",
      "North America"
    ],
    answer: 1
  },
  {
    theme: "Geography",
    question: "Which country is known for the Amazon Rainforest?",
    options: [
      "Brazil",
      "India",
      "Canada",
      "Kenya"
    ],
    answer: 0
  },
  {
    theme: "Geography",
    question: "What is the highest mountain in the world?",
    options: [
      "K2",
      "Kangchenjunga",
      "Mount Everest",
      "Lhotse"
    ],
    answer: 2
  },
  {
    theme: "Geography",
    question: "Which sea lies between Europe and Africa?",
    options: [
      "Red Sea",
      "Mediterranean Sea",
      "Black Sea",
      "Caspian Sea"
    ],
    answer: 1
  },
  {
    theme: "Geography",
    question: "What is the capital of Japan?",
    options: [
      "Seoul",
      "Tokyo",
      "Kyoto",
      "Osaka"
    ],
    answer: 1
  },
  {
    theme: "Geography",
    question: "Which country has the most natural lakes?",
    options: [
      "Canada",
      "Russia",
      "Brazil",
      "India"
    ],
    answer: 0
  },
  {
    theme: "Geography",
    question: "What is the longest river in Europe?",
    options: [
      "Danube",
      "Volga",
      "Rhine",
      "Po"
    ],
    answer: 1
  },
  {
    theme: "Geography",
    question: "Which desert is the largest hot desert in the world?",
    options: [
      "Sahara",
      "Arabian Desert",
      "Gobi",
      "Kalahari"
    ],
    answer: 0
  },
  {
    theme: "Geography",
    question: "Which mountain range contains Mount Kilimanjaro?",
    options: [
      "Andes",
      "Rockies",
      "Alps",
      "Himalayas"
    ],
    answer: 3
  },
  {
    theme: "Geography",
    question: "What is the capital of Australia?",
    options: [
      "Sydney",
      "Melbourne",
      "Canberra",
      "Perth"
    ],
    answer: 2
  },
  {
    theme: "Geography",
    question: "What is the capital of France?",
    options: [
      "Berlin",
      "Madrid",
      "Paris",
      "Rome"
    ],
    answer: 2
  },
  {
    theme: "Geography",
    question: "Which river is the longest in the world?",
    options: [
      "Amazon",
      "Nile",
      "Yangtze",
      "Mississippi"
    ],
    answer: 1
  },
  {
    theme: "Geography",
    question: "What is the largest continent?",
    options: [
      "Africa",
      "Asia",
      "Europe",
      "North America"
    ],
    answer: 1
  },
  {
    theme: "Geography",
    question: "Which country is known for the Amazon Rainforest?",
    options: [
      "Brazil",
      "India",
      "Canada",
      "Kenya"
    ],
    answer: 0
  },
  {
    theme: "Geography",
    question: "What is the highest mountain in the world?",
    options: [
      "K2",
      "Kangchenjunga",
      "Mount Everest",
      "Lhotse"
    ],
    answer: 2
  },
  {
    theme: "Geography",
    question: "Which sea lies between Europe and Africa?",
    options: [
      "Red Sea",
      "Mediterranean Sea",
      "Black Sea",
      "Caspian Sea"
    ],
    answer: 1
  },
  {
    theme: "Geography",
    question: "What is the capital of Japan?",
    options: [
      "Seoul",
      "Tokyo",
      "Kyoto",
      "Osaka"
    ],
    answer: 1
  },
  {
    theme: "Geography",
    question: "Which country has the most natural lakes?",
    options: [
      "Canada",
      "Russia",
      "Brazil",
      "India"
    ],
    answer: 0
  },
  {
    theme: "Geography",
    question: "What is the longest river in Europe?",
    options: [
      "Danube",
      "Volga",
      "Rhine",
      "Po"
    ],
    answer: 1
  },
  {
    theme: "Geography",
    question: "Which desert is the largest hot desert in the world?",
    options: [
      "Sahara",
      "Arabian Desert",
      "Gobi",
      "Kalahari"
    ],
    answer: 0
  },
  {
    theme: "Geography",
    question: "Which mountain range contains Mount Kilimanjaro?",
    options: [
      "Andes",
      "Rockies",
      "Alps",
      "Himalayas"
    ],
    answer: 3
  },
  {
    theme: "Geography",
    question: "What is the capital of Australia?",
    options: [
      "Sydney",
      "Melbourne",
      "Canberra",
      "Perth"
    ],
    answer: 2
  },
  {
    theme: "Geography",
    question: "What is the capital of France?",
    options: [
      "Berlin",
      "Madrid",
      "Paris",
      "Rome"
    ],
    answer: 2
  },
  {
    theme: "Geography",
    question: "Which river is the longest in the world?",
    options: [
      "Amazon",
      "Nile",
      "Yangtze",
      "Mississippi"
    ],
    answer: 1
  },
  {
    theme: "Geography",
    question: "What is the largest continent?",
    options: [
      "Africa",
      "Asia",
      "Europe",
      "North America"
    ],
    answer: 1
  },
  {
    theme: "Geography",
    question: "Which country is known for the Amazon Rainforest?",
    options: [
      "Brazil",
      "India",
      "Canada",
      "Kenya"
    ],
    answer: 0
  },
  {
    theme: "Geography",
    question: "What is the highest mountain in the world?",
    options: [
      "K2",
      "Kangchenjunga",
      "Mount Everest",
      "Lhotse"
    ],
    answer: 2
  },
  {
    theme: "Geography",
    question: "Which sea lies between Europe and Africa?",
    options: [
      "Red Sea",
      "Mediterranean Sea",
      "Black Sea",
      "Caspian Sea"
    ],
    answer: 1
  },
  {
    theme: "Geography",
    question: "What is the capital of Japan?",
    options: [
      "Seoul",
      "Tokyo",
      "Kyoto",
      "Osaka"
    ],
    answer: 1
  },
  {
    theme: "Geography",
    question: "Which country has the most natural lakes?",
    options: [
      "Canada",
      "Russia",
      "Brazil",
      "India"
    ],
    answer: 0
  },
  {
    theme: "Geography",
    question: "What is the longest river in Europe?",
    options: [
      "Danube",
      "Volga",
      "Rhine",
      "Po"
    ],
    answer: 1
  },
  {
    theme: "Geography",
    question: "Which desert is the largest hot desert in the world?",
    options: [
      "Sahara",
      "Arabian Desert",
      "Gobi",
      "Kalahari"
    ],
    answer: 0
  },
  {
    theme: "Geography",
    question: "Which mountain range contains Mount Kilimanjaro?",
    options: [
      "Andes",
      "Rockies",
      "Alps",
      "Himalayas"
    ],
    answer: 3
  },
  {
    theme: "Geography",
    question: "What is the capital of Australia?",
    options: [
      "Sydney",
      "Melbourne",
      "Canberra",
      "Perth"
    ],
    answer: 2
  },
  {
    theme: "Geography",
    question: "What is the capital of France?",
    options: [
      "Berlin",
      "Madrid",
      "Paris",
      "Rome"
    ],
    answer: 2
  },
  {
    theme: "Geography",
    question: "Which river is the longest in the world?",
    options: [
      "Amazon",
      "Nile",
      "Yangtze",
      "Mississippi"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is the speed of light in a vacuum?",
    options: [
      "300,000 km/s",
      "150,000 km/s",
      "450,000 km/s",
      "600,000 km/s"
    ],
    answer: 0
  },
  {
    theme: "Physics",
    question: "What is Newton's first law of motion called?",
    options: [
      "Law of acceleration",
      "Law of inertia",
      "Law of action-reaction",
      "Law of gravity"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is force measured in?",
    options: [
      "Joules",
      "Newtons",
      "Watts",
      "Pascals"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is energy of motion called?",
    options: [
      "Potential energy",
      "Kinetic energy",
      "Thermal energy",
      "Chemical energy"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What type of wave is sound?",
    options: [
      "Transverse",
      "Longitudinal",
      "Electromagnetic",
      "Static"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is the unit of electric current?",
    options: [
      "Volt",
      "Ohm",
      "Ampere",
      "Watt"
    ],
    answer: 2
  },
  {
    theme: "Physics",
    question: "What happens to light when it enters a denser medium?",
    options: [
      "It speeds up",
      "It bends",
      "It disappears",
      "It becomes sound"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is the SI unit of temperature?",
    options: [
      "Celsius",
      "Kelvin",
      "Fahrenheit",
      "Rankine"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is the formula for speed?",
    options: [
      "Speed = distance × time",
      "Speed = distance ÷ time",
      "Speed = time ÷ distance",
      "Speed = force × time"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What do magnets attract?",
    options: [
      "Wood",
      "Plastic",
      "Iron",
      "Glass"
    ],
    answer: 2
  },
  {
    theme: "Physics",
    question: "What is frequency measured in?",
    options: [
      "Meters",
      "Seconds",
      "Hertz",
      "Newtons"
    ],
    answer: 2
  },
  {
    theme: "Physics",
    question: "What is the name of the force that keeps planets in orbit?",
    options: [
      "Friction",
      "Gravity",
      "Magnetism",
      "Pressure"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is the speed of light in a vacuum?",
    options: [
      "300,000 km/s",
      "150,000 km/s",
      "450,000 km/s",
      "600,000 km/s"
    ],
    answer: 0
  },
  {
    theme: "Physics",
    question: "What is Newton's first law of motion called?",
    options: [
      "Law of acceleration",
      "Law of inertia",
      "Law of action-reaction",
      "Law of gravity"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is force measured in?",
    options: [
      "Joules",
      "Newtons",
      "Watts",
      "Pascals"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is energy of motion called?",
    options: [
      "Potential energy",
      "Kinetic energy",
      "Thermal energy",
      "Chemical energy"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What type of wave is sound?",
    options: [
      "Transverse",
      "Longitudinal",
      "Electromagnetic",
      "Static"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is the unit of electric current?",
    options: [
      "Volt",
      "Ohm",
      "Ampere",
      "Watt"
    ],
    answer: 2
  },
  {
    theme: "Physics",
    question: "What happens to light when it enters a denser medium?",
    options: [
      "It speeds up",
      "It bends",
      "It disappears",
      "It becomes sound"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is the SI unit of temperature?",
    options: [
      "Celsius",
      "Kelvin",
      "Fahrenheit",
      "Rankine"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is the formula for speed?",
    options: [
      "Speed = distance × time",
      "Speed = distance ÷ time",
      "Speed = time ÷ distance",
      "Speed = force × time"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What do magnets attract?",
    options: [
      "Wood",
      "Plastic",
      "Iron",
      "Glass"
    ],
    answer: 2
  },
  {
    theme: "Physics",
    question: "What is frequency measured in?",
    options: [
      "Meters",
      "Seconds",
      "Hertz",
      "Newtons"
    ],
    answer: 2
  },
  {
    theme: "Physics",
    question: "What is the name of the force that keeps planets in orbit?",
    options: [
      "Friction",
      "Gravity",
      "Magnetism",
      "Pressure"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is the speed of light in a vacuum?",
    options: [
      "300,000 km/s",
      "150,000 km/s",
      "450,000 km/s",
      "600,000 km/s"
    ],
    answer: 0
  },
  {
    theme: "Physics",
    question: "What is Newton's first law of motion called?",
    options: [
      "Law of acceleration",
      "Law of inertia",
      "Law of action-reaction",
      "Law of gravity"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is force measured in?",
    options: [
      "Joules",
      "Newtons",
      "Watts",
      "Pascals"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is energy of motion called?",
    options: [
      "Potential energy",
      "Kinetic energy",
      "Thermal energy",
      "Chemical energy"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What type of wave is sound?",
    options: [
      "Transverse",
      "Longitudinal",
      "Electromagnetic",
      "Static"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is the unit of electric current?",
    options: [
      "Volt",
      "Ohm",
      "Ampere",
      "Watt"
    ],
    answer: 2
  },
  {
    theme: "Physics",
    question: "What happens to light when it enters a denser medium?",
    options: [
      "It speeds up",
      "It bends",
      "It disappears",
      "It becomes sound"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is the SI unit of temperature?",
    options: [
      "Celsius",
      "Kelvin",
      "Fahrenheit",
      "Rankine"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is the formula for speed?",
    options: [
      "Speed = distance × time",
      "Speed = distance ÷ time",
      "Speed = time ÷ distance",
      "Speed = force × time"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What do magnets attract?",
    options: [
      "Wood",
      "Plastic",
      "Iron",
      "Glass"
    ],
    answer: 2
  },
  {
    theme: "Physics",
    question: "What is frequency measured in?",
    options: [
      "Meters",
      "Seconds",
      "Hertz",
      "Newtons"
    ],
    answer: 2
  },
  {
    theme: "Physics",
    question: "What is the name of the force that keeps planets in orbit?",
    options: [
      "Friction",
      "Gravity",
      "Magnetism",
      "Pressure"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is the speed of light in a vacuum?",
    options: [
      "300,000 km/s",
      "150,000 km/s",
      "450,000 km/s",
      "600,000 km/s"
    ],
    answer: 0
  },
  {
    theme: "Physics",
    question: "What is Newton's first law of motion called?",
    options: [
      "Law of acceleration",
      "Law of inertia",
      "Law of action-reaction",
      "Law of gravity"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is force measured in?",
    options: [
      "Joules",
      "Newtons",
      "Watts",
      "Pascals"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is energy of motion called?",
    options: [
      "Potential energy",
      "Kinetic energy",
      "Thermal energy",
      "Chemical energy"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What type of wave is sound?",
    options: [
      "Transverse",
      "Longitudinal",
      "Electromagnetic",
      "Static"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is the unit of electric current?",
    options: [
      "Volt",
      "Ohm",
      "Ampere",
      "Watt"
    ],
    answer: 2
  },
  {
    theme: "Physics",
    question: "What happens to light when it enters a denser medium?",
    options: [
      "It speeds up",
      "It bends",
      "It disappears",
      "It becomes sound"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is the SI unit of temperature?",
    options: [
      "Celsius",
      "Kelvin",
      "Fahrenheit",
      "Rankine"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is the formula for speed?",
    options: [
      "Speed = distance × time",
      "Speed = distance ÷ time",
      "Speed = time ÷ distance",
      "Speed = force × time"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What do magnets attract?",
    options: [
      "Wood",
      "Plastic",
      "Iron",
      "Glass"
    ],
    answer: 2
  },
  {
    theme: "Physics",
    question: "What is frequency measured in?",
    options: [
      "Meters",
      "Seconds",
      "Hertz",
      "Newtons"
    ],
    answer: 2
  },
  {
    theme: "Physics",
    question: "What is the name of the force that keeps planets in orbit?",
    options: [
      "Friction",
      "Gravity",
      "Magnetism",
      "Pressure"
    ],
    answer: 1
  },
  {
    theme: "Physics",
    question: "What is the speed of light in a vacuum?",
    options: [
      "300,000 km/s",
      "150,000 km/s",
      "450,000 km/s",
      "600,000 km/s"
    ],
    answer: 0
  },
  {
    theme: "Physics",
    question: "What is Newton's first law of motion called?",
    options: [
      "Law of acceleration",
      "Law of inertia",
      "Law of action-reaction",
      "Law of gravity"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the chemical symbol for water?",
    options: [
      "O2",
      "H2O",
      "CO2",
      "NaCl"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the pH of a neutral solution?",
    options: [
      "0",
      "7",
      "14",
      "10"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the atomic number of carbon?",
    options: [
      "4",
      "6",
      "8",
      "12"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the lightest element?",
    options: [
      "Helium",
      "Hydrogen",
      "Oxygen",
      "Carbon"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What type of bond involves sharing electrons?",
    options: [
      "Ionic",
      "Covalent",
      "Metallic",
      "Hydrogen"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the chemical formula for table salt?",
    options: [
      "NaCl",
      "KCl",
      "CaCO3",
      "H2O"
    ],
    answer: 0
  },
  {
    theme: "Chemistry",
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: [
      "Oxygen",
      "Nitrogen",
      "Carbon dioxide",
      "Hydrogen"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the process of a solid changing directly to a gas called?",
    options: [
      "Melting",
      "Condensation",
      "Sublimation",
      "Freezing"
    ],
    answer: 2
  },
  {
    theme: "Chemistry",
    question: "What is the unit used to measure amount of substance?",
    options: [
      "Gram",
      "Mole",
      "Liter",
      "Meter"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the common name for sodium bicarbonate?",
    options: [
      "Salt",
      "Sugar",
      "Baking soda",
      "Vinegar"
    ],
    answer: 2
  },
  {
    theme: "Chemistry",
    question: "What is the chemical symbol for gold?",
    options: [
      "Ag",
      "Au",
      "Gd",
      "Go"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What does pH measure?",
    options: [
      "Temperature",
      "Acidity or alkalinity",
      "Mass",
      "Volume"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the chemical symbol for water?",
    options: [
      "O2",
      "H2O",
      "CO2",
      "NaCl"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the pH of a neutral solution?",
    options: [
      "0",
      "7",
      "14",
      "10"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the atomic number of carbon?",
    options: [
      "4",
      "6",
      "8",
      "12"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the lightest element?",
    options: [
      "Helium",
      "Hydrogen",
      "Oxygen",
      "Carbon"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What type of bond involves sharing electrons?",
    options: [
      "Ionic",
      "Covalent",
      "Metallic",
      "Hydrogen"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the chemical formula for table salt?",
    options: [
      "NaCl",
      "KCl",
      "CaCO3",
      "H2O"
    ],
    answer: 0
  },
  {
    theme: "Chemistry",
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: [
      "Oxygen",
      "Nitrogen",
      "Carbon dioxide",
      "Hydrogen"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the process of a solid changing directly to a gas called?",
    options: [
      "Melting",
      "Condensation",
      "Sublimation",
      "Freezing"
    ],
    answer: 2
  },
  {
    theme: "Chemistry",
    question: "What is the unit used to measure amount of substance?",
    options: [
      "Gram",
      "Mole",
      "Liter",
      "Meter"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the common name for sodium bicarbonate?",
    options: [
      "Salt",
      "Sugar",
      "Baking soda",
      "Vinegar"
    ],
    answer: 2
  },
  {
    theme: "Chemistry",
    question: "What is the chemical symbol for gold?",
    options: [
      "Ag",
      "Au",
      "Gd",
      "Go"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What does pH measure?",
    options: [
      "Temperature",
      "Acidity or alkalinity",
      "Mass",
      "Volume"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the chemical symbol for water?",
    options: [
      "O2",
      "H2O",
      "CO2",
      "NaCl"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the pH of a neutral solution?",
    options: [
      "0",
      "7",
      "14",
      "10"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the atomic number of carbon?",
    options: [
      "4",
      "6",
      "8",
      "12"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the lightest element?",
    options: [
      "Helium",
      "Hydrogen",
      "Oxygen",
      "Carbon"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What type of bond involves sharing electrons?",
    options: [
      "Ionic",
      "Covalent",
      "Metallic",
      "Hydrogen"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the chemical formula for table salt?",
    options: [
      "NaCl",
      "KCl",
      "CaCO3",
      "H2O"
    ],
    answer: 0
  },
  {
    theme: "Chemistry",
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: [
      "Oxygen",
      "Nitrogen",
      "Carbon dioxide",
      "Hydrogen"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the process of a solid changing directly to a gas called?",
    options: [
      "Melting",
      "Condensation",
      "Sublimation",
      "Freezing"
    ],
    answer: 2
  },
  {
    theme: "Chemistry",
    question: "What is the unit used to measure amount of substance?",
    options: [
      "Gram",
      "Mole",
      "Liter",
      "Meter"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the common name for sodium bicarbonate?",
    options: [
      "Salt",
      "Sugar",
      "Baking soda",
      "Vinegar"
    ],
    answer: 2
  },
  {
    theme: "Chemistry",
    question: "What is the chemical symbol for gold?",
    options: [
      "Ag",
      "Au",
      "Gd",
      "Go"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What does pH measure?",
    options: [
      "Temperature",
      "Acidity or alkalinity",
      "Mass",
      "Volume"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the chemical symbol for water?",
    options: [
      "O2",
      "H2O",
      "CO2",
      "NaCl"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the pH of a neutral solution?",
    options: [
      "0",
      "7",
      "14",
      "10"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the atomic number of carbon?",
    options: [
      "4",
      "6",
      "8",
      "12"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the lightest element?",
    options: [
      "Helium",
      "Hydrogen",
      "Oxygen",
      "Carbon"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What type of bond involves sharing electrons?",
    options: [
      "Ionic",
      "Covalent",
      "Metallic",
      "Hydrogen"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the chemical formula for table salt?",
    options: [
      "NaCl",
      "KCl",
      "CaCO3",
      "H2O"
    ],
    answer: 0
  },
  {
    theme: "Chemistry",
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: [
      "Oxygen",
      "Nitrogen",
      "Carbon dioxide",
      "Hydrogen"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the process of a solid changing directly to a gas called?",
    options: [
      "Melting",
      "Condensation",
      "Sublimation",
      "Freezing"
    ],
    answer: 2
  },
  {
    theme: "Chemistry",
    question: "What is the unit used to measure amount of substance?",
    options: [
      "Gram",
      "Mole",
      "Liter",
      "Meter"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the common name for sodium bicarbonate?",
    options: [
      "Salt",
      "Sugar",
      "Baking soda",
      "Vinegar"
    ],
    answer: 2
  },
  {
    theme: "Chemistry",
    question: "What is the chemical symbol for gold?",
    options: [
      "Ag",
      "Au",
      "Gd",
      "Go"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What does pH measure?",
    options: [
      "Temperature",
      "Acidity or alkalinity",
      "Mass",
      "Volume"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the chemical symbol for water?",
    options: [
      "O2",
      "H2O",
      "CO2",
      "NaCl"
    ],
    answer: 1
  },
  {
    theme: "Chemistry",
    question: "What is the pH of a neutral solution?",
    options: [
      "0",
      "7",
      "14",
      "10"
    ],
    answer: 1
  },
  {
    theme: "GIS",
    question: "What does GIS stand for?",
    options: [
      "Geographic Information System",
      "Global Information Service",
      "Geological Investigation Society",
      "General Internet Survey"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is a layer in GIS?",
    options: [
      "A map scale",
      "A collection of geographic features",
      "A coordinate system",
      "A software update"
    ],
    answer: 1
  },
  {
    theme: "GIS",
    question: "What is a shapefile?",
    options: [
      "A GIS data format",
      "A map projection",
      "A satellite image",
      "A legend"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is georeferencing?",
    options: [
      "Aligning spatial data to a known coordinate system",
      "Creating charts",
      "Measuring altitude",
      "Collecting weather data"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What does raster data represent?",
    options: [
      "Points only",
      "A grid of cells",
      "Lines only",
      "Text labels"
    ],
    answer: 1
  },
  {
    theme: "GIS",
    question: "What does vector data represent?",
    options: [
      "Images only",
      "Discrete features like points and lines",
      "Temperature only",
      "Audio"
    ],
    answer: 1
  },
  {
    theme: "GIS",
    question: "What is a geodatabase?",
    options: [
      "A container for spatial data",
      "A map legend",
      "A satellite image",
      "A coordinate axis"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is a map projection?",
    options: [
      "A way to represent the Earth on a flat surface",
      "A type of satellite",
      "A coordinate system for time",
      "A hardware device"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is metadata?",
    options: [
      "Data about data",
      "A map style",
      "A type of GIS software",
      "A satellite sensor"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is a spatial join?",
    options: [
      "Combining layers based on location",
      "Creating labels",
      "Measuring altitude",
      "Adding a legend"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is buffering in GIS?",
    options: [
      "Creating zones around a feature",
      "Changing map colors",
      "Deleting layers",
      "Selecting map scales"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is topology in GIS?",
    options: [
      "Spatial relationships between features",
      "Color schemes",
      "Map symbols",
      "Data storage capacity"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What does GIS stand for?",
    options: [
      "Geographic Information System",
      "Global Information Service",
      "Geological Investigation Society",
      "General Internet Survey"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is a layer in GIS?",
    options: [
      "A map scale",
      "A collection of geographic features",
      "A coordinate system",
      "A software update"
    ],
    answer: 1
  },
  {
    theme: "GIS",
    question: "What is a shapefile?",
    options: [
      "A GIS data format",
      "A map projection",
      "A satellite image",
      "A legend"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is georeferencing?",
    options: [
      "Aligning spatial data to a known coordinate system",
      "Creating charts",
      "Measuring altitude",
      "Collecting weather data"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What does raster data represent?",
    options: [
      "Points only",
      "A grid of cells",
      "Lines only",
      "Text labels"
    ],
    answer: 1
  },
  {
    theme: "GIS",
    question: "What does vector data represent?",
    options: [
      "Images only",
      "Discrete features like points and lines",
      "Temperature only",
      "Audio"
    ],
    answer: 1
  },
  {
    theme: "GIS",
    question: "What is a geodatabase?",
    options: [
      "A container for spatial data",
      "A map legend",
      "A satellite image",
      "A coordinate axis"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is a map projection?",
    options: [
      "A way to represent the Earth on a flat surface",
      "A type of satellite",
      "A coordinate system for time",
      "A hardware device"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is metadata?",
    options: [
      "Data about data",
      "A map style",
      "A type of GIS software",
      "A satellite sensor"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is a spatial join?",
    options: [
      "Combining layers based on location",
      "Creating labels",
      "Measuring altitude",
      "Adding a legend"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is buffering in GIS?",
    options: [
      "Creating zones around a feature",
      "Changing map colors",
      "Deleting layers",
      "Selecting map scales"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is topology in GIS?",
    options: [
      "Spatial relationships between features",
      "Color schemes",
      "Map symbols",
      "Data storage capacity"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What does GIS stand for?",
    options: [
      "Geographic Information System",
      "Global Information Service",
      "Geological Investigation Society",
      "General Internet Survey"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is a layer in GIS?",
    options: [
      "A map scale",
      "A collection of geographic features",
      "A coordinate system",
      "A software update"
    ],
    answer: 1
  },
  {
    theme: "GIS",
    question: "What is a shapefile?",
    options: [
      "A GIS data format",
      "A map projection",
      "A satellite image",
      "A legend"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is georeferencing?",
    options: [
      "Aligning spatial data to a known coordinate system",
      "Creating charts",
      "Measuring altitude",
      "Collecting weather data"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What does raster data represent?",
    options: [
      "Points only",
      "A grid of cells",
      "Lines only",
      "Text labels"
    ],
    answer: 1
  },
  {
    theme: "GIS",
    question: "What does vector data represent?",
    options: [
      "Images only",
      "Discrete features like points and lines",
      "Temperature only",
      "Audio"
    ],
    answer: 1
  },
  {
    theme: "GIS",
    question: "What is a geodatabase?",
    options: [
      "A container for spatial data",
      "A map legend",
      "A satellite image",
      "A coordinate axis"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is a map projection?",
    options: [
      "A way to represent the Earth on a flat surface",
      "A type of satellite",
      "A coordinate system for time",
      "A hardware device"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is metadata?",
    options: [
      "Data about data",
      "A map style",
      "A type of GIS software",
      "A satellite sensor"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is a spatial join?",
    options: [
      "Combining layers based on location",
      "Creating labels",
      "Measuring altitude",
      "Adding a legend"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is buffering in GIS?",
    options: [
      "Creating zones around a feature",
      "Changing map colors",
      "Deleting layers",
      "Selecting map scales"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is topology in GIS?",
    options: [
      "Spatial relationships between features",
      "Color schemes",
      "Map symbols",
      "Data storage capacity"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What does GIS stand for?",
    options: [
      "Geographic Information System",
      "Global Information Service",
      "Geological Investigation Society",
      "General Internet Survey"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is a layer in GIS?",
    options: [
      "A map scale",
      "A collection of geographic features",
      "A coordinate system",
      "A software update"
    ],
    answer: 1
  },
  {
    theme: "GIS",
    question: "What is a shapefile?",
    options: [
      "A GIS data format",
      "A map projection",
      "A satellite image",
      "A legend"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is georeferencing?",
    options: [
      "Aligning spatial data to a known coordinate system",
      "Creating charts",
      "Measuring altitude",
      "Collecting weather data"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What does raster data represent?",
    options: [
      "Points only",
      "A grid of cells",
      "Lines only",
      "Text labels"
    ],
    answer: 1
  },
  {
    theme: "GIS",
    question: "What does vector data represent?",
    options: [
      "Images only",
      "Discrete features like points and lines",
      "Temperature only",
      "Audio"
    ],
    answer: 1
  },
  {
    theme: "GIS",
    question: "What is a geodatabase?",
    options: [
      "A container for spatial data",
      "A map legend",
      "A satellite image",
      "A coordinate axis"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is a map projection?",
    options: [
      "A way to represent the Earth on a flat surface",
      "A type of satellite",
      "A coordinate system for time",
      "A hardware device"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is metadata?",
    options: [
      "Data about data",
      "A map style",
      "A type of GIS software",
      "A satellite sensor"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is a spatial join?",
    options: [
      "Combining layers based on location",
      "Creating labels",
      "Measuring altitude",
      "Adding a legend"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is buffering in GIS?",
    options: [
      "Creating zones around a feature",
      "Changing map colors",
      "Deleting layers",
      "Selecting map scales"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is topology in GIS?",
    options: [
      "Spatial relationships between features",
      "Color schemes",
      "Map symbols",
      "Data storage capacity"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What does GIS stand for?",
    options: [
      "Geographic Information System",
      "Global Information Service",
      "Geological Investigation Society",
      "General Internet Survey"
    ],
    answer: 0
  },
  {
    theme: "GIS",
    question: "What is a layer in GIS?",
    options: [
      "A map scale",
      "A collection of geographic features",
      "A coordinate system",
      "A software update"
    ],
    answer: 1
  }
];

if (typeof window !== 'undefined') {
  window.triviaQuestions = triviaQuestions;
}
