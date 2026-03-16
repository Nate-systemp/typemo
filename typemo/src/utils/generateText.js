export const wordBank = [
"time","year","people","way","day","man","thing","woman","life","child",
"world","school","state","family","student","group","country","problem","hand","part",
"place","case","week","company","system","program","question","work","government","number",
"night","point","home","water","room","mother","area","money","story","fact",
"month","lot","right","study","book","eye","job","word","business","issue",
"side","kind","head","house","service","friend","father","power","hour","game",
"line","end","member","law","car","city","community","name","president","team",
"minute","idea","kid","body","information","back","parent","face","others","level",
"office","door","health","person","art","war","history","party","result","change",
"morning","reason","research","girl","guy","moment","air","teacher","force","education",
"foot","boy","age","policy","process","music","market","sense","nation","plan",
"college","interest","death","experience","effect","use","class","control","care","field",
"development","role","effort","rate","heart","drug","leader","light","voice","wife",
"police","mind","price","report","decision","son","view","relationship","town","road",
"arm","difference","value","building","action","model","season","society","tax","director",
"position","player","record","paper","space","ground","form","event","official","matter",
"center","couple","site","project","activity","star","table","need","court","oil",
"situation","cost","industry","figure","street","image","phone","data","picture","practice",
"piece","land","product","doctor","wall","patient","worker","news","test","movie",
"north","love","support","technology","step","baby","computer","type","attention","film",
"tree","source","organization","hair","look","window","culture","chance","brother","energy",
"period","course","summer","plant","opportunity","term","letter","condition","choice","rule"
]; 


export function generateWords(count = 60) {

  const words = [];

  for (let i = 0; i < count; i++) {
    
    const randomIndex = Math.floor(Math.random() * wordBank.length);
    
    words.push(wordBank[randomIndex]);

  }

  return words.join(" ");
}
