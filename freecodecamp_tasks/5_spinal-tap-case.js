function spinalCase(str) {
  let regex = / |_/g;

  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  
  str = str.replace(regex, '-').toLowerCase();

  return str;
}

spinalCase('This_Is thisIsSpinalTap Tap');