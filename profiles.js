const profiles = {
  "Manfred": {
    birthDate: "1988-01-25",
    title: "Manfred’s Life in Weeks",
    yearsToShow: "90",
    eventsData: {
      events: [
      ]
    },
  },
  Einstein: {
    birthDate: "1879-03-14",
    title: "Einstein’s Life in Weeks",
    yearsToShow: "76",
    eventsData: {
      events: [
        { begin: "1895-10-03", end: "1900-07-28", description: "Studied at Zurich Polytechnic", color: "#DEB887" },
        { begin: "1902-06-01", end: "1909-01-15", description: "Worked at Swiss Patent Office in Bern", color: "#8B4513" },
        { begin: "1902-10-16", end: "1909-07-15", description: "Employed at Swiss Patent Office", color: "#8B4513" },
        { begin: "1912-08-15", end: "1914-07-03", description: "Professor at the Zurich Polytechnic", color: "#FF69B4" },
        { begin: "1912-10-01", end: "1914-07-31", description: "Professor at ETH Zurich", color: "#A52A2A" },
        { begin: "1916-03-20", end: "1932-10-01", description: "Director of the Kaiser Wilhelm Institute and professor at Humboldt University of Berlin", color: "#8A2BE2" },
        { begin: "1919-03-14", end: "1936-02-14", description: "Married to Elsa Einstein", color: "#FF69B4" },        
        { begin: "1930-12-03", end: "1932-03-28", description: "Visited the U.S. during which he was offered a position at the Institute for Advanced Study", color: "#E6E6FA" },
        { begin: "1933-10-17", end: "1955-04-18", description: "Moved to the U.S. and joined the Institute for Advanced Study in Princeton, New Jersey", color: "#FA8072" },
        { begin: "1936-01-05", end: "1945-01-05", description: "Works on his Unified Field Theory", color: "#4B0082" },
        { begin: "1950-01-01", end: "1955-04-18", description: "Worked on his unsuccessful attempt to unify the forces of nature", color: "#FFA07A" },
        { date: "1905-09-26", description: "Published the special theory of relativity in 'On the Electrodynamics of Moving Bodies'", color: "#20B2AA" },
        { date: "1905-01-01", description: "Annus Mirabilis papers", color: "#FFD700" },
        { date: "1915-11-25", description: "Presented the field equations of general relativity", color: "#C0C0C0" },
        { date: "1916-11-25", description: "Published theory of general relativity", color: "#BDB76B" },
        { date: "1917-01-01", description: "Introduced the idea of stimulated emission", color: "#B0C4DE" },
        { date: "1917-08-02", description: "Developed the Einstein-Smoluchowski relation", color: "#ADD8E6" },
        { date: "1919-05-29", description: "Solar eclipse proves Einstein's theory of general relativity", color: "#FFD700" },
        { date: "1921-01-01", description: "Wins Nobel Prize in Physics", color: "#DAA520" },
        { date: "1921-11-09", description: "Won the Nobel Prize in Physics for his work on the photoelectric effect", color: "#FF6347" },
        { date: "1925-01-21", description: "Publishes the paper on quantum theory of the monatomic ideal gas", color: "#FF4500" },
        { date: "1933-03-04", description: "Emigrated to the USA after Hitler's rise to power", color: "#228B22" },
        { date: "1935-03-24", description: "With Podolsky & Rosen, publishes the EPR Paradox paper", color: "#7CFC00" },
        { date: "1939-08-02", description: "Signs the Einstein-Szilard letter to Roosevelt, urging atomic research", color: "#808080" },
        { date: "1940-10-01", description: "Became an American citizen while retaining his Swiss citizenship", color: "#FFDEAD" },
        { date: "1946-04-10", description: "Speaks out against racism, calling it America's 'worst disease'", color: "#FF6347" },
        { date: "1948-12-05", description: "Publishes a paper on the Quantum Theory of Fields", color: "#6A5ACD" },
        { date: "1950-07-09", description: "Releases the Einstein-Rosen paper, proposing the existence of wormholes", color: "#FF4500" },
        { date: "1952-11-17", description: "Offered the presidency of Israel, but declines", color: "#8A2BE2" },
        { date: "1954-04-15", description: "Writes a letter to Maurice Solovine, now known as 'God letter'", color: "#D2691E" },
        { date: "1955-04-18", description: "Died in Princeton, New Jersey", color: "#000000" },
      ]
    },
  },
  "Gandhi": {
    birthDate: "1869-10-02",
    title: "Gandhi’s Life in Weeks",
    yearsToShow: "79",
    eventsData: {
      events: [
        { date: "1930-03-12", description: "Start of Dandi March", color: "#D4AF37" },
        { date: "1942-08-08", description: "Launch of Quit India Movement", color: "#C0C0C0" },
      ]
    },
  },
  "Jesus": {
    birthDate: "0000-12-25", // Symbolic date
    title: "Jesus’ Life in Weeks",
    yearsToShow: "33",
    eventsData: {
      events: [
        { date: "0030-04-05", description: "Crucifixion (approximated)", color: "#D4AF37" },
      ]
    },
  },
  "Elon Musk": {
    birthDate: "1971-06-28",
    title: "Elon Musk’s Life in Weeks",
    yearsToShow: "100", // Projected for a full lifespan, can be adjusted.
    eventsData: {
      events: [
        { date: "2002-03-14", description: "Founded SpaceX", color: "#D4AF37" },
        { date: "2004-02-01", description: "Joined Tesla Motors", color: "#C0C0C0" },
        // ... and other significant events
      ]
    },
  },
  "Steve Jobs": {
    birthDate: "1955-02-24",
    title: "Steve Jobs’ Life in Weeks",
    yearsToShow: "56",
    eventsData: {
      events: [
        { date: "1976-04-01", description: "Founded Apple with Wozniak", color: "#D4AF37" },
        { date: "2007-01-09", description: "Introduced the iPhone", color: "#C0C0C0" },
        // ... and other significant events
      ]
    },
  },
};
