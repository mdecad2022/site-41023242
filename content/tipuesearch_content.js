var tipuesearch = {"pages": [{'title': 'About', 'text': '41023242 \n github倉儲網址:https://github.com/mdecad2022/site-41023242 \n', 'tags': '', 'url': 'About.html'}, {'title': 'w5', 'text': '\n (登入 stud.cycu.org)利用 @nfu 電子郵箱收到的帳號與密碼, 登入 stud.cycu.org:\xa0 在命令列視窗, 以 ssh\xa0 cad學號@stud.cycu.org , 輸入對應密後, 可以登入系統 \xa0 \n 請到 excel 檔案\xa0 查詢 \xa0stud.cycu.org 中與帳號對應的近端 (給 127.0.0.1 使用) 與遠端 (給 stud.cycu.org) 埠號 \xa0 \n (透過 sftp 建立近端目錄與 stud.cycu.org 帳號下的對應)\xa0 開啟另一個命令列, 執行 sftp\xa0 帳號@stud.cycu.org \xa0\xa0\xa0 輸入對應密碼, 即可建立近端目錄與遠端系統目錄間的對應. \xa0 \n 與在近端(Windows)利用\xa0 SSH 建立 public/private keys 流程相同, 必須在 Linux (Ubuntu) 利用 ssh-keygen 建立 keys. 所產生的 id_rsa 為 private key, 而 id_rsa.pub 為 public key, 都位於 .ssh 目錄下. \xa0 \n 利用 sftp\xa0 進入 stud.cycu.org 後, cd 到 .ssh, 以 get id_rsa.pub 將 public key 取至\xa0 Windows 後, 送到 Github -> Settings -> SSH and GPG 設定區, 透過 new key 登錄公鑰. \xa0 \n 接下來要下載\xa0\xa0 config \xa0設定檔案,\xa0 以 sftp 放入 stud.cycu.org 主機的 .ssh 目錄中. \xa0 \n 上面的\xa0 config\xa0 主要設定 SSH 協定對\xa0 github.com\xa0 連線時的代理主機, 但取下\xa0 cmsimde\xa0 子模組使用的是\xa0 https,\xa0 因此執行下列\xa0 git clone 時將會同時用到\xa0\xa0 SSH\xa0 與 https\xa0 協定,\xa0 因此除了\xa0 .ssh\xa0 目錄下要有\xa0 config\xa0 設定檔案外, 也必須同時在\xa0 .gitconfig\xa0 檔案中設定\xa0 http.proxy,\xa0 也就是以 git config --global http.proxy\xa0 http://p42.cycu.org:3128 \xa0 設定供 https 連線使用的代理主機, 並且以\xa0 git config --global\xa0 user.name 以及\xa0 git config --global\xa0 user.email 設定提交用的身分註記. \xa0 \n 在 stud.cycu.org 中, 以 git clone --recurse-submodules\xa0\xa0 git@github.com:mdecad2022/site-個人github帳號.git \xa0\xa0 取下個人倉儲. \xa0 \n 假如先前使用\xa0 git clone 並沒有取下\xa0 cmsimde 子模組內容, 只要在設定 https 代理主機後, 進入倉儲根目錄執行\xa0 git submodule update --init\xa0 --recursive\xa0 即可取下子模組內容. \xa0 \n 接著下載\xa0 server.py , 在 Windows 編輯\xa0 server.py , 將個人分配到的 9xxxx 埠號填入後存檔, 以 sftp 放入上列取下的倉儲根目錄. \xa0 \n 在 stud.cycu.org 系統中, 進入倉儲 (site-github帳號) 後, 執行 python3 server.py, 就可啟用動態網站. \xa0 \n 設定完成後, 各學員將會有一個廣域網路上的動態網站 (取代 Replit 上的動態網站),\xa0 https://stud.cycu.org:8xxxx \xa0\xa0 看到個人的動態網站. \xa0 \n 動態網站改版後, 轉為靜態, 必須透過 source\xa0 acp \xa0以 SSH 將改版內容送回 github. (必須利用 chmod u+x acp 將 acp\xa0 檔案屬性改為對\xa0 user 可以 execute (也就是 x 屬性). \xa0 \n 執行 source acp\xa0 "提交字串" 之前必須要 git config\xa0 --global user.name,\xa0 git config\xa0 --global user.email,\xa0 git config\xa0 --global http.proxy \xa0 \n 上述採用指令模式對\xa0 server sftp 也可以利用\xa0\xa0 Filezilla portable , 以圖形介面完成. 而 ssh 也可以透過\xa0 putty.exe 執行遠端登入. \xa0 \n \n \xa0 \n \xa0 \n config under .ssh 目錄: \xa0 \n Host 就是 .ssh/config 設定的對應 session 名稱, 此處若 Host 設為 demo, 則 SSH 對應的 .git/config 中的 URL 就必須使用 \xa0 git@demo:mdecad2022/site-scrum-1.git, \xa0 demo 就是 Host, Port 則是隨後的 %p 也就 SSH 協定內定的 port 22, %h 則是 Hostname, 也就是 github.com \xa0 \n \n \n \n \n 1 \xa0 \n 2 \xa0 \n 3 \xa0 \n 4 \xa0 \n \n \n Host demo \xa0 \n User git \xa0 \n Hostname github.com \xa0 \n ProxyCommand /usr/bin/ncat --proxy p42.cycu.org:3128 --proxy-type http %h %p \xa0 \n \n \n \n \n \xa0 \n --------------------------------------- \xa0 \n 2a 在一台遠端 server, 執行個人倉儲的動態網頁. \xa0 \n \xa0 \n \n Login to \xa0 https://mail.nfu.edu.tw \xa0 -\xa0 查看登入 stud.cycu.org 伺服器的帳號密碼, 帳號為 cad+學號, 密碼為四個字元, 包括數字與小寫英文字母 \xa0 \n 請到 excel 檔案 \xa0 查詢 \xa0 stud.cycu.org 中與帳號對應的近端 (給 127.0.0.1 使用, 9 開頭的 port) 與遠端 (給 stud.cycu.org, 8 開頭的 port) 埠號 \xa0 \n 修改可攜 Python 3.10.6 start.bat, 蓋掉第三行後重新啟動, 目的希望將操作系統的命令搜尋路徑放在可攜目錄搜尋路徑之後. \xa0 \n 重新啟動可攜程式環境, 在其中一個命令列, ssh\xa0 \xa0 cad+學號@stud.cycu.org , 表示要使用 secure shell 遠端登入到 stud.cycu.org, 這是一台 Linux 主機, 安裝 Ubuntu 22.04 Server.(若使用的網路連線協定並無 IPv6,\xa0 可將系統的 proxy 設為 140.130.17.4:3128 kmolab/kmolab) \xa0 \n 在 ssh 登入畫面, 以 ssh-keygen 建立 key pairs, .ssh/id_rsa 為 private key, id_rsa.pub 為 public key \xa0 \n 設法利用 Filezilla, 以 sftp 安全的(Secure)檔案(File)傳輸(Transmission)協定(Protocol), 與 stud.cycu.org 伺服器連結. \xa0 \n 利用\xa0 Filezilla sftp 取下 id_rsa.pub, 登錄至 Github 帳號下的 Setting - >\xa0 SSH and GPG keys. \xa0 \n 對\xa0 server sftp 也可以利用\xa0 \xa0 Filezilla portable , 以圖形介面完成. 而 ssh 也可以透過\xa0 putty.exe 執行遠端登入. \xa0 \n 接下來要下載\xa0 \xa0 config \xa0 設定檔案,\xa0 以 sftp 放入 stud.cycu.org 主機的 .ssh 目錄中. \xa0 \n 接下來要在\xa0 Ubuntu (也就是 stud.cycu.org 這台主機所安裝的操作系統) 中, 設定 .gitconfig, 總共包含三項設定: git config --global user.name "scrum-1", git config --global user.email\xa0 "scrum1@mde.tw"\xa0\xa0 以及 git config --global http.proxy http://p42.cycu.org:3128, 這三個設定必須在 ssh 登入畫面中執行, 設定完成檔案會存入帳號根目錄中的 .gitconfig \xa0 \n 利用\xa0 git clone --recurse-submodules\xa0 \xa0 git@demo:mdecad2022/site-scrum-1.git \xa0 demo \xa0 \n 接著下載 \xa0 server.py , 在 Windows 編輯 \xa0 server.py , 將個人分配到的 9xxxx 埠號填入後存檔, 以 sftp 放入上列取下的倉儲根目錄. \xa0 \n 登入\xa0 Ubuntu 後, 會使用的指令: pwd 代表 print working directory, clear -\xa0 清除螢幕, cd - 更換目錄, ls -l 列出目錄詳細內容, chmod u+x \xa0 acp \xa0 表示讓 user 可以 execute acp script (能夠讓使用者以 source acp 加上提交字串進行 git add, git commit, git push, 如何在 Windows 執行 acp.bat 加上提交字串. \xa0 \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '', 'tags': '', 'url': 'w6.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'w10', 'text': '這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕. \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  editor1 結束  \n 查驗輸入字串程式: \n 查驗輸入字串 \n  判斷輸入字串是否aA1$, 且至少 8 個字元-開始  \n \n \n  判斷輸入字串是否aA1$, 且至少 8 個字元-結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  editor2 結束  \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11', 'text': '這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕. \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  editor1 結束  \n 查驗輸入字串程式: \n 查驗輸入字串 \n  判斷輸入字串是否aA1$, 且至少 8 個字元-開始  \n \n \n  判斷輸入字串是否aA1$, 且至少 8 個字元-結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  editor2 結束  \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': 'w11.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}]};