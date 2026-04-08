const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/text-3xl md:text-5xl/g, 'text-2xl md:text-4xl');
  content = content.replace(/text-4xl md:text-5xl/g, 'text-3xl md:text-4xl');
  content = content.replace(/text-4xl md:text-7xl/g, 'text-3xl md:text-5xl');
  content = content.replace(/text-xl sm:text-2xl md:text-4xl lg:text-5xl/g, 'text-lg sm:text-xl md:text-3xl lg:text-4xl');
  
  fs.writeFileSync(filePath, content);
}
console.log('Replacing fonts done');
