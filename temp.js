fetch('https://arcsassist.in/assets/index-CRqOSQcJ.css')
  .then(res => res.text())
  .then(text => {
    const vars = text.match(/--font-[a-zA-Z-]+:[^;}]+/g);
    // remove duplicates
    const uniqueVars = [...new Set(vars)];
    console.log("Font vars:", uniqueVars);
  });
