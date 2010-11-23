var lang = [
	  "Torrentfiler||*.torrent||Alla filer (*.*)||*.*||"
	, "OK"
	, "Avbryt"
	, "Verkställ"
	, "Inställningar"
	, "Språk"
	, "Språk:"
	, "Privat"
	, "Kolla automatiskt efter uppdateringar"
	, "Uppdatera även till beta-versioner"
	, "Skicka anonym information vid koll av uppdateringar"
	, "Vid nedladdning"
	, "Lägg till .!ut till ofullständiga filer"
	, "Förallokera alla filer"
	, "Förhindra viloläge om det finns aktiva torrents"
	, "Visa alternativ"
	, "Bekräfta radering av torrents"
	, "Bekräfta radering av tracker"
	, "Visa bekräftelsedialog vid avslut"
	, "Växlande bakgrundsfärg i lista"
	, "Visa laddningshastigheter i titelrad"
	, "Visa hast. gränser i statusraden"
	, "När torrents läggs till"
	, "Starta inte nedladdning automatiskt"
	, "Aktivera programfönster"
	, "Visa fönster som visar filen i torrenten"
	, "Händelse vid dubbelklick"
	, "Uppladdande/klara torrents:"
	, "Nedladdande torrents:"
	, "Placering av nedladdade filer"
	, "Lägg nya nedladdningar i:"
	, "Visa dialog vid lägga till manuellt"
	, "Flytta färdiga nedladdningar till:"
	, "Lägg till torrentens etikett"
	, "Flytta endast från förutbestämd katalog"
	, "Placering av torrents"
	, "Lagra torrent i:"
	, "Flytta färdiga .torrent-filer till:"
	, "Ladda torrents automatiskt från:"
	, "Radera startade torrents"
	, "Lyssningsport"
	, "Port för inkommande anslutningar:"
	, "Slumpa port"
	, "Slumpa port vid varje start"
	, "Aktivera UPnP portmappning"
	, "Aktivera NAT-PMP portmappning"
	, "Proxyserver"
	, "Typ:"
	, "Proxy:"
	, "Port"
	, "Autentisiering"
	, "Användare:"
	, "Lösenord:"
	, "Bestäm värddatornamn genom proxy"
	, "Använda proxyserver för peer-to-peer anslutningar"
	, "Lägg till undantag i Windows brandvägg"
	, "Proxy integritet"
	, "Inaktivera alla lokala DNS-uppslagningar"
	, "Inaktivera funktioner som läcker privat information"
	, "Inaktivera anslutningar som inte stödjs av proxy"
	, "Global uppl. begränsning"
	, "Max uppladdning (kB/s): [0: obegränsat]"
	, "Automatisk"
	, "Annan uppladdningshast. när inga nedladdningar sker (kB/s):"
	, "Global begränsning av nedladdningshast."
	, "Max. nedl.hast. (kB/s): [0: obegränsat]"
	, "Antal anslutningar"
	, "Globalt max antal anslutningar:"
	, "Max. antal anslutna klienter/torrent:"
	, "Antal uppl.slottar/torrent:"
	, "Öka antalet uppl.slottar om uppl.hastighet < 90 %"
	, "Global Rate Limit Options"
	, "Tillämpa hastighetsbegränsning på overheadtrafik"
	, "Tillämpa hastighetsbegränsning på uTP-anslutningar"
	, "Grundläggande bittorrent-inställningar"
	, "Aktivera DHT-nätverk"
	, "Fråga trackern efter skrap-info"
	, "Aktivera DHT för ny torrents"
	, "Aktivera klientutbyte"
	, "Aktivera upptäckt av lokala klienter"
	, "Begränsa bandbredd till lokal klient"
	, "IP/värdnamn att rapportera till trackern:"
	, "Protokollskryptering"
	, "Utgående:"
	, "Tillåt äldre inkommande anslutningar"
	, "Aktivera bandbreddshantering [uTP]"
	, "Aktivera stöd för UDP-tracker"
	, "Aktiv. datamängdstak"
	, "Inställningar för datamängdstak"
	, "Begränsningstyp"
	, "Bandbreddsbegränsning:"
	, "Tidsperiod (dagar):"
	, "Datamängdshistorik för vald period"
	, "Uppladdat:"
	, "Nedladdat:"
	, "Upp- och nedladdat:"
	, "Tidsperiod:"
	, "Senaste %d dagarna"
	, "Rensa historik"
	, "Köinställningar"
	, "Max antal aktiva torrents (upp- eller nedladdning):"
	, "Max antal aktiva nedladdningar:"
	, "Uppladdning tills [Standardvärde]"
	, "Minsta kvot(ratio) i (procent %):"
	, "Minsta uppladdningstid (minutes):"
	, "Uppladdning större prioritet än nedladdning"
	, "När µTorrent når uppladdningsmålet"
	, "Begränsa uppladd.hastighet till (kB/s): [0: stop]"
	, "Aktivera schemaläggaren"
	, "Schema"
	, "Schemainställningar"
	, "Begränsad uppl.hastighet kB/s:"
	, "Begränsad nedl.hastighet (kB/s):"
	, "Stäng av DHT vid avslutning"
	, "Aktivera Webgrännsnitt (Web UI)"
	, "Autentisiering"
	, "Användare:"
	, "Lösenord:"
	, "Tillåt gästkonto med följande användarnamn:"
	, "Anslutning"
	, "Alternativ lyssningsport (standard är anslutningsporten):"
	, "Begränsa åtkomsten till följande IP-adresser (dela flera IP med komma-tecken):"
	, "Avancerade inställningar [VARNING: Ändra inget!]"
	, "Värde:"
	, "Sant"
	, "Falskt"
	, "Ställ in"
	, "Popup-hastighetslista [dela på flera värden med ett komma]"
	, "Åsidosätt automatisk popup-hastighetslista"
	, "Ladda upp hastighetslista:"
	, "Ladda ned hastighetslista:"
	, "Bestående etiketter [Dela flera etiketter med |-tecken]"
	, "Sökmotorer [Format: namn|URL]"
	, "Grundinställningar för cache"
	, "Cachen används till att lägga ofta använd data till RAM-minnet för att minska läsning och skrivning till hårddisk. µTorrent klarar att hantera detta automatiskt. Vill du dock ändra på något kan du göra det nedan."
	, "Åsidosätt automatisk cachestorlek. Ställ storlek manuellt till  (MB):"
	, "Minska minnesåtgång när cachen inte används"
	, "Avancerade cache-inställningar"
	, "Starta skriv-cachning till disk"
	, "Skriv orörda block varje 2 minuter"
	, "Skriv färdiga delar omedelbart"
	, "Starta läs-cachning till disk"
	, "Stäng av läs-cachning om uppladdning är långsam"
	, "Avlägsna gamla block från cachen"
	, "Öka cache-storlek automatiskt"
	, "Inaktivera Windows skriv-cachning till disk"
	, "Inaktivera Windows läs-cachning till disk"
	, "Kör program"
	, "Kör detta program när en torrent är klar:"
	, "Kör detta program när en torrent ändrar tillstånd:"
	, "Du kan använda dessa kommandon:\r\n%F - Namnet på nedladdad fil (för torrents med en fil)\r\n%D - Katalog där filerna sparas\r\n%N - Titeln på torrenten\r\n%S - Torrentens tillstånd\r\n%L - Etikett\r\n%T - Tracker\r\n%M - Statusmeddelande sträng (samma som statuskolumn)\r\n%I - hexkodad info-hash\r\n\r\nTillståndet är en kombination av:\r\nstartad = 1, kontrollerar = 2, start-efter-kontroll = 4,\r\nkontrollerad = 8, fel = 16, pausad = 32, auto = 64, laddad = 128"
	, "Torrentegenskaper"
	, "Trackrar (dela rader med tom rad)"
	, "Bandbreddsinställningar"
	, "Max. uppladdning (kB/s): [0: normalt]"
	, "Max. nedladdning (kB/s): [0: normalt]"
	, "Antal uppladdnings-slottar: [0: normalt]"
	, "Ladda upp medan"
	, "Åsidosätt standardinställningar"
	, "Minsta kvot (procent %)"
	, "Minsta uppladdningstid (minuter):"
	, "Andra inställingar"
	, "Inledande uppl."
	, "Starta DHT"
	, "Klientutbyte"
	, "IP"
	, "Port"
	, "Klient"
	, "Flaggor"
	, "%"
	, "Relevans"
	, "Nedl-hastighet"
	, "Uppl-hastighet"
	, "Förfrågan"
	, "Väntar"
	, "Uppladdat"
	, "Nedladdat"
	, "Hash-fel"
	, "Klient nedl."
	, "Max.upp"
	, "Max.ned"
	, "Köad"
	, "Inaktiv"
	, "Klart"
	, "Filnamn"
	, "%"
	, "Prioritet"
	, "Storlek"
	, "ladda inte ner"
	, "låg"
	, "normal"
	, "hög"
	, "Nedladdat:"
	, "Uppladdat:"
	, "Källor:"
	, "Återstående:"
	, "Ned.hastighet:"
	, "Upp.hastighet:"
	, "Klienter:"
	, "Utdelad kvot:"
	, "Hash:"
	, "Transport"
	, "%d av %d anslutna (%d i svärm)"
	, "N:%s U:%s - %s"
	, "Visa kategorilista"
	, "Visa detaljerad info"
	, "Visa statusfält"
	, "Visa verktygsfält"
	, "Återställ"
	, "Obegränsad"
	, "Visa datornamn"
	, "Get File(s)"
	, "Ladda inte ned"
	, "Hög prioritet"
	, "Låg prioritet"
	, "Normal prioritet"
	, "Ta bort data"
	, "Ta bort .torrent"
	, "Ta bort .torrent + data"
	, "Tvinga återkoll"
	, "Tvångsstart"
	, "Etikett"
	, "Paus"
	, "Egenskaper"
	, "Flytta ned i kön"
	, "Flytta upp i kön"
	, "Ta bort"
	, "Ta bort och"
	, "Starta"
	, "Stoppa"
	, "Aktiv"
	, "Totalt"
	, "Slutförd"
	, "Laddar ned"
	, "Inaktiv"
	, "Utan etikett"
	, "||Tillg.||Tillgänglighet"
	, "Klart"
	, "Nedladdat"
	, "Nedl-hastighet"
	, "Tid kvar"
	, "Etikett"
	, "Filnamn"
	, "Nr"
	, "Klienter"
	, "Återstår"
	, "Källor"
	, "Uppladdare/Klienter"
	, "Kvot"
	, "Storlek"
	, "Status"
	, "Uppladdat"
	, "Uppl-hastighet"
	, "Är du säker på att du vill ta bort %d valda torrent och all tillhörande data?"
	, "Är du säker på att du vill ta bort vald torrent och all tillhörande data?"
	, "Är du säker på att du vill ta bort %d valda torrent?"
	, "Är du säker på att du vill ta bort vald torrent?"
	, "Kontrollerat %:.1d%%"
	, "Laddar ned"
	, "Fel: %s"
	, "Färdig"
	, "Pausad"
	, "Köad"
	, "Köad uppladdning"
	, "Laddar upp"
	, "Stoppad"
	, "Ange etikett"
	, "Ange ny etikett för valda torrentar:"
	, "Ny etikett..."
	, "Ta bort etikett"
	, "Allmänt||Trackers||Källor||Delar||Filer||Hastighet||Logg||"
	, "Lägg till torrent"
	, "Lägg till torrent från URL"
	, "Paus"
	, "Inställningar"
	, "Flytta ned i kön"
	, "Flytta upp i kön"
	, "Ta bort"
	, "Starta"
	, "Stoppa"
	, "D: %s%z/s"
	, " L: %z/s"
	, " O: %z/s"
	, " T: %Z"
	, "U: %s%z/s"
	, "B"
	, "EB"
	, "GB"
	, "kB"
	, "MB"
	, "PB"
	, "TB"
	, "Avancerat"
	, "Bandbredd"
	, "Anslutning"
	, "Diskcache"
	, "Kataloger"
	, "Allmänt"
	, "Schemaläggare"
	, "Köinställningar"
	, "UI extra"
	, "UI-inställningar"
	, "BitTorrent"
	, "Webbgränsnitt"
	, "Datamängdstak"
	, "Kör program"
	, "Visa inställningar||Starta/Stoppa||Öppna mapp||Visa nedladdningspopup||"
	, "Avaktiverat||Aktiverat||Tvingad||"
	, "(ingen)||Socks4||Socks5||HTTPS||HTTP||"
	, "Uppladdningar||Nedladdningar||Upp- och nedladdat||"
	, "MB||GB||"
	, "1||2||5||7||10||14||15||20||21||28||30||31||"
	, "Filnamn"
	, "Värde"
	, "Mån||Tis||Ons||Tor||Fre||Lör||Sön||"
	, "Måndag||Tisdag||Onsdag||Torsdag||Fredag||Lördag||Söndag||"
	, "Full hast."
	, "Full hastighet - Använd normal generell bandbreddbegränsning"
	, "Begränsad"
	, "Begränsat - Använder schemaläggarens bandbreddsbegränsning"
	, "Bara uppladdning"
	, "Bara uppladdning - Bara uppl. av data (inkl. icke kompletta)"
	, "Stäng av"
	, "Stäng av - stoppa alla torrents som inte är tvingade"
	, "<= %d timmar"
	, "(Ignorera)"
	, "<= %d minuter"
	, "%dd %dh"
	, "%dh %dm"
	, "%dm %ds"
	, "%ds"
	, "%dw %dd"
	, "%dy %dw"
];