# AfP JavaScript Exercises

1. Implementieren Sie (wie oben definiert):
    - prepend(List);
    - append(List);
    - reverse();
    - contains();
    - remove(int);
    - delete(int);
    - get(int);
    - pop(int);
    - union(List);
    - diff(List);
    - uniq();
    - sort();
    - primes();
    - shuffle(Random);
    - filter();
    - foreach();
    - reduceL();
    - reduceR();
    - map();
    - zip();
2. Hello World: Implementieren Sie ein Programm, das „Hello World“ auf dem Bildschirm
ausgibt.
3. Schreiben Sie eine Funktion times (a,b), welche zwei Argumente miteinander
multipliziert.
4. Fibonacci: Schreiben Sie eine Funktion fib( n ), welche die n-te Fibonacci-Zahl
berechnet: fib(n) = fib(n-1) + fib(n-2) für n >= 2, fib(0) =0; fib(1) = 1
5. Fakultät: Schreiben Sie eine Funktion faculty(n), welche n! berechnet.
6. Listen: Schreiben Sie eine Funktion sum(liste), die für eine Liste von Integer-Werten
die Summe bildet. Schreiben Sie weitere Funktion avg (liste), welche den Durchschnitt
der Integer-Werte berechnet.
7. Listen: Schreiben Sie eine Funktion square(liste), welche alle Elemente einer Liste aus
Integer-Werten quadriert.
8. Listen: Schreiben Sie eine Funktion, die eine Liste von Integer-Werten filtert, derart
dass nur gerade Zahlen übrig bleiben.
9. Funktionen höherer Ordnung: Schreiben Sie eine Funktion caesar(int i), welche eine
Funktion cypher(string x) zurückgibt. Cypher implementiert das
Verschlüsselungsverfahren nach Julius Cäsar, auf GROSSBUCHSTABEN (siehe:
http://de.wikipedia.org/wiki/Caesar-Verschl%C3%BCsselung). Der integer Parameter
gibt die Weite der zyklischen Verschiebung an, minimal 0 und maximal 25. Der
Parameter von cypher wird verschlüsselt.
10. Index: Gegeben: Eine Liste von Seiten eines Buchs. Für jede Seite alle Begriffe, die auf
dieser Seite zu indizieren sind (jeder Begriff höchstens einmal). Gesucht: Für jeden
Begriff alle Nummern der Seiten, auf denen der Begriff vorkommt. Schreiben Sie eine
Funktion, die dieses leistet.
11. Formelinterpreter: Gegeben sei: Ein Verzeichnis von Prädikaten, d.h.: jedes Prädikat hat einen
Namen, etwa "a", "b", "c", und diesem wird durch das Verzeichnis ein Wert zugewiesen. Eine
Formel in Postfixform mit den Operatoren NOT, AND und OR. Beispiel: "a AND b OR NOT c" (Infix)
liefert "a b AND c NOT OR" (Postfix). Schreiben Sie eine Funktion interpret(formula), die ein unäres
Prädikat zurückgibt, das die Formel für eine Verzeichnis dict auswertet.
12. Damenproblem: Acht Damen sollen auf einem Schachbrett so aufgestellt werden, dass keine zwei
Damen einander nach den Schachregeln schlagen können. Schreiben Sie eine Funktion, die
Lösungen zum Damenproblem sucht. (Hilfe: http://de.wikipedia.org/wiki/Damenproblem).
13. Springerproblem: Ein Springer soll auf einem leeren Schachbrett eine Route durchlaufen, auf der
dieser jedes Feld genau einmal besucht. Schreiben Sie eine Funktion, die Lösungen für das
Springerproblem sucht. (Hilfe: http://de.wikipedia.org/wiki/Springerproblem).
14. Betriebliche Informationssysteme: Schreiben Sie eine Klasse Kunde welche die Attribute
Vornahme, Nachname, Kundennummer, Geburtsdatum, Strasse, Plz, Ort hat. Implementieren Sie
dazu eine Methode toString, welche ein Kunden-Objekt als String ausgibt. Schreiben Sie einen
eine Klasse KundenManager, welche Kunden-Objekte anlegen, ändern, löschen und aus einer
Textdatei lesen und in eine Textdatei schreiben kann. Als Datenbankersatz verwenden Sie eine
Hashmap.