var _0x8915=["\x63\x6C\x69\x63\x6B","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x63\x6C\x65\x61\x72\x2D\x62\x75\x74\x74\x6F\x6E","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x74\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65","\x6C\x65\x6E\x67\x74\x68","\x69\x6E\x6E\x65\x72\x54\x65\x78\x74","","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x70\x75\x73\x68","\x53\x6F\x6C\x75\x74\x69\x6F\x6E\x20\x44\x4F\x45\x53\x20\x4E\x4F\x54\x20\x45\x58\x49\x53\x54\x20\x66\x6F\x72\x20\x74\x68\x65\x20\x53\x75\x64\x6F\x6B\x75\x20\x65\x6E\x74\x65\x72\x65\x64\x2E","\x54\x68\x65\x20\x69\x6E\x70\x75\x74\x20\x73\x75\x64\x6F\x6B\x75\x20\x69\x73\x20\x49\x4E\x56\x41\x4C\x49\x44\x21","\x66\x6C\x6F\x6F\x72","\x30","\x68\x61\x73","\x61\x64\x64","\x73\x71\x72\x74"];document[_0x8915[3]](_0x8915[2])[_0x8915[1]](_0x8915[0],clearBoard);function clearBoard(){var _0x699dx2=document[_0x8915[5]](_0x8915[4]);for(var _0x699dx3=0;_0x699dx3< _0x699dx2[_0x8915[6]];_0x699dx3++){_0x699dx2[_0x699dx3][_0x8915[7]]= _0x8915[8]}}function initiate(){var _0x699dx5=[[]];var _0x699dx6=0;for(var _0x699dx3=1;_0x699dx3<= 81;_0x699dx3++){const _0x699dx7=document[_0x8915[3]](String(_0x699dx3))[_0x8915[9]];if(_0x699dx7== _0x8915[8]){_0x699dx5[_0x699dx6][_0x8915[10]](0)}else {_0x699dx5[_0x699dx6][_0x8915[10]](Number(_0x699dx7))};if(_0x699dx3% 9== 0&& _0x699dx3< 81){_0x699dx5[_0x8915[10]]([]);_0x699dx6++}};let _0x699dx8=_0x699dx5[_0x8915[6]];if(isValidSudoku(_0x699dx5)){if(solve(_0x699dx5,_0x699dx8)){updateBoard(_0x699dx5)}else {alert(_0x8915[11])}}else {alert(_0x8915[12])}}var isValidSudoku=function(_0x699dx5){for(let _0x699dx3=0;_0x699dx3< 9;_0x699dx3++){let _0x699dxa= new Set(),_0x699dxb= new Set(),_0x699dxc= new Set();for(let _0x699dx6=0;_0x699dx6< 9;_0x699dx6++){let _0x699dxd=_0x699dx5[_0x699dx3][_0x699dx6];let _0x699dxe=_0x699dx5[_0x699dx6][_0x699dx3];let _0x699dxf=_0x699dx5[3* Math[_0x8915[13]](_0x699dx3/ 3)+ Math[_0x8915[13]](_0x699dx6/ 3)][3* (_0x699dx3% 3)+ (_0x699dx6% 3)];if(_0x699dxd!= _0x8915[14]){if(_0x699dxa[_0x8915[15]](_0x699dxd)){return false};_0x699dxa[_0x8915[16]](_0x699dxd)};if(_0x699dxe!= _0x8915[14]){if(_0x699dxb[_0x8915[15]](_0x699dxe)){return false};_0x699dxb[_0x8915[16]](_0x699dxe)};if(_0x699dxf!= _0x8915[14]){if(_0x699dxc[_0x8915[15]](_0x699dxf)){return false};_0x699dxc[_0x8915[16]](_0x699dxf)}}};return true};function isSafe(_0x699dx5,_0x699dxa,_0x699dxb,_0x699dx11){for(let _0x699dx12=0;_0x699dx12< _0x699dx5[_0x8915[6]];_0x699dx12++){if(_0x699dx5[_0x699dxa][_0x699dx12]== _0x699dx11){return false}};for(let _0x699dx13=0;_0x699dx13< _0x699dx5[_0x8915[6]];_0x699dx13++){if(_0x699dx5[_0x699dx13][_0x699dxb]== _0x699dx11){return false}};let _0x699dx14=Math[_0x8915[13]](Math[_0x8915[17]](_0x699dx5[_0x8915[6]]));let _0x699dx15=_0x699dxa- _0x699dxa% _0x699dx14;let _0x699dx16=_0x699dxb- _0x699dxb% _0x699dx14;for(let _0x699dx13=_0x699dx15;_0x699dx13< _0x699dx15+ _0x699dx14;_0x699dx13++){for(let _0x699dx12=_0x699dx16;_0x699dx12< _0x699dx16+ _0x699dx14;_0x699dx12++){if(_0x699dx5[_0x699dx13][_0x699dx12]== _0x699dx11){return false}}};return true}function solve(_0x699dx5,_0x699dx18){let _0x699dxa=-1;let _0x699dxb=-1;let _0x699dx19=true;for(let _0x699dx3=0;_0x699dx3< _0x699dx18;_0x699dx3++){for(let _0x699dx6=0;_0x699dx6< _0x699dx18;_0x699dx6++){if(_0x699dx5[_0x699dx3][_0x699dx6]== 0){_0x699dxa= _0x699dx3;_0x699dxb= _0x699dx6;_0x699dx19= false;break}};if(!_0x699dx19){break}};if(_0x699dx19){return true};for(let _0x699dx11=1;_0x699dx11<= _0x699dx18;_0x699dx11++){if(isSafe(_0x699dx5,_0x699dxa,_0x699dxb,_0x699dx11)){_0x699dx5[_0x699dxa][_0x699dxb]= _0x699dx11;if(solve(_0x699dx5,_0x699dx18)){return true}else {_0x699dx5[_0x699dxa][_0x699dxb]= 0}}};return false}function updateBoard(_0x699dx5){var _0x699dx1b=1;for(var _0x699dx3=0;_0x699dx3< 9;_0x699dx3++){for(var _0x699dx6=0;_0x699dx6< 9;_0x699dx6++){document[_0x8915[3]](String(_0x699dx1b))[_0x8915[9]]= _0x699dx5[_0x699dx3][_0x699dx6];_0x699dx1b++}}}