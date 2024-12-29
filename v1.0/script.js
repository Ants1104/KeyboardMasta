'use strict';

//========== HANDLING KEY PRESS ==========

const handleKeyPress = function (e) {
  console.log(e);

  e.preventDefault();
  const keyElement = document.querySelector('.' + e.code.toLowerCase());

  if (e.type === 'keydown') {
    keyElement.classList.add('key-pressing-simulation');
  } else if (e.type === 'keyup') {
    keyElement.classList.remove('key-pressing-simulation');
  }

  if (!keyElement.classList.contains('key--pressed'))
    keyElement.classList.add('key--pressed');
}


document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup', handleKeyPress);

//========== HANDLING KEY PRESS FOR JAPAN SPECIAL KEY==========

const JhandleKeyPress = function (e) {
  console.log(e);

  e.preventDefault();
  const JkeyElement = document.querySelector('.' + e.code.toString());

  if (e.type === 'keydown') {
    JkeyElement.classList.add('key-pressing-simulation');
  } else if (e.type === 'keyup') {
    JkeyElement.classList.remove('key-pressing-simulation');
  }

  if (!JkeyElement.classList.contains('key--pressed'))
    JkeyElement.classList.add('key--pressed');
}

document.addEventListener('keydown', JhandleKeyPress);
document.addEventListener('keyup', JhandleKeyPress);

//========== LIST YOUR PRESS KEY ==========

const Key_Press = function (e) {
  console.log(e);
  
const output_value = document.querySelector('.Press_key');
	    	  
  switch (e.keyCode) {

    case 8:
      output_value.textContent = 'Backspace';
      break;
    case 9:
      output_value.textContent = 'Tab';
      break;
    case 13:
      output_value.textContent = 'Enter';
      break;
    case 16:
      output_value.textContent = 'Shift';
      break;
    case 17:
      output_value.textContent = 'Control';
      break;
    case 18:
      output_value.textContent = 'Alt';
      break;
    case 19:
      output_value.textContent = 'Pause Break';
      break;
    case 20:
      output_value.textContent = 'Caps Lock';
      break;
    case 27:
      output_value.textContent = 'ESC';
      break;
    case 32:
      output_value.textContent = 'Space';
      break;
    case 33:
      output_value.textContent = 'Page Up';
      break;
    case 34:
      output_value.textContent = 'Page Down';
      break;
    case 35:
      output_value.textContent = 'End';
      break;
    case 36:
      output_value.textContent = 'Home';
      break;
    case 37:
      output_value.textContent = 'Left';
      break;
    case 38:
      output_value.textContent = 'Up';
      break;
    case 39:
      output_value.textContent = 'Right';
      break;
    case 40:
      output_value.textContent = 'Down';
      break;
    case 42:
      output_value.textContent = 'Print Screen';
      break;
	case 44:
      output_value.textContent = 'Print Screen';
      break;
    case 45:
      output_value.textContent = 'Insert';
      break;
    case 46:
      output_value.textContent = 'Delete';
      break;
    case 48:
      output_value.textContent = 'Digital 0 )';
      break;
    case 49:
      output_value.textContent = 'Digital 1 !';
      break;
    case 50:
      output_value.textContent = 'Digital 2 @';
      break;
    case 51:
      output_value.textContent = 'Digital 3 #';
      break;
    case 52:
      output_value.textContent = 'Digital 4 $';
      break;
    case 53:
      output_value.textContent = 'Digital 5 %';
      break;
    case 54:
      output_value.textContent = 'Digital 6 ^';
      break;
    case 55:
      output_value.textContent = 'Digital 7 &';
      break;
    case 56:
      output_value.textContent = 'Digital 8 *';
      break;
    case 57:
      output_value.textContent = 'Digital 9 (';
      break;
    case 58:
      output_value.textContent = ': ;';
      break;
    case 59:
      output_value.textContent = ': ;';
      break;
    case 60:
      output_value.textContent = '<';
      break;
    case 61:
      output_value.textContent = '=';
      break;
    case 65:
      output_value.textContent = 'A';
      break;
    case 66:
      output_value.textContent = 'B';
      break;
    case 67:
      output_value.textContent = 'C';
      break;
    case 68:
      output_value.textContent = 'D';
      break;
    case 69:
      output_value.textContent = 'E';
      break;
    case 70:
      output_value.textContent = 'F';
      break;
    case 71:
      output_value.textContent = 'G';
      break;
    case 72:
      output_value.textContent = 'H';
      break;
    case 73:
      output_value.textContent = 'I';
      break;
    case 74:
      output_value.textContent = 'J';
      break;
    case 75:
      output_value.textContent = 'K';
      break;
    case 76:
      output_value.textContent = 'L';
      break;
    case 77:
      output_value.textContent = 'M';
      break;
    case 78:
      output_value.textContent = 'N';
      break;
    case 79:
      output_value.textContent = 'O';
      break;
    case 80:
      output_value.textContent = 'P';
      break;
    case 81:
      output_value.textContent = 'Q';
      break;
    case 82:
      output_value.textContent = 'R';
      break;
    case 83:
      output_value.textContent = 'S';
      break;
    case 84:
      output_value.textContent = 'T';
      break;
    case 85:
      output_value.textContent = 'U';
      break;
    case 86:
      output_value.textContent = 'V';
      break;
    case 87:
      output_value.textContent = 'W';
      break;
    case 88:
      output_value.textContent = 'X';
      break;
    case 89:
      output_value.textContent = 'Y';
      break;
    case 90:
      output_value.textContent = 'Z';
      break;
    case 91:
      output_value.textContent = 'Windows Key';
      break;
    case 92:
      output_value.textContent = 'Windows Key';
      break;
    case 93:
      output_value.textContent = 'Context Menu';
      break;
    case 96:
      output_value.textContent = 'Numpad 0';
      break;
    case 97:
      output_value.textContent = 'Numpad 1';
      break;
    case 98:
      output_value.textContent = 'Numpad 2';
      break;
    case 99:
      output_value.textContent = 'Numpad 3';
      break;
    case 100:
      output_value.textContent = 'Numpad 4';
	  break;
    case 101:
      output_value.textContent = 'Numpad 5';
      break;
    case 102:
      output_value.textContent = 'Numpad 6';
      break;
    case 103:
      output_value.textContent = 'Numpad 7';
      break;
    case 104:
      output_value.textContent = 'Numpad 8';
      break;
    case 105:
      output_value.textContent = 'Numpad 9';
      break;
    case 106:
      output_value.textContent = 'Numpad *';
      break;
    case 107:
      output_value.textContent = 'Numpad +';
      break;
    case 109:
      output_value.textContent = 'Numpad -';
      break;
    case 110:
      output_value.textContent = 'Numpad .';
      break;
    case 111:
      output_value.textContent = 'Numpad /';
      break;
    case 112:
      output_value.textContent = 'F1';
      break;
    case 113:
      output_value.textContent = 'F2';
      break;
    case 114:
      output_value.textContent = 'F3';
      break;
    case 115:
      output_value.textContent = 'F4';
      break;
    case 116:
      output_value.textContent = 'F5';
      break;
    case 117:
      output_value.textContent = 'F6';
      break;
    case 118:
      output_value.textContent = 'F7';
      break;
    case 119:
      output_value.textContent = 'F8';
      break;
    case 120:
      output_value.textContent = 'F9';
      break;
    case 121:
      output_value.textContent = 'F10';
      break;
    case 122:
      output_value.textContent = 'F11';
      break;
    case 123:
      output_value.textContent = 'F12';
      break;
    case 144:
      output_value.textContent = 'Num Lock';
      break;
    case 145:
      output_value.textContent = 'Scroll Lock';
      break;
	case 186:
      output_value.textContent = '; :';
      break;
	case 187:
      output_value.textContent = '= +';
      break;
	case 188:
      output_value.textContent = ', <';
      break;
	case 189:
      output_value.textContent = '- _';
      break;
	case 190:
      output_value.textContent = '. >';
      break;
	case 191:
      output_value.textContent = '/ ?';
      break;
	case 192:
      output_value.textContent = '`';
      break;
	case 219:
      output_value.textContent = '[ {';
      break;
	case 220:
      output_value.textContent = ' | ';
      break;
	case 221:
      output_value.textContent = '] }';
      break;
	case 222:
      output_value.textContent = ' " ';
      break;
	case 226:
      output_value.textContent = ' \ _ ';
      break;
    default:
      break;
  }
  
//========== FOR LINUX FIREFOX ENGLISH KEYBOARD ==========

  switch (e.key) {

    case 'Alphanumeric':
      output_value.textContent = 'Caps Lock';
      break;
    case '-':
      output_value.textContent = '- _';
      break;
    default:
      break;
  }
}
document.addEventListener('keydown', Key_Press);

//========== LIST YOUR PRESS KEY FOR JAPAN ALPHABET==========

const JKey_Press = function (e) {
  console.log(e);
  
const output_value = document.querySelector('.JPress_key');
	    	  
  switch (e.keyCode) {

    case 8:
      output_value.textContent = 'Backspace';
      break;
    case 9:
      output_value.textContent = 'Tab';
      break;
    case 13:
      output_value.textContent = 'Enter';
      break;
    case 16:
      output_value.textContent = 'Shift';
      break;
    case 17:
      output_value.textContent = 'Control';
      break;
    case 18:
      output_value.textContent = 'Alt';
      break;
    case 19:
      output_value.textContent = 'Pause Break';
      break;
    case 20:
      output_value.textContent = 'Caps Lock';
      break;
    case 27:
      output_value.textContent = 'ESC';
      break;
	case 28:
      output_value.textContent = 'Japan Conversion';
      break;
	case 29:
      output_value.textContent = 'Japan Non Conversion';
      break;
    case 32:
      output_value.textContent = 'Space';
      break;
    case 33:
      output_value.textContent = 'Page Up';
      break;
    case 34:
      output_value.textContent = 'Page Down';
      break;
    case 35:
      output_value.textContent = 'End';
      break;
    case 36:
      output_value.textContent = 'Home';
      break;
    case 37:
      output_value.textContent = 'Left';
      break;
    case 38:
      output_value.textContent = 'Up';
      break;
    case 39:
      output_value.textContent = 'Right';
      break;
    case 40:
      output_value.textContent = 'Down';
      break;
    case 42:
      output_value.textContent = 'Print Screen';
      break;
	case 44:
      output_value.textContent = 'Print Screen';
      break;
    case 45:
      output_value.textContent = 'Insert';
      break;
    case 46:
      output_value.textContent = 'Delete';
      break;
    case 48:
      output_value.textContent = 'Digital 0　)　わ　を';
      break;
    case 49:
      output_value.textContent = 'Digital 1　!　め';
      break;
    case 50:
      output_value.textContent = 'Digital 2　@　ふ';
      break;
    case 51:
      output_value.textContent = 'Digital 3　#　あ';
      break;
    case 52:
      output_value.textContent = 'Digital 4　$　う';
      break;
    case 53:
      output_value.textContent = 'Digital 5　%　え';
      break;
    case 54:
      output_value.textContent = 'Digital 6　^　お';
      break;
    case 55:
      output_value.textContent = 'Digital 7　&　や';
      break;
    case 56:
      output_value.textContent = 'Digital 8　*　ゆ';
      break;
    case 57:
      output_value.textContent = 'Digital 9　(　よ';
      break;
    case 58:
      output_value.textContent = '* :　け';
      break;
    case 59:
      output_value.textContent = '； +　れ';
      break;
    case 60:
      output_value.textContent = '<';
      break;
    case 61:
      output_value.textContent = '=';
      break;
    case 65:
      output_value.textContent = 'A　ち';
      break;
    case 66:
      output_value.textContent = 'B　こ';
      break;
    case 67:
      output_value.textContent = 'C　そ';
      break;
    case 68:
      output_value.textContent = 'D　し';
      break;
    case 69:
      output_value.textContent = 'E　い';
      break;
    case 70:
      output_value.textContent = 'F　は';
      break;
    case 71:
      output_value.textContent = 'G　き';
      break;
    case 72:
      output_value.textContent = 'H　く';
      break;
    case 73:
      output_value.textContent = 'I　に';
      break;
    case 74:
      output_value.textContent = 'J　ま';
      break;
    case 75:
      output_value.textContent = 'K　の';
      break;
    case 76:
      output_value.textContent = 'L　り';
      break;
    case 77:
      output_value.textContent = 'M　も';
      break;
    case 78:
      output_value.textContent = 'N　み';
      break;
    case 79:
      output_value.textContent = 'O　ら';
      break;
    case 80:
      output_value.textContent = 'P　せ';
      break;
    case 81:
      output_value.textContent = 'Q　た';
      break;
    case 82:
      output_value.textContent = 'R　す';
      break;
    case 83:
      output_value.textContent = 'S　と';
      break;
    case 84:
      output_value.textContent = 'T　か';
      break;
    case 85:
      output_value.textContent = 'U　な';
      break;
    case 86:
      output_value.textContent = 'V　ひ';
      break;
    case 87:
      output_value.textContent = 'W　て';
      break;
    case 88:
      output_value.textContent = 'X　さ';
      break;
    case 89:
      output_value.textContent = 'Y　ん';
      break;
    case 90:
      output_value.textContent = 'Z　つ　っ';
      break;
    case 91:
      output_value.textContent = 'Windows Key';
      break;
    case 92:
      output_value.textContent = 'Windows Key';
      break;
    case 93:
      output_value.textContent = 'Context Menu';
      break;
    case 96:
      output_value.textContent = 'Numpad 0';
      break;
    case 97:
      output_value.textContent = 'Numpad 1';
      break;
    case 98:
      output_value.textContent = 'Numpad 2';
      break;
    case 99:
      output_value.textContent = 'Numpad 3';
      break;
    case 100:
      output_value.textContent = 'Numpad 4';
	  break;
    case 101:
      output_value.textContent = 'Numpad 5';
      break;
    case 102:
      output_value.textContent = 'Numpad 6';
      break;
    case 103:
      output_value.textContent = 'Numpad 7';
      break;
    case 104:
      output_value.textContent = 'Numpad 8';
      break;
    case 105:
      output_value.textContent = 'Numpad 9';
      break;
    case 106:
      output_value.textContent = 'Numpad *';
      break;
    case 107:
      output_value.textContent = 'Numpad +';
      break;
    case 109:
      output_value.textContent = 'Numpad -';
      break;
    case 110:
      output_value.textContent = 'Numpad .';
      break;
    case 111:
      output_value.textContent = 'Numpad /';
      break;
    case 112:
      output_value.textContent = 'F1';
      break;
    case 113:
      output_value.textContent = 'F2';
      break;
    case 114:
      output_value.textContent = 'F3';
      break;
    case 115:
      output_value.textContent = 'F4';
      break;
    case 116:
      output_value.textContent = 'F5';
      break;
    case 117:
      output_value.textContent = 'F6';
      break;
    case 118:
      output_value.textContent = 'F7';
      break;
    case 119:
      output_value.textContent = 'F8';
      break;
    case 120:
      output_value.textContent = 'F9';
      break;
    case 121:
      output_value.textContent = 'F10';
      break;
    case 122:
      output_value.textContent = 'F11';
      break;
    case 123:
      output_value.textContent = 'F12';
      break;
    case 144:
      output_value.textContent = 'Num Lock';
      break;
    case 145:
      output_value.textContent = 'Scroll Lock';
      break;
	case 186:
      output_value.textContent = '* :　け';
      break;
	case 187:
      output_value.textContent = '； +　れ';
      break;
	case 188:
      output_value.textContent = ', <　ね';
      break;
	case 189:
      output_value.textContent = '- _　ほ';
      break;
	case 190:
      output_value.textContent = '. > る';
      break;
	case 191:
      output_value.textContent = '/ ?　め';
      break;
	case 192:
      output_value.textContent = '` @';
      break;
	case 219:
      output_value.textContent = '[ {';
      break;
	case 220:
      output_value.textContent = '| ¥';
      break;
	case 221:
      output_value.textContent = '] }　む';
      break;
	case 222:
      output_value.textContent = ' ～ ^　へ';
      break;
	case 226:
      output_value.textContent = ' \ _ ろ';
      break;
	case 235:
      output_value.textContent = 'Japan Non Conversion ';
      break;
	case 240:
      output_value.textContent = 'Caps Lock';
      break;
    case 242:
      output_value.textContent = 'カタカナ ひらがな';
      break;
    case 243:
      output_value.textContent = '全角 半角';
      break;
    case 244:
      output_value.textContent = 'Kanji Mode';
      break;
    default:
      break;
  }
  
//========== FOR LINUX FIREFOX JAPAN KEYBOARD ==========

  switch (e.key) {

    case 'Alphanumeric':
      output_value.textContent = 'Caps Lock';
      break;
    case '-':
      output_value.textContent = '- _';
      break;
	case 'ZenkakuHankaku':
      output_value.textContent = '全角 半角';
      break;
	case '^':
      output_value.textContent = ' ～ ^　へ';
      break;
	case '¥':
      output_value.textContent = '| ¥';
      break;
	case '@':
      output_value.textContent = '` @';
      break;
	case 'HiraganaKatakana':
      output_value.textContent = 'カタカナ ひらがな';
      break;
    default:
      break;
  }
}
document.addEventListener('keydown', JKey_Press);
