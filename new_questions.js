// ─── PSEUDOKODFRÅGOR ───
      const PSEUDOCODE_QUESTIONS = [
// ═══ KAPITEL 1: Algoritmgrunder ═══
        {
          chapter: 1,
          chapter_name: "Algoritmgrunder (Algorithm Basics)",
          question_num: 105,
          difficulty: "Lätt",
          question: "Vad returnerar följande pseudokod?\n\nFunction mystery(n):\n    result = 0\n    For i = 1 to n:\n        result = result + 1\n    Return result\n\nAnrop: mystery(5)",
          options: [
            { letter: "A", text: "0" },
            { letter: "B", text: "5" },
            { letter: "C", text: "10" },
            { letter: "D", text: "15" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 1,
          chapter_name: "Algoritmgrunder (Algorithm Basics)",
          question_num: 106,
          difficulty: "Lätt",
          question: "Vad är tidskomplexiteten (Big O) för följande pseudokod?\n\nFor i = 1 to n:\n    Print i",
          options: [
            { letter: "A", text: "O(1)" },
            { letter: "B", text: "O(n)" },
            { letter: "C", text: "O(n²)" },
            { letter: "D", text: "O(log n)" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 1,
          chapter_name: "Algoritmgrunder (Algorithm Basics)",
          question_num: 107,
          difficulty: "Medel",
          question: "Vad är tidskomplexiteten (Big O) för följande pseudokod?\n\nFor i = 1 to n:\n    For j = 1 to n:\n        Print i + j",
          options: [
            { letter: "A", text: "O(n)" },
            { letter: "B", text: "O(n²)" },
            { letter: "C", text: "O(n log n)" },
            { letter: "D", text: "O(2n)" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 1,
          chapter_name: "Algoritmgrunder (Algorithm Basics)",
          question_num: 108,
          difficulty: "Medel",
          question: "Vad returnerar följande pseudokod?\n\nFunction calc(n):\n    sum = 0\n    For i = 1 to n:\n        sum = sum + i\n    Return sum\n\nAnrop: calc(4)",
          options: [
            { letter: "A", text: "4" },
            { letter: "B", text: "10" },
            { letter: "C", text: "8" },
            { letter: "D", text: "6" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 1,
          chapter_name: "Algoritmgrunder (Algorithm Basics)",
          question_num: 109,
          difficulty: "Medel",
          question: "Vad är tidskomplexiteten (Big O) för följande pseudokod?\n\nFor i = 1 to n:\n    Print i\nFor j = 1 to n:\n    Print j",
          options: [
            { letter: "A", text: "O(n²)" },
            { letter: "B", text: "O(n)" },
            { letter: "C", text: "O(2n)" },
            { letter: "D", text: "O(n log n)" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 1,
          chapter_name: "Algoritmgrunder (Algorithm Basics)",
          question_num: 110,
          difficulty: "Medel",
          question: "Vad returnerar följande pseudokod?\n\nFunction mystery(a, b):\n    If b == 0:\n        Return a\n    Return a + mystery(a, b - 1)\n\nAnrop: mystery(3, 3)",
          options: [
            { letter: "A", text: "6" },
            { letter: "B", text: "9" },
            { letter: "C", text: "12" },
            { letter: "D", text: "3" }
          ],
          correct_answer: "C",
          is_multi: false,
        },
        {
          chapter: 1,
          chapter_name: "Algoritmgrunder (Algorithm Basics)",
          question_num: 111,
          difficulty: "Svår",
          question: "Vad är tidskomplexiteten (Big O) för följande pseudokod?\n\nFor i = 1 to n:\n    For j = 1 to i:\n        Print j",
          options: [
            { letter: "A", text: "O(n)" },
            { letter: "B", text: "O(n log n)" },
            { letter: "C", text: "O(n²)" },
            { letter: "D", text: "O(n³)" }
          ],
          correct_answer: "C",
          is_multi: false,
        },
        {
          chapter: 1,
          chapter_name: "Algoritmgrunder (Algorithm Basics)",
          question_num: 112,
          difficulty: "Svår",
          question: "Vad returnerar följande pseudokod?\n\nFunction f(n):\n    If n <= 1:\n        Return 1\n    Return n * f(n - 1)\n\nAnrop: f(5)",
          options: [
            { letter: "A", text: "15" },
            { letter: "B", text: "120" },
            { letter: "C", text: "25" },
            { letter: "D", text: "60" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 1,
          chapter_name: "Algoritmgrunder (Algorithm Basics)",
          question_num: 113,
          difficulty: "Lätt",
          question: "Vad returnerar följande pseudokod?\n\nFunction check(x):\n    If x > 10:\n        Return \"stort\"\n    Else:\n        Return \"litet\"\n\nAnrop: check(7)",
          options: [
            { letter: "A", text: "\"stort\"" },
            { letter: "B", text: "\"litet\"" },
            { letter: "C", text: "7" },
            { letter: "D", text: "null" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 1,
          chapter_name: "Algoritmgrunder (Algorithm Basics)",
          question_num: 114,
          difficulty: "Medel",
          question: "Hur många gånger skrivs \"Hej\" ut?\n\nFor i = 1 to 3:\n    For j = 1 to 2:\n        Print \"Hej\"",
          options: [
            { letter: "A", text: "3" },
            { letter: "B", text: "5" },
            { letter: "C", text: "6" },
            { letter: "D", text: "9" }
          ],
          correct_answer: "C",
          is_multi: false,
        },
// ═══ KAPITEL 2: Numeriska Algoritmer ═══
        {
          chapter: 2,
          chapter_name: "Numeriska Algoritmer (Numerical Algorithms)",
          question_num: 104,
          difficulty: "Lätt",
          question: "Vad returnerar följande pseudokod?\n\nFunction mod(a, b):\n    Return a - b * (a / b)  // heltalsdivision\n\nAnrop: mod(17, 5)",
          options: [
            { letter: "A", text: "3" },
            { letter: "B", text: "2" },
            { letter: "C", text: "5" },
            { letter: "D", text: "12" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 2,
          chapter_name: "Numeriska Algoritmer (Numerical Algorithms)",
          question_num: 105,
          difficulty: "Medel",
          question: "Vad returnerar följande pseudokod (Euklides algoritm)?\n\nFunction gcd(a, b):\n    While b != 0:\n        temp = b\n        b = a mod b\n        a = temp\n    Return a\n\nAnrop: gcd(12, 8)",
          options: [
            { letter: "A", text: "2" },
            { letter: "B", text: "4" },
            { letter: "C", text: "8" },
            { letter: "D", text: "12" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 2,
          chapter_name: "Numeriska Algoritmer (Numerical Algorithms)",
          question_num: 106,
          difficulty: "Medel",
          question: "Vad returnerar följande pseudokod?\n\nFunction isPrime(n):\n    If n < 2: Return false\n    For i = 2 to sqrt(n):\n        If n mod i == 0:\n            Return false\n    Return true\n\nAnrop: isPrime(9)",
          options: [
            { letter: "A", text: "true" },
            { letter: "B", text: "false" },
            { letter: "C", text: "9" },
            { letter: "D", text: "3" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 2,
          chapter_name: "Numeriska Algoritmer (Numerical Algorithms)",
          question_num: 107,
          difficulty: "Medel",
          question: "Vad returnerar gcd(48, 18) med Euklides algoritm?\n\nFunction gcd(a, b):\n    While b != 0:\n        temp = b\n        b = a mod b\n        a = temp\n    Return a",
          options: [
            { letter: "A", text: "2" },
            { letter: "B", text: "6" },
            { letter: "C", text: "3" },
            { letter: "D", text: "18" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 2,
          chapter_name: "Numeriska Algoritmer (Numerical Algorithms)",
          question_num: 108,
          difficulty: "Svår",
          question: "Följande pseudokod implementerar Eratosthenes såll. Vilka värden i arrayen is_prime är true efter att koden körts med n=10?\n\nFunction sieve(n):\n    is_prime = array[0..n] filled with true\n    is_prime[0] = false\n    is_prime[1] = false\n    For i = 2 to sqrt(n):\n        If is_prime[i]:\n            For j = i*i to n step i:\n                is_prime[j] = false\n    Return is_prime",
          options: [
            { letter: "A", text: "2, 3, 5, 7" },
            { letter: "B", text: "2, 3, 5, 7, 9" },
            { letter: "C", text: "1, 2, 3, 5, 7" },
            { letter: "D", text: "2, 4, 6, 8, 10" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 2,
          chapter_name: "Numeriska Algoritmer (Numerical Algorithms)",
          question_num: 109,
          difficulty: "Lätt",
          question: "Vad är 23 mod 7?",
          options: [
            { letter: "A", text: "3" },
            { letter: "B", text: "2" },
            { letter: "C", text: "1" },
            { letter: "D", text: "4" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 2,
          chapter_name: "Numeriska Algoritmer (Numerical Algorithms)",
          question_num: 110,
          difficulty: "Svår",
          question: "Vad returnerar följande pseudokod (exponentiation by squaring)?\n\nFunction power(base, exp):\n    result = 1\n    While exp > 0:\n        If exp mod 2 == 1:\n            result = result * base\n        base = base * base\n        exp = exp / 2  // heltalsdivision\n    Return result\n\nAnrop: power(2, 5)",
          options: [
            { letter: "A", text: "10" },
            { letter: "B", text: "32" },
            { letter: "C", text: "16" },
            { letter: "D", text: "64" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 2,
          chapter_name: "Numeriska Algoritmer (Numerical Algorithms)",
          question_num: 111,
          difficulty: "Medel",
          question: "Hur många iterationer gör Euklides algoritm för gcd(21, 14)?\n\nFunction gcd(a, b):\n    While b != 0:\n        temp = b\n        b = a mod b\n        a = temp\n    Return a",
          options: [
            { letter: "A", text: "1" },
            { letter: "B", text: "2" },
            { letter: "C", text: "3" },
            { letter: "D", text: "4" }
          ],
          correct_answer: "C",
          is_multi: false,
        },
        {
          chapter: 2,
          chapter_name: "Numeriska Algoritmer (Numerical Algorithms)",
          question_num: 112,
          difficulty: "Lätt",
          question: "Vad returnerar följande pseudokod?\n\nFunction countDivisors(n):\n    count = 0\n    For i = 1 to n:\n        If n mod i == 0:\n            count = count + 1\n    Return count\n\nAnrop: countDivisors(6)",
          options: [
            { letter: "A", text: "2" },
            { letter: "B", text: "4" },
            { letter: "C", text: "3" },
            { letter: "D", text: "6" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 2,
          chapter_name: "Numeriska Algoritmer (Numerical Algorithms)",
          question_num: 113,
          difficulty: "Medel",
          question: "Vad returnerar isPrime(11)?\n\nFunction isPrime(n):\n    If n < 2: Return false\n    For i = 2 to sqrt(n):\n        If n mod i == 0:\n            Return false\n    Return true",
          options: [
            { letter: "A", text: "false" },
            { letter: "B", text: "true" },
            { letter: "C", text: "11" },
            { letter: "D", text: "1" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
// ═══ KAPITEL 3: Länkade Listor ═══
        {
          chapter: 3,
          chapter_name: "Länkade Listor (Linked Lists)",
          question_num: 104,
          difficulty: "Lätt",
          question: "Givet listan 5 -> 10 -> 15 -> null. Vad är head.next.data?",
          options: [
            { letter: "A", text: "5" },
            { letter: "B", text: "10" },
            { letter: "C", text: "15" },
            { letter: "D", text: "null" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 3,
          chapter_name: "Länkade Listor (Linked Lists)",
          question_num: 105,
          difficulty: "Medel",
          question: "Vad blir listan efter följande pseudokod?\n\nLista: 1 -> 2 -> 3 -> null\nnewNode.data = 0\nnewNode.next = head\nhead = newNode",
          options: [
            { letter: "A", text: "1 -> 2 -> 3 -> 0 -> null" },
            { letter: "B", text: "0 -> 1 -> 2 -> 3 -> null" },
            { letter: "C", text: "1 -> 0 -> 2 -> 3 -> null" },
            { letter: "D", text: "0 -> null" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 3,
          chapter_name: "Länkade Listor (Linked Lists)",
          question_num: 106,
          difficulty: "Medel",
          question: "Vad skrivs ut av följande pseudokod?\n\nLista: A -> B -> C -> D -> null\ncurr = head\nWhile curr != null:\n    Print curr.data\n    curr = curr.next",
          options: [
            { letter: "A", text: "A" },
            { letter: "B", text: "A B C D" },
            { letter: "C", text: "D C B A" },
            { letter: "D", text: "A B C" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 3,
          chapter_name: "Länkade Listor (Linked Lists)",
          question_num: 107,
          difficulty: "Medel",
          question: "Vad blir listan efter följande pseudokod?\n\nLista: 10 -> 20 -> 30 -> null\nhead = head.next",
          options: [
            { letter: "A", text: "10 -> 20 -> 30 -> null" },
            { letter: "B", text: "20 -> 30 -> null" },
            { letter: "C", text: "10 -> 30 -> null" },
            { letter: "D", text: "30 -> null" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 3,
          chapter_name: "Länkade Listor (Linked Lists)",
          question_num: 108,
          difficulty: "Medel",
          question: "Vad blir listan efter följande pseudokod?\n\nLista: A -> B -> C -> null\ncurr = head\ncurr = curr.next\nprev = head\nprev.next = curr.next",
          options: [
            { letter: "A", text: "A -> C -> null" },
            { letter: "B", text: "A -> B -> null" },
            { letter: "C", text: "B -> C -> null" },
            { letter: "D", text: "A -> null" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 3,
          chapter_name: "Länkade Listor (Linked Lists)",
          question_num: 109,
          difficulty: "Svår",
          question: "Vad returnerar följande pseudokod?\n\nFunction length(head):\n    count = 0\n    curr = head\n    While curr != null:\n        count = count + 1\n        curr = curr.next\n    Return count\n\nLista: 7 -> 3 -> 9 -> 1 -> null",
          options: [
            { letter: "A", text: "3" },
            { letter: "B", text: "4" },
            { letter: "C", text: "20" },
            { letter: "D", text: "1" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 3,
          chapter_name: "Länkade Listor (Linked Lists)",
          question_num: 110,
          difficulty: "Svår",
          question: "Vad blir listan efter följande pseudokod?\n\nLista: 1 -> 2 -> 3 -> null\ncurr = head.next  // curr pekar på 2\nnewNode.data = 99\nnewNode.next = curr.next\ncurr.next = newNode",
          options: [
            { letter: "A", text: "1 -> 99 -> 2 -> 3 -> null" },
            { letter: "B", text: "1 -> 2 -> 99 -> 3 -> null" },
            { letter: "C", text: "1 -> 2 -> 3 -> 99 -> null" },
            { letter: "D", text: "99 -> 1 -> 2 -> 3 -> null" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 3,
          chapter_name: "Länkade Listor (Linked Lists)",
          question_num: 111,
          difficulty: "Lätt",
          question: "Vad pekar head.next.next på i listan 5 -> 10 -> 15 -> null?",
          options: [
            { letter: "A", text: "Noden med värde 5" },
            { letter: "B", text: "Noden med värde 10" },
            { letter: "C", text: "Noden med värde 15" },
            { letter: "D", text: "null" }
          ],
          correct_answer: "C",
          is_multi: false,
        },
        {
          chapter: 3,
          chapter_name: "Länkade Listor (Linked Lists)",
          question_num: 112,
          difficulty: "Medel",
          question: "Vad returnerar följande pseudokod?\n\nFunction search(head, target):\n    curr = head\n    While curr != null:\n        If curr.data == target:\n            Return true\n        curr = curr.next\n    Return false\n\nLista: 3 -> 7 -> 2 -> null\nAnrop: search(head, 5)",
          options: [
            { letter: "A", text: "true" },
            { letter: "B", text: "false" },
            { letter: "C", text: "5" },
            { letter: "D", text: "null" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 3,
          chapter_name: "Länkade Listor (Linked Lists)",
          question_num: 113,
          difficulty: "Lätt",
          question: "Vilken operation utförs av pseudokoden?\n\nnewNode.data = value\nnewNode.next = head\nhead = newNode",
          options: [
            { letter: "A", text: "Lägg till sist i listan" },
            { letter: "B", text: "Lägg till först i listan" },
            { letter: "C", text: "Ta bort första noden" },
            { letter: "D", text: "Sök i listan" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
// ═══ KAPITEL 4: Arrayer ═══
        {
          chapter: 4,
          chapter_name: "Arrayer (Arrays)",
          question_num: 90,
          difficulty: "Lätt",
          question: "Givet arr = [5, 12, 3, 8, 1]. Vad är arr[2]?",
          options: [
            { letter: "A", text: "5" },
            { letter: "B", text: "12" },
            { letter: "C", text: "3" },
            { letter: "D", text: "8" }
          ],
          correct_answer: "C",
          is_multi: false,
        },
        {
          chapter: 4,
          chapter_name: "Arrayer (Arrays)",
          question_num: 91,
          difficulty: "Medel",
          question: "Vad returnerar följande pseudokod?\n\nFunction findMax(arr, n):\n    max = arr[0]\n    For i = 1 to n-1:\n        If arr[i] > max:\n            max = arr[i]\n    Return max\n\narr = [3, 7, 1, 9, 4], n = 5",
          options: [
            { letter: "A", text: "3" },
            { letter: "B", text: "7" },
            { letter: "C", text: "9" },
            { letter: "D", text: "4" }
          ],
          correct_answer: "C",
          is_multi: false,
        },
        {
          chapter: 4,
          chapter_name: "Arrayer (Arrays)",
          question_num: 92,
          difficulty: "Medel",
          question: "Vad returnerar följande pseudokod?\n\nFunction linearSearch(arr, n, target):\n    For i = 0 to n-1:\n        If arr[i] == target:\n            Return i\n    Return -1\n\narr = [10, 20, 30, 40], n = 4, target = 30",
          options: [
            { letter: "A", text: "2" },
            { letter: "B", text: "3" },
            { letter: "C", text: "30" },
            { letter: "D", text: "-1" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 4,
          chapter_name: "Arrayer (Arrays)",
          question_num: 93,
          difficulty: "Medel",
          question: "Vad blir arrayen efter följande pseudokod som tar bort elementet på index 1?\n\narr = [A, B, C, D], size = 4\nFor i = 1 to size-2:\n    arr[i] = arr[i+1]\nsize = size - 1",
          options: [
            { letter: "A", text: "[A, C, D]" },
            { letter: "B", text: "[A, B, D]" },
            { letter: "C", text: "[B, C, D]" },
            { letter: "D", text: "[A, C, D, D]" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 4,
          chapter_name: "Arrayer (Arrays)",
          question_num: 94,
          difficulty: "Svår",
          question: "Vad skrivs ut av följande pseudokod med en 2D-array?\n\nmatrix = [[1,2],[3,4],[5,6]]\nFor i = 0 to 2:\n    Print matrix[i][0]",
          options: [
            { letter: "A", text: "1 2" },
            { letter: "B", text: "1 3 5" },
            { letter: "C", text: "1 2 3" },
            { letter: "D", text: "2 4 6" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 4,
          chapter_name: "Arrayer (Arrays)",
          question_num: 95,
          difficulty: "Medel",
          question: "Vad blir arrayen efter att vi infogar värdet 25 på index 2?\n\narr = [10, 20, 30, 40], size = 4\nFor i = size-1 downto 2:\n    arr[i+1] = arr[i]\narr[2] = 25\nsize = size + 1",
          options: [
            { letter: "A", text: "[10, 20, 25, 30, 40]" },
            { letter: "B", text: "[10, 25, 20, 30, 40]" },
            { letter: "C", text: "[10, 20, 30, 25, 40]" },
            { letter: "D", text: "[25, 10, 20, 30, 40]" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 4,
          chapter_name: "Arrayer (Arrays)",
          question_num: 96,
          difficulty: "Svår",
          question: "Vad är tidskomplexiteten (Big O) för följande pseudokod?\n\nFunction hasDuplicate(arr, n):\n    For i = 0 to n-1:\n        For j = i+1 to n-1:\n            If arr[i] == arr[j]:\n                Return true\n    Return false",
          options: [
            { letter: "A", text: "O(n)" },
            { letter: "B", text: "O(n²)" },
            { letter: "C", text: "O(n log n)" },
            { letter: "D", text: "O(log n)" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 4,
          chapter_name: "Arrayer (Arrays)",
          question_num: 97,
          difficulty: "Lätt",
          question: "Vad returnerar följande pseudokod?\n\nFunction sum(arr, n):\n    total = 0\n    For i = 0 to n-1:\n        total = total + arr[i]\n    Return total\n\narr = [2, 4, 6], n = 3",
          options: [
            { letter: "A", text: "6" },
            { letter: "B", text: "12" },
            { letter: "C", text: "8" },
            { letter: "D", text: "10" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 4,
          chapter_name: "Arrayer (Arrays)",
          question_num: 98,
          difficulty: "Medel",
          question: "Vad returnerar linearSearch om target inte finns i arrayen?\n\nFunction linearSearch(arr, n, target):\n    For i = 0 to n-1:\n        If arr[i] == target:\n            Return i\n    Return -1",
          options: [
            { letter: "A", text: "0" },
            { letter: "B", text: "null" },
            { letter: "C", text: "-1" },
            { letter: "D", text: "n" }
          ],
          correct_answer: "C",
          is_multi: false,
        },
        {
          chapter: 4,
          chapter_name: "Arrayer (Arrays)",
          question_num: 99,
          difficulty: "Lätt",
          question: "Vad är tidskomplexiteten för att läsa ett element ur en array med känt index?",
          options: [
            { letter: "A", text: "O(n)" },
            { letter: "B", text: "O(1)" },
            { letter: "C", text: "O(log n)" },
            { letter: "D", text: "O(n²)" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
// ═══ KAPITEL 5: Stackar och Köer ═══
        {
          chapter: 5,
          chapter_name: "Stackar och Köer (Stacks and Queues)",
          question_num: 92,
          difficulty: "Lätt",
          question: "Vad är top efter följande operationer?\n\nStack (tom)\nPush(5)\nPush(10)\nPush(3)\nPop()",
          options: [
            { letter: "A", text: "3" },
            { letter: "B", text: "10" },
            { letter: "C", text: "5" },
            { letter: "D", text: "Tom stack" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 5,
          chapter_name: "Stackar och Köer (Stacks and Queues)",
          question_num: 93,
          difficulty: "Medel",
          question: "Vad är resultatet av att evaluera postfix-uttrycket med en stack?\n\n3 4 + 2 *",
          options: [
            { letter: "A", text: "14" },
            { letter: "B", text: "10" },
            { letter: "C", text: "24" },
            { letter: "D", text: "9" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 5,
          chapter_name: "Stackar och Köer (Stacks and Queues)",
          question_num: 94,
          difficulty: "Medel",
          question: "Vad innehåller kön (front till rear) efter följande operationer?\n\nKö (tom)\nEnqueue(A)\nEnqueue(B)\nEnqueue(C)\nDequeue()\nEnqueue(D)",
          options: [
            { letter: "A", text: "A, B, C, D" },
            { letter: "B", text: "B, C, D" },
            { letter: "C", text: "D, C, B" },
            { letter: "D", text: "A, C, D" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 5,
          chapter_name: "Stackar och Köer (Stacks and Queues)",
          question_num: 95,
          difficulty: "Lätt",
          question: "Vad returnerar Peek() på en stack med elementen [5, 10, 3] där 3 är överst?",
          options: [
            { letter: "A", text: "5" },
            { letter: "B", text: "3" },
            { letter: "C", text: "10" },
            { letter: "D", text: "Tom stack" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 5,
          chapter_name: "Stackar och Köer (Stacks and Queues)",
          question_num: 96,
          difficulty: "Svår",
          question: "Vad är resultatet av att evaluera postfix-uttrycket med en stack?\n\n5 1 2 + 4 * + 3 -",
          options: [
            { letter: "A", text: "14" },
            { letter: "B", text: "12" },
            { letter: "C", text: "20" },
            { letter: "D", text: "9" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 5,
          chapter_name: "Stackar och Köer (Stacks and Queues)",
          question_num: 97,
          difficulty: "Medel",
          question: "Vad innehåller stacken (botten till topp) efter följande operationer?\n\nStack (tom)\nPush(1)\nPush(2)\nPush(3)\nPop()\nPush(4)\nPop()\nPush(5)",
          options: [
            { letter: "A", text: "1, 2, 5" },
            { letter: "B", text: "1, 2, 3, 4, 5" },
            { letter: "C", text: "1, 5" },
            { letter: "D", text: "5, 2, 1" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 5,
          chapter_name: "Stackar och Köer (Stacks and Queues)",
          question_num: 98,
          difficulty: "Svår",
          question: "I en cirkulär kö med storlek 5, front=3 och rear=1. Hur många element finns i kön?",
          options: [
            { letter: "A", text: "2" },
            { letter: "B", text: "3" },
            { letter: "C", text: "4" },
            { letter: "D", text: "1" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 5,
          chapter_name: "Stackar och Köer (Stacks and Queues)",
          question_num: 99,
          difficulty: "Lätt",
          question: "Vilken ordning tas elementen ut ur en stack om man lägger in A, B, C i den ordningen?",
          options: [
            { letter: "A", text: "A, B, C" },
            { letter: "B", text: "C, B, A" },
            { letter: "C", text: "B, A, C" },
            { letter: "D", text: "C, A, B" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 5,
          chapter_name: "Stackar och Köer (Stacks and Queues)",
          question_num: 100,
          difficulty: "Medel",
          question: "Vad returnerar Dequeue() på följande kö?\n\nfront -> [10, 20, 30, 40] <- rear",
          options: [
            { letter: "A", text: "40" },
            { letter: "B", text: "10" },
            { letter: "C", text: "20" },
            { letter: "D", text: "30" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 5,
          chapter_name: "Stackar och Köer (Stacks and Queues)",
          question_num: 101,
          difficulty: "Medel",
          question: "Vad är resultatet av att evaluera postfix-uttrycket med en stack?\n\n8 2 / 3 +",
          options: [
            { letter: "A", text: "7" },
            { letter: "B", text: "5" },
            { letter: "C", text: "4" },
            { letter: "D", text: "6" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
// ═══ KAPITEL 6: Sortering ═══
        {
          chapter: 6,
          chapter_name: "Sortering (Sorting)",
          question_num: 83,
          difficulty: "Medel",
          question: "Vad blir arrayen efter ETT helt pass av bubble sort (vänster till höger)?\n\narr = [5, 3, 8, 1, 2]",
          options: [
            { letter: "A", text: "[3, 5, 1, 2, 8]" },
            { letter: "B", text: "[1, 2, 3, 5, 8]" },
            { letter: "C", text: "[3, 5, 8, 1, 2]" },
            { letter: "D", text: "[5, 3, 1, 2, 8]" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 6,
          chapter_name: "Sortering (Sorting)",
          question_num: 84,
          difficulty: "Medel",
          question: "Vad blir arrayen efter selection sorts första pass (hitta minsta och byt)?\n\narr = [64, 25, 12, 22, 11]",
          options: [
            { letter: "A", text: "[11, 25, 12, 22, 64]" },
            { letter: "B", text: "[12, 25, 64, 22, 11]" },
            { letter: "C", text: "[11, 12, 22, 25, 64]" },
            { letter: "D", text: "[25, 12, 22, 11, 64]" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 6,
          chapter_name: "Sortering (Sorting)",
          question_num: 85,
          difficulty: "Medel",
          question: "Vad blir arrayen efter insertion sorts pass för index 2?\n\narr = [3, 7, 2, 5, 1]\n\n(Index 0-1 är redan sorterade sinsemellan)",
          options: [
            { letter: "A", text: "[2, 3, 7, 5, 1]" },
            { letter: "B", text: "[3, 2, 7, 5, 1]" },
            { letter: "C", text: "[2, 3, 5, 7, 1]" },
            { letter: "D", text: "[3, 7, 5, 2, 1]" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 6,
          chapter_name: "Sortering (Sorting)",
          question_num: 86,
          difficulty: "Svår",
          question: "Givet arr = [3, 7, 8, 5, 2, 1, 9] med pivot = arr[0] = 3. Vilken array fås efter Quicksorts partition?\n\n(Element <= pivot till vänster, > pivot till höger)",
          options: [
            { letter: "A", text: "[2, 1, 3, 7, 8, 5, 9]" },
            { letter: "B", text: "[1, 2, 3, 5, 7, 8, 9]" },
            { letter: "C", text: "[3, 1, 2, 5, 7, 8, 9]" },
            { letter: "D", text: "[1, 3, 2, 5, 8, 7, 9]" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 6,
          chapter_name: "Sortering (Sorting)",
          question_num: 87,
          difficulty: "Medel",
          question: "Vad blir resultatet av att merga dessa två sorterade arrayer?\n\nleft = [1, 4, 7]\nright = [2, 5, 6]",
          options: [
            { letter: "A", text: "[1, 2, 4, 5, 6, 7]" },
            { letter: "B", text: "[1, 4, 7, 2, 5, 6]" },
            { letter: "C", text: "[2, 1, 5, 4, 6, 7]" },
            { letter: "D", text: "[1, 2, 3, 4, 5, 6]" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 6,
          chapter_name: "Sortering (Sorting)",
          question_num: 88,
          difficulty: "Lätt",
          question: "Vad är tidskomplexiteten i värsta fallet för bubble sort?",
          options: [
            { letter: "A", text: "O(n)" },
            { letter: "B", text: "O(n²)" },
            { letter: "C", text: "O(n log n)" },
            { letter: "D", text: "O(log n)" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 6,
          chapter_name: "Sortering (Sorting)",
          question_num: 89,
          difficulty: "Svår",
          question: "Vad är tidskomplexiteten för följande pseudokod?\n\nFunction sort(arr, n):\n    For i = 0 to n-2:\n        minIdx = i\n        For j = i+1 to n-1:\n            If arr[j] < arr[minIdx]:\n                minIdx = j\n        Swap arr[i] and arr[minIdx]",
          options: [
            { letter: "A", text: "O(n)" },
            { letter: "B", text: "O(n²)" },
            { letter: "C", text: "O(n log n)" },
            { letter: "D", text: "O(n³)" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 6,
          chapter_name: "Sortering (Sorting)",
          question_num: 90,
          difficulty: "Lätt",
          question: "Vilken sorteringsalgoritm beskrivs av pseudokoden?\n\nFor i = 1 to n-1:\n    key = arr[i]\n    j = i - 1\n    While j >= 0 and arr[j] > key:\n        arr[j+1] = arr[j]\n        j = j - 1\n    arr[j+1] = key",
          options: [
            { letter: "A", text: "Bubble sort" },
            { letter: "B", text: "Selection sort" },
            { letter: "C", text: "Insertion sort" },
            { letter: "D", text: "Quick sort" }
          ],
          correct_answer: "C",
          is_multi: false,
        },
        {
          chapter: 6,
          chapter_name: "Sortering (Sorting)",
          question_num: 91,
          difficulty: "Medel",
          question: "Hur många byten (swaps) görs i bubble sorts första pass?\n\narr = [4, 2, 7, 1, 3]",
          options: [
            { letter: "A", text: "2" },
            { letter: "B", text: "3" },
            { letter: "C", text: "4" },
            { letter: "D", text: "1" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 6,
          chapter_name: "Sortering (Sorting)",
          question_num: 92,
          difficulty: "Lätt",
          question: "Vilken sorteringsalgoritm beskrivs av pseudokoden?\n\nFor i = 0 to n-2:\n    For j = 0 to n-2-i:\n        If arr[j] > arr[j+1]:\n            Swap arr[j] and arr[j+1]",
          options: [
            { letter: "A", text: "Bubble sort" },
            { letter: "B", text: "Insertion sort" },
            { letter: "C", text: "Selection sort" },
            { letter: "D", text: "Merge sort" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
// ═══ KAPITEL 7: Sökning ═══
        {
          chapter: 7,
          chapter_name: "Sökning (Searching)",
          question_num: 74,
          difficulty: "Medel",
          question: "Vad returnerar binary search?\n\nFunction binarySearch(arr, target):\n    low = 0, high = length-1\n    While low <= high:\n        mid = (low + high) / 2\n        If arr[mid] == target: Return mid\n        If arr[mid] < target: low = mid + 1\n        Else: high = mid - 1\n    Return -1\n\narr = [2, 5, 8, 12, 16, 23, 38], target = 23",
          options: [
            { letter: "A", text: "5" },
            { letter: "B", text: "23" },
            { letter: "C", text: "6" },
            { letter: "D", text: "-1" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 7,
          chapter_name: "Sökning (Searching)",
          question_num: 75,
          difficulty: "Lätt",
          question: "Vad returnerar linear search?\n\nFunction linearSearch(arr, target):\n    For i = 0 to n-1:\n        If arr[i] == target: Return i\n    Return -1\n\narr = [7, 3, 9, 1, 5], target = 9",
          options: [
            { letter: "A", text: "9" },
            { letter: "B", text: "2" },
            { letter: "C", text: "3" },
            { letter: "D", text: "-1" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 7,
          chapter_name: "Sökning (Searching)",
          question_num: 76,
          difficulty: "Medel",
          question: "Vilka värden har low, high, mid i FÖRSTA iterationen av binary search?\n\narr = [1, 3, 5, 7, 9, 11, 13], target = 11",
          options: [
            { letter: "A", text: "low=0, high=6, mid=3" },
            { letter: "B", text: "low=0, high=7, mid=3" },
            { letter: "C", text: "low=1, high=7, mid=4" },
            { letter: "D", text: "low=0, high=6, mid=4" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 7,
          chapter_name: "Sökning (Searching)",
          question_num: 77,
          difficulty: "Medel",
          question: "I binary search på arr = [1, 3, 5, 7, 9, 11, 13] med target = 11. Vad är low och high i ANDRA iterationen?",
          options: [
            { letter: "A", text: "low=4, high=6" },
            { letter: "B", text: "low=3, high=6" },
            { letter: "C", text: "low=0, high=3" },
            { letter: "D", text: "low=4, high=5" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 7,
          chapter_name: "Sökning (Searching)",
          question_num: 78,
          difficulty: "Svår",
          question: "Hur många jämförelser (arr[mid] == target) gör binary search för att hitta target = 3 i:\narr = [1, 2, 3, 4, 5, 6, 7, 8]?",
          options: [
            { letter: "A", text: "1" },
            { letter: "B", text: "2" },
            { letter: "C", text: "3" },
            { letter: "D", text: "4" }
          ],
          correct_answer: "C",
          is_multi: false,
        },
        {
          chapter: 7,
          chapter_name: "Sökning (Searching)",
          question_num: 79,
          difficulty: "Lätt",
          question: "Vad krävs för att binary search ska fungera korrekt?",
          options: [
            { letter: "A", text: "Arrayen måste vara sorterad" },
            { letter: "B", text: "Arrayen måste ha jämnt antal element" },
            { letter: "C", text: "Alla element måste vara unika" },
            { letter: "D", text: "Arrayen måste vara av storlek 2^n" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 7,
          chapter_name: "Sökning (Searching)",
          question_num: 80,
          difficulty: "Lätt",
          question: "Vad är tidskomplexiteten för binary search?",
          options: [
            { letter: "A", text: "O(n)" },
            { letter: "B", text: "O(log n)" },
            { letter: "C", text: "O(n²)" },
            { letter: "D", text: "O(1)" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 7,
          chapter_name: "Sökning (Searching)",
          question_num: 81,
          difficulty: "Medel",
          question: "Vad returnerar binary search om target INTE finns i arrayen?\n\narr = [2, 4, 6, 8, 10], target = 5",
          options: [
            { letter: "A", text: "2" },
            { letter: "B", text: "null" },
            { letter: "C", text: "-1" },
            { letter: "D", text: "0" }
          ],
          correct_answer: "C",
          is_multi: false,
        },
        {
          chapter: 7,
          chapter_name: "Sökning (Searching)",
          question_num: 82,
          difficulty: "Svår",
          question: "I binary search med arr = [10, 20, 30, 40, 50, 60, 70, 80], target = 70. I vilken ordning jämförs elementen med target?",
          options: [
            { letter: "A", text: "40, 60, 70" },
            { letter: "B", text: "40, 70" },
            { letter: "C", text: "10, 20, 30, 40, 50, 60, 70" },
            { letter: "D", text: "40, 60, 80, 70" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 7,
          chapter_name: "Sökning (Searching)",
          question_num: 83,
          difficulty: "Medel",
          question: "Vad är tidskomplexiteten i värsta fallet för linear search?",
          options: [
            { letter: "A", text: "O(1)" },
            { letter: "B", text: "O(n)" },
            { letter: "C", text: "O(log n)" },
            { letter: "D", text: "O(n²)" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
// ═══ KAPITEL 8: Hashtabeller ═══
        {
          chapter: 8,
          chapter_name: "Hashtabeller (Hash Tables)",
          question_num: 72,
          difficulty: "Lätt",
          question: "Givet hashfunktionen h(key) = key mod 7. Vilket index hamnar nyckeln 15 på?",
          options: [
            { letter: "A", text: "0" },
            { letter: "B", text: "1" },
            { letter: "C", text: "2" },
            { letter: "D", text: "8" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 8,
          chapter_name: "Hashtabeller (Hash Tables)",
          question_num: 73,
          difficulty: "Medel",
          question: "Givet h(key) = key mod 5. Nycklarna 3, 8, 13 ska sättas in. Vad händer?",
          options: [
            { letter: "A", text: "Alla hamnar på index 3 (kollision)" },
            { letter: "B", text: "De hamnar på index 3, 8, 13" },
            { letter: "C", text: "De hamnar på index 3, 3, 3 utan kollision" },
            { letter: "D", text: "Bara den första kan sättas in" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 8,
          chapter_name: "Hashtabeller (Hash Tables)",
          question_num: 74,
          difficulty: "Medel",
          question: "Givet h(key) = key mod 7 med chaining. Var hamnar nycklarna efter insert av 10, 17, 3?\n\nTabell med 7 platser (0-6).",
          options: [
            { letter: "A", text: "index 3: [10, 17, 3]" },
            { letter: "B", text: "index 3: [10, 17], index 3: [3]" },
            { letter: "C", text: "index 3: [10, 17], index 3: [3] — alla på samma index med en kedja [10 -> 17 -> 3]" },
            { letter: "D", text: "index 3: [3], index 10: [10], index 17: [17]" }
          ],
          correct_answer: "C",
          is_multi: false,
        },
        {
          chapter: 8,
          chapter_name: "Hashtabeller (Hash Tables)",
          question_num: 75,
          difficulty: "Medel",
          question: "Givet h(key) = key mod 7 med linear probing. Tabellen är tom. I vilken ordning fylls positionerna vid insert av 7, 14, 21?",
          options: [
            { letter: "A", text: "Alla på index 0" },
            { letter: "B", text: "index 0, 1, 2" },
            { letter: "C", text: "index 7, 14, 21" },
            { letter: "D", text: "index 0, 0, 0 (överskrivning)" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 8,
          chapter_name: "Hashtabeller (Hash Tables)",
          question_num: 76,
          difficulty: "Svår",
          question: "Givet h(key) = key mod 10 med linear probing. Tabellen (storlek 10) har redan värden på index 3 och 4. Var hamnar nyckel 23?",
          options: [
            { letter: "A", text: "Index 3" },
            { letter: "B", text: "Index 5" },
            { letter: "C", text: "Index 2" },
            { letter: "D", text: "Index 23" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 8,
          chapter_name: "Hashtabeller (Hash Tables)",
          question_num: 77,
          difficulty: "Lätt",
          question: "Vad är en kollision i en hashtabell?",
          options: [
            { letter: "A", text: "Två nycklar får samma hashvärde" },
            { letter: "B", text: "En nyckel inte kan hittas" },
            { letter: "C", text: "Tabellen är full" },
            { letter: "D", text: "Hashfunktionen returnerar negativt tal" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 8,
          chapter_name: "Hashtabeller (Hash Tables)",
          question_num: 78,
          difficulty: "Medel",
          question: "Givet h(key) = key mod 5, chaining. Tabellen innehåller: index 1: [6 -> 11], index 3: [8]. Var söker vi efter nyckel 16?",
          options: [
            { letter: "A", text: "Index 1, traverserar kedjan" },
            { letter: "B", text: "Index 3" },
            { letter: "C", text: "Index 6" },
            { letter: "D", text: "Index 0" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 8,
          chapter_name: "Hashtabeller (Hash Tables)",
          question_num: 79,
          difficulty: "Svår",
          question: "Givet h(key) = key mod 7 med linear probing. Insert-ordning: 50, 700, 76, 85, 92, 73. Vilka index används?\n\n50%7=1, 700%7=0, 76%7=6, 85%7=1, 92%7=1, 73%7=3",
          options: [
            { letter: "A", text: "index 1, 0, 6, 2, 3, 3" },
            { letter: "B", text: "index 1, 0, 6, 2, 3, 4" },
            { letter: "C", text: "index 1, 0, 6, 1, 1, 3" },
            { letter: "D", text: "index 1, 0, 6, 2, 5, 3" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 8,
          chapter_name: "Hashtabeller (Hash Tables)",
          question_num: 80,
          difficulty: "Lätt",
          question: "Vad är den ideala tidskomplexiteten för sökning i en hashtabell (utan kollisioner)?",
          options: [
            { letter: "A", text: "O(n)" },
            { letter: "B", text: "O(1)" },
            { letter: "C", text: "O(log n)" },
            { letter: "D", text: "O(n²)" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 8,
          chapter_name: "Hashtabeller (Hash Tables)",
          question_num: 81,
          difficulty: "Medel",
          question: "Vad händer vid sökning efter nyckel 22 i en hashtabell med h(key) = key mod 10 och linear probing, om index 2 innehåller 12 och index 3 är tomt?",
          options: [
            { letter: "A", text: "Hittar 22 på index 2" },
            { letter: "B", text: "Kollar index 2, ser 12 (inte 22), kollar index 3 som är tomt → returnerar \"ej hittad\"" },
            { letter: "C", text: "Returnerar direkt \"ej hittad\"" },
            { letter: "D", text: "Söker igenom hela tabellen" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
// ═══ KAPITEL 9: Rekursion ═══
        {
          chapter: 9,
          chapter_name: "Rekursion (Recursion)",
          question_num: 84,
          difficulty: "Lätt",
          question: "Vad returnerar följande rekursiva funktion?\n\nFunction factorial(n):\n    If n <= 1: Return 1\n    Return n * factorial(n-1)\n\nAnrop: factorial(4)",
          options: [
            { letter: "A", text: "10" },
            { letter: "B", text: "24" },
            { letter: "C", text: "16" },
            { letter: "D", text: "4" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 9,
          chapter_name: "Rekursion (Recursion)",
          question_num: 85,
          difficulty: "Medel",
          question: "Vad returnerar följande funktion?\n\nFunction fib(n):\n    If n <= 1: Return n\n    Return fib(n-1) + fib(n-2)\n\nAnrop: fib(5)",
          options: [
            { letter: "A", text: "5" },
            { letter: "B", text: "8" },
            { letter: "C", text: "3" },
            { letter: "D", text: "13" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 9,
          chapter_name: "Rekursion (Recursion)",
          question_num: 86,
          difficulty: "Medel",
          question: "Hur många gånger anropas fib() totalt (inklusive första anropet) vid fib(4)?\n\nFunction fib(n):\n    If n <= 1: Return n\n    Return fib(n-1) + fib(n-2)",
          options: [
            { letter: "A", text: "5" },
            { letter: "B", text: "7" },
            { letter: "C", text: "9" },
            { letter: "D", text: "4" }
          ],
          correct_answer: "C",
          is_multi: false,
        },
        {
          chapter: 9,
          chapter_name: "Rekursion (Recursion)",
          question_num: 87,
          difficulty: "Lätt",
          question: "Vad är basfallet i följande funktion?\n\nFunction sum(n):\n    If n == 0: Return 0\n    Return n + sum(n-1)",
          options: [
            { letter: "A", text: "Return n + sum(n-1)" },
            { letter: "B", text: "If n == 0: Return 0" },
            { letter: "C", text: "sum(n-1)" },
            { letter: "D", text: "Return n" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 9,
          chapter_name: "Rekursion (Recursion)",
          question_num: 88,
          difficulty: "Medel",
          question: "Vad returnerar följande funktion?\n\nFunction sumArray(arr, n):\n    If n == 0: Return 0\n    Return arr[n-1] + sumArray(arr, n-1)\n\narr = [2, 4, 6], n = 3",
          options: [
            { letter: "A", text: "6" },
            { letter: "B", text: "12" },
            { letter: "C", text: "10" },
            { letter: "D", text: "8" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 9,
          chapter_name: "Rekursion (Recursion)",
          question_num: 89,
          difficulty: "Svår",
          question: "Vad händer om basfallet saknas i en rekursiv funktion?\n\nFunction broken(n):\n    Return n + broken(n-1)",
          options: [
            { letter: "A", text: "Funktionen returnerar 0" },
            { letter: "B", text: "Oändlig rekursion / stack overflow" },
            { letter: "C", text: "Funktionen returnerar n" },
            { letter: "D", text: "Funktionen ignorerar anropet" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 9,
          chapter_name: "Rekursion (Recursion)",
          question_num: 90,
          difficulty: "Medel",
          question: "Vad returnerar följande funktion?\n\nFunction power(base, exp):\n    If exp == 0: Return 1\n    Return base * power(base, exp - 1)\n\nAnrop: power(3, 3)",
          options: [
            { letter: "A", text: "9" },
            { letter: "B", text: "27" },
            { letter: "C", text: "6" },
            { letter: "D", text: "81" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 9,
          chapter_name: "Rekursion (Recursion)",
          question_num: 91,
          difficulty: "Svår",
          question: "Hur många rekursiva anrop görs av factorial(5) (EJ räknat det första anropet)?\n\nFunction factorial(n):\n    If n <= 1: Return 1\n    Return n * factorial(n-1)",
          options: [
            { letter: "A", text: "3" },
            { letter: "B", text: "4" },
            { letter: "C", text: "5" },
            { letter: "D", text: "6" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 9,
          chapter_name: "Rekursion (Recursion)",
          question_num: 92,
          difficulty: "Medel",
          question: "Vad returnerar följande funktion?\n\nFunction countDown(n):\n    If n <= 0: Return 0\n    Return 1 + countDown(n - 1)\n\nAnrop: countDown(5)",
          options: [
            { letter: "A", text: "0" },
            { letter: "B", text: "5" },
            { letter: "C", text: "4" },
            { letter: "D", text: "1" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 9,
          chapter_name: "Rekursion (Recursion)",
          question_num: 93,
          difficulty: "Lätt",
          question: "Vilken del av en rekursiv funktion förhindrar oändlig rekursion?",
          options: [
            { letter: "A", text: "Det rekursiva anropet" },
            { letter: "B", text: "Basfallet" },
            { letter: "C", text: "Return-satsen" },
            { letter: "D", text: "Funktionsnamnet" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
// ═══ KAPITEL 10: Träd ═══
        {
          chapter: 10,
          chapter_name: "Träd (Trees)",
          question_num: 86,
          difficulty: "Lätt",
          question: "I ett binärt sökträd (BST), var placeras ett nytt värde som är MINDRE än roten?",
          options: [
            { letter: "A", text: "I vänster subträd" },
            { letter: "B", text: "I höger subträd" },
            { letter: "C", text: "Som ny rot" },
            { letter: "D", text: "Som löv längst ner till höger" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 10,
          chapter_name: "Träd (Trees)",
          question_num: 87,
          difficulty: "Medel",
          question: "Givet BST med rot=8, vänster=3(barn:1,6), höger=10(barn:null,14). Vad skrivs ut vid inorder-traversering?",
          options: [
            { letter: "A", text: "8, 3, 1, 6, 10, 14" },
            { letter: "B", text: "1, 3, 6, 8, 10, 14" },
            { letter: "C", text: "1, 6, 3, 14, 10, 8" },
            { letter: "D", text: "8, 3, 10, 1, 6, 14" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 10,
          chapter_name: "Träd (Trees)",
          question_num: 88,
          difficulty: "Medel",
          question: "Givet BST med rot=8, vänster=3(barn:1,6), höger=10(barn:null,14). Vad skrivs ut vid preorder-traversering?",
          options: [
            { letter: "A", text: "8, 3, 1, 6, 10, 14" },
            { letter: "B", text: "1, 3, 6, 8, 10, 14" },
            { letter: "C", text: "1, 6, 3, 14, 10, 8" },
            { letter: "D", text: "8, 10, 14, 3, 6, 1" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 10,
          chapter_name: "Träd (Trees)",
          question_num: 89,
          difficulty: "Medel",
          question: "Givet BST med rot=8, vänster=3(barn:1,6), höger=10(barn:null,14). Vad skrivs ut vid postorder-traversering?",
          options: [
            { letter: "A", text: "8, 3, 1, 6, 10, 14" },
            { letter: "B", text: "1, 3, 6, 8, 10, 14" },
            { letter: "C", text: "1, 6, 3, 14, 10, 8" },
            { letter: "D", text: "14, 10, 6, 1, 3, 8" }
          ],
          correct_answer: "C",
          is_multi: false,
        },
        {
          chapter: 10,
          chapter_name: "Träd (Trees)",
          question_num: 90,
          difficulty: "Medel",
          question: "Vilken nod besöks FÖRST vid sökning efter 6 i BST med rot=8, vänster=3(barn:1,6), höger=10?\n\nFunction search(node, target):\n    If node == null: Return null\n    If target == node.data: Return node\n    If target < node.data: Return search(node.left, target)\n    Else: Return search(node.right, target)",
          options: [
            { letter: "A", text: "8 → 3 → 6" },
            { letter: "B", text: "8 → 10 → 6" },
            { letter: "C", text: "3 → 6" },
            { letter: "D", text: "8 → 3 → 1 → 6" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 10,
          chapter_name: "Träd (Trees)",
          question_num: 91,
          difficulty: "Medel",
          question: "I ett BST, i vilken ordning infogas värdena 5, 3, 7, 1, 4? Rita trädet. Vad är höjden?",
          options: [
            { letter: "A", text: "2" },
            { letter: "B", text: "3" },
            { letter: "C", text: "4" },
            { letter: "D", text: "5" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 10,
          chapter_name: "Träd (Trees)",
          question_num: 92,
          difficulty: "Svår",
          question: "Vad blir BST:et om vi infogar 1, 2, 3, 4, 5 i den ordningen?",
          options: [
            { letter: "A", text: "Balanserat träd med 1 som rot" },
            { letter: "B", text: "En linjär kedja (degenererat träd) med 1 som rot, allt till höger" },
            { letter: "C", text: "Balanserat träd med 3 som rot" },
            { letter: "D", text: "En linjär kedja med 5 som rot, allt till vänster" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 10,
          chapter_name: "Träd (Trees)",
          question_num: 93,
          difficulty: "Svår",
          question: "Vad är tidskomplexiteten för sökning i ett obalanserat (degenererat) BST med n noder?",
          options: [
            { letter: "A", text: "O(log n)" },
            { letter: "B", text: "O(n)" },
            { letter: "C", text: "O(1)" },
            { letter: "D", text: "O(n log n)" }
          ],
          correct_answer: "B",
          is_multi: false,
        },
        {
          chapter: 10,
          chapter_name: "Träd (Trees)",
          question_num: 94,
          difficulty: "Lätt",
          question: "Vad är ett löv (leaf) i ett träd?",
          options: [
            { letter: "A", text: "En nod utan barn" },
            { letter: "B", text: "Roten av trädet" },
            { letter: "C", text: "En nod med exakt ett barn" },
            { letter: "D", text: "En nod med två barn" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
        {
          chapter: 10,
          chapter_name: "Träd (Trees)",
          question_num: 95,
          difficulty: "Medel",
          question: "Var hamnar värdet 9 om vi infogar det i BST med rot=7, vänster=3, höger=12(vänster=10, höger=15)?",
          options: [
            { letter: "A", text: "Som vänster barn till 10" },
            { letter: "B", text: "Som höger barn till 7" },
            { letter: "C", text: "Som höger barn till 3" },
            { letter: "D", text: "Som vänster barn till 12" }
          ],
          correct_answer: "A",
          is_multi: false,
        },
      ];
