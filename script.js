// Cozy English Academy - Interactive English Learning Website
// Author: Farangis Rajabova

// Data for all grammar topics and questions
const grammarTopics = [
    {
        id: 1,
        title: "Personal Pronouns",
        description: "I, you, he, she, it, we, they",
        questions: [
            { type: "multiple-choice", question: "___ am a student.", options: ["I", "He", "She"], answer: "I" },
            { type: "multiple-choice", question: "___ is my brother.", options: ["I", "He", "We"], answer: "He" },
            { type: "multiple-choice", question: "___ are good friends.", options: ["She", "He", "We"], answer: "We" },
            { type: "multiple-choice", question: "___ is a doctor.", options: ["She", "We", "They"], answer: "She" },
            { type: "multiple-choice", question: "___ are from London.", options: ["He", "They", "I"], answer: "They" },
            { type: "multiple-choice", question: "___ is a cat.", options: ["It", "They", "We"], answer: "It" },
            { type: "multiple-choice", question: "___ is my teacher.", options: ["She", "They", "It"], answer: "She" },
            { type: "multiple-choice", question: "___ are students.", options: ["He", "She", "They"], answer: "They" },
            { type: "fill-blank", question: "My sister ___ apples every day.", answer: "likes" },
            { type: "fill-blank", question: "Muhammad said ___ is tired after work.", answer: "he" }
        ]
    },
    {
        id: 2,
        title: "Object Pronouns",
        description: "me, you, him, her, it, us, them",
        questions: [
            { type: "multiple-choice", question: "She gave ___ a book.", options: ["I", "me", "my"], answer: "me" },
            { type: "multiple-choice", question: "I saw ___ yesterday.", options: ["he", "him", "his"], answer: "him" },
            { type: "multiple-choice", question: "Can you help ___?", options: ["we", "us", "our"], answer: "us" },
            { type: "multiple-choice", question: "He called ___ last night.", options: ["she", "her", "hers"], answer: "her" },
            { type: "multiple-choice", question: "I don't know ___", options: ["they", "them", "their"], answer: "them" },
            { type: "multiple-choice", question: "The teacher asked ___ a question.", options: ["I", "me", "my"], answer: "me" },
            { type: "multiple-choice", question: "Muhammad told ___ the story.", options: ["we", "us", "our"], answer: "us" },
            { type: "multiple-choice", question: "She likes ___", options: ["he", "him", "his"], answer: "him" },
            { type: "fill-blank", question: "Please give ___ the pen when you finish.", answer: "me" },
            { type: "fill-blank", question: "I will call ___ tomorrow at 5 PM.", answer: "you" }
        ]
    },
    {
        id: 3,
        title: "Possessive Adjectives",
        description: "my, your, his, her, its, our, their",
        questions: [
            { type: "multiple-choice", question: "This is ___ book.", options: ["I", "my", "me"], answer: "my" },
            { type: "multiple-choice", question: "That is ___ car.", options: ["he", "his", "him"], answer: "his" },
            { type: "multiple-choice", question: "___ name is Sarah.", options: ["Her", "She", "Hers"], answer: "Her" },
            { type: "multiple-choice", question: "This is ___ house.", options: ["we", "our", "us"], answer: "our" },
            { type: "multiple-choice", question: "___ teacher is very good.", options: ["They", "Their", "Them"], answer: "Their" },
            { type: "multiple-choice", question: "Is this ___ pen?", options: ["you", "your", "yours"], answer: "your" },
            { type: "multiple-choice", question: "Muhammad forgot ___ bag.", options: ["he", "his", "him"], answer: "his" },
            { type: "multiple-choice", question: "The dog ate ___ food.", options: ["it", "its", "it's"], answer: "its" },
            { type: "fill-blank", question: "I really like ___ new phone.", answer: "my" },
            { type: "fill-blank", question: "She lost ___ keys somewhere in the house.", answer: "her" }
        ]
    },
    {
        id: 4,
        title: "Possessive Pronouns",
        description: "mine, yours, his, hers, its, ours, theirs",
        questions: [
            { type: "multiple-choice", question: "This book is ___", options: ["my", "mine", "I"], answer: "mine" },
            { type: "multiple-choice", question: "Is this pen ___?", options: ["your", "yours", "you"], answer: "yours" },
            { type: "multiple-choice", question: "That car is ___", options: ["he", "his", "him"], answer: "his" },
            { type: "multiple-choice", question: "The red house is ___", options: ["they", "their", "theirs"], answer: "theirs" },
            { type: "multiple-choice", question: "These shoes are ___", options: ["our", "ours", "us"], answer: "ours" },
            { type: "multiple-choice", question: "The idea was ___", options: ["she", "her", "hers"], answer: "hers" },
            { type: "multiple-choice", question: "Muhammad said the bag is ___", options: ["he", "his", "him"], answer: "his" },
            { type: "multiple-choice", question: "Is this umbrella ___?", options: ["your", "yours", "you"], answer: "yours" },
            { type: "fill-blank", question: "This phone is not yours, it's ___.", answer: "mine" },
            { type: "fill-blank", question: "The victory was not ours, it was ___.", answer: "theirs" }
        ]
    },
    {
        id: 5,
        title: "Reflexive Pronouns",
        description: "myself, yourself, himself, herself, itself, ourselves, yourselves, themselves",
        questions: [
            { type: "multiple-choice", question: "I cut ___ while cooking.", options: ["me", "myself", "my"], answer: "myself" },
            { type: "multiple-choice", question: "She bought ___ a new dress.", options: ["her", "herself", "hers"], answer: "herself" },
            { type: "multiple-choice", question: "They enjoyed ___ at the party.", options: ["them", "themselves", "theirs"], answer: "themselves" },
            { type: "multiple-choice", question: "He taught ___ to play guitar.", options: ["him", "himself", "his"], answer: "himself" },
            { type: "multiple-choice", question: "We organized the event ___", options: ["our", "ourselves", "us"], answer: "ourselves" },
            { type: "multiple-choice", question: "The cat cleaned ___", options: ["it", "itself", "its"], answer: "itself" },
            { type: "multiple-choice", question: "Muhammad fixed the car ___", options: ["him", "himself", "his"], answer: "himself" },
            { type: "multiple-choice", question: "You should do it ___", options: ["you", "yourself", "yours"], answer: "yourself" },
            { type: "fill-blank", question: "I made this cake all by ___.", answer: "myself" },
            { type: "fill-blank", question: "She spoke to ___ in the mirror every morning.", answer: "herself" }
        ]
    },
    {
        id: 6,
        title: "Cardinal Numbers",
        description: "one, two, three, ten, twenty, hundred",
        questions: [
            { type: "multiple-choice", question: "I have ___ apples.", options: ["one", "first", "ones"], answer: "one" },
            { type: "multiple-choice", question: "There are ___ days in a week.", options: ["seven", "seventh", "sevens"], answer: "seven" },
            { type: "multiple-choice", question: "She has ___ brothers.", options: ["two", "second", "twos"], answer: "two" },
            { type: "multiple-choice", question: "Muhammad is ___ years old.", options: ["twenty", "twentieth", "twenties"], answer: "twenty" },
            { type: "multiple-choice", question: "There are ___ students in the class.", options: ["thirty", "thirtieth", "thirty's"], answer: "thirty" },
            { type: "multiple-choice", question: "I need ___ eggs for the recipe.", options: ["three", "third", "threes"], answer: "three" },
            { type: "multiple-choice", question: "The book has ___ pages.", options: ["one hundred", "hundredth", "hundreds"], answer: "one hundred" },
            { type: "multiple-choice", question: "We walked for ___ minutes.", options: ["fifteen", "fifteenth", "fifteens"], answer: "fifteen" },
            { type: "fill-blank", question: "There are exactly ___ months in a year.", answer: "twelve" },
            { type: "fill-blank", question: "I bought ___ oranges from the market.", answer: "five" }
        ]
    },
    {
        id: 7,
        title: "Ordinal Numbers",
        description: "first, second, third, fifth, tenth",
        questions: [
            { type: "multiple-choice", question: "January is the ___ month.", options: ["one", "first", "ones"], answer: "first" },
            { type: "multiple-choice", question: "My birthday is on the ___ of May.", options: ["five", "fifth", "fives"], answer: "fifth" },
            { type: "multiple-choice", question: "This is my ___ time in London.", options: ["two", "second", "twos"], answer: "second" },
            { type: "multiple-choice", question: "She finished in ___ place.", options: ["three", "third", "threes"], answer: "third" },
            { type: "multiple-choice", question: "Muhammad lives on the ___ floor.", options: ["ten", "tenth", "tenths"], answer: "tenth" },
            { type: "multiple-choice", question: "Today is the ___ of June.", options: ["eight", "eighth", "eighths"], answer: "eighth" },
            { type: "multiple-choice", question: "This is our ___ anniversary.", options: ["four", "fourth", "fourths"], answer: "fourth" },
            { type: "multiple-choice", question: "He came in ___ in the race.", options: ["seven", "seventh", "sevenths"], answer: "seventh" },
            { type: "fill-blank", question: "It's my ___ visit to Paris, and I'm very excited.", answer: "first" },
            { type: "fill-blank", question: "Her office is on the ___ floor of the building.", answer: "third" }
        ]
    },
    {
        id: 8,
        title: "Demonstrative Pronouns",
        description: "This, That, These, Those",
        questions: [
            { type: "multiple-choice", question: "___ is my book (near me).", options: ["This", "That", "These"], answer: "This" },
            { type: "multiple-choice", question: "___ are my keys (near me).", options: ["This", "That", "These"], answer: "These" },
            { type: "multiple-choice", question: "___ is your bag over there.", options: ["This", "That", "These"], answer: "That" },
            { type: "multiple-choice", question: "___ are my friends over there.", options: ["This", "That", "Those"], answer: "Those" },
            { type: "multiple-choice", question: "Look at ___ beautiful flowers here!", options: ["this", "that", "these"], answer: "these" },
            { type: "multiple-choice", question: "___ car over there is very fast.", options: ["This", "That", "Those"], answer: "That" },
            { type: "multiple-choice", question: "Muhammad said, '___ is my sister.' (pointing nearby)", options: ["This", "That", "These"], answer: "This" },
            { type: "multiple-choice", question: "___ books over there are old.", options: ["This", "That", "Those"], answer: "Those" },
            { type: "fill-blank", question: "___ house right here is where I live.", answer: "This" },
            { type: "fill-blank", question: "Look at ___ mountains far away - they're very high.", answer: "those" }
        ]
    },
    {
        id: 9,
        title: "Verb 'To Be' - Present",
        description: "am, is, are",
        questions: [
            { type: "multiple-choice", question: "I ___ a student.", options: ["am", "is", "are"], answer: "am" },
            { type: "multiple-choice", question: "He ___ my brother.", options: ["am", "is", "are"], answer: "is" },
            { type: "multiple-choice", question: "We ___ friends.", options: ["am", "is", "are"], answer: "are" },
            { type: "multiple-choice", question: "She ___ a doctor.", options: ["am", "is", "are"], answer: "is" },
            { type: "multiple-choice", question: "They ___ from London.", options: ["am", "is", "are"], answer: "are" },
            { type: "multiple-choice", question: "It ___ a cat.", options: ["am", "is", "are"], answer: "is" },
            { type: "multiple-choice", question: "You ___ my teacher.", options: ["am", "is", "are"], answer: "are" },
            { type: "multiple-choice", question: "Muhammad ___ a good student.", options: ["am", "is", "are"], answer: "is" },
            { type: "fill-blank", question: "I ___ very happy today.", answer: "am" },
            { type: "fill-blank", question: "They ___ at school right now.", answer: "are" }
        ]
    },
    {
        id: 10,
        title: "Verb 'To Be' - Past",
        description: "was, were",
        questions: [
            { type: "multiple-choice", question: "I ___ at home yesterday.", options: ["was", "were", "am"], answer: "was" },
            { type: "multiple-choice", question: "They ___ in London last week.", options: ["was", "were", "are"], answer: "were" },
            { type: "multiple-choice", question: "She ___ tired after work.", options: ["was", "were", "is"], answer: "was" },
            { type: "multiple-choice", question: "We ___ happy to see you.", options: ["was", "were", "are"], answer: "were" },
            { type: "multiple-choice", question: "He ___ at the party last night.", options: ["was", "were", "is"], answer: "was" },
            { type: "multiple-choice", question: "You ___ late for class.", options: ["was", "were", "are"], answer: "were" },
            { type: "multiple-choice", question: "Muhammad ___ sick yesterday.", options: ["was", "were", "is"], answer: "was" },
            { type: "multiple-choice", question: "The children ___ excited about the trip.", options: ["was", "were", "are"], answer: "were" },
            { type: "fill-blank", question: "It ___ very cold yesterday.", answer: "was" },
            { type: "fill-blank", question: "We ___ at the cinema last night.", answer: "were" }
        ]
    },
    {
        id: 11,
        title: "Verb 'To Be' - Future",
        description: "will be",
        questions: [
            { type: "multiple-choice", question: "I ___ at home tomorrow.", options: ["will be", "was", "am"], answer: "will be" },
            { type: "multiple-choice", question: "They ___ in Paris next month.", options: ["will be", "were", "are"], answer: "will be" },
            { type: "multiple-choice", question: "She ___ a doctor in the future.", options: ["will be", "was", "is"], answer: "will be" },
            { type: "multiple-choice", question: "We ___ happy to help you.", options: ["will be", "were", "are"], answer: "will be" },
            { type: "multiple-choice", question: "He ___ here soon.", options: ["will be", "was", "is"], answer: "will be" },
            { type: "multiple-choice", question: "You ___ surprised by the news.", options: ["will be", "were", "are"], answer: "will be" },
            { type: "multiple-choice", question: "Muhammad ___ at the meeting tomorrow.", options: ["will be", "was", "is"], answer: "will be" },
            { type: "multiple-choice", question: "The weather ___ nice next week.", options: ["will be", "was", "is"], answer: "will be" },
            { type: "fill-blank", question: "I ___ ready in five minutes.", answer: "will be" },
            { type: "fill-blank", question: "They ___ here at exactly 5 PM.", answer: "will be" }
        ]
    },
    {
        id: 12,
        title: "Present Simple Tense",
        description: "I work, he works, they live, she studies",
        questions: [
            { type: "multiple-choice", question: "I ___ English every day.", options: ["study", "studies", "studying"], answer: "study" },
            { type: "multiple-choice", question: "He ___ to work by bus.", options: ["go", "goes", "going"], answer: "goes" },
            { type: "multiple-choice", question: "We ___ TV in the evening.", options: ["watch", "watches", "watching"], answer: "watch" },
            { type: "multiple-choice", question: "She ___ in an office.", options: ["work", "works", "working"], answer: "works" },
            { type: "multiple-choice", question: "They ___ in London.", options: ["live", "lives", "living"], answer: "live" },
            { type: "multiple-choice", question: "Muhammad ___ coffee every morning.", options: ["drink", "drinks", "drinking"], answer: "drinks" },
            { type: "multiple-choice", question: "I usually ___ at 7 AM.", options: ["wake up", "wakes up", "waking up"], answer: "wake up" },
            { type: "multiple-choice", question: "My parents ___ in a small town.", options: ["live", "lives", "living"], answer: "live" },
            { type: "fill-blank", question: "She always ___ to music while studying.", answer: "listens" },
            { type: "fill-blank", question: "We ___ football every Saturday.", answer: "play" }
        ]
    },
    {
        id: 13,
        title: "Past Simple Tense (Regular Verbs)",
        description: "worked, played, cleaned, visited",
        questions: [
            { type: "multiple-choice", question: "I ___ TV yesterday.", options: ["watch", "watched", "watching"], answer: "watched" },
            { type: "multiple-choice", question: "She ___ her homework last night.", options: ["finish", "finished", "finishing"], answer: "finished" },
            { type: "multiple-choice", question: "We ___ to the park on Sunday.", options: ["walk", "walked", "walking"], answer: "walked" },
            { type: "multiple-choice", question: "He ___ the dishes after dinner.", options: ["wash", "washed", "washing"], answer: "washed" },
            { type: "multiple-choice", question: "They ___ football yesterday.", options: ["play", "played", "playing"], answer: "played" },
            { type: "multiple-choice", question: "Muhammad ___ his room yesterday.", options: ["clean", "cleaned", "cleaning"], answer: "cleaned" },
            { type: "multiple-choice", question: "I ___ my grandmother last week.", options: ["visit", "visited", "visiting"], answer: "visited" },
            { type: "multiple-choice", question: "She ___ to music all evening.", options: ["listen", "listened", "listening"], answer: "listened" },
            { type: "fill-blank", question: "We ___ for the test all night.", answer: "studied" },
            { type: "fill-blank", question: "He ___ his car last weekend.", answer: "washed" }
        ]
    },
    {
        id: 14,
        title: "Future Simple Tense (will)",
        description: "will work, will play, will study",
        questions: [
            { type: "multiple-choice", question: "I ___ you tomorrow.", options: ["call", "will call", "called"], answer: "will call" },
            { type: "multiple-choice", question: "She ___ to the party next week.", options: ["come", "will come", "came"], answer: "will come" },
            { type: "multiple-choice", question: "We ___ dinner at 7 PM.", options: ["have", "will have", "had"], answer: "will have" },
            { type: "multiple-choice", question: "They ___ their homework tonight.", options: ["do", "will do", "did"], answer: "will do" },
            { type: "multiple-choice", question: "He ___ a new car next year.", options: ["buy", "will buy", "bought"], answer: "will buy" },
            { type: "multiple-choice", question: "Muhammad ___ to London next month.", options: ["travel", "will travel", "traveled"], answer: "will travel" },
            { type: "multiple-choice", question: "I ___ you with your project.", options: ["help", "will help", "helped"], answer: "will help" },
            { type: "multiple-choice", question: "The meeting ___ at 3 PM.", options: ["start", "will start", "started"], answer: "will start" },
            { type: "fill-blank", question: "She ___ the report by tomorrow evening.", answer: "will finish" },
            { type: "fill-blank", question: "We ___ early tomorrow morning.", answer: "will leave" }
        ]
    },
    {
        id: 15,
        title: "There is / There are",
        description: "There is a book, There are books",
        questions: [
            { type: "multiple-choice", question: "___ a book on the table.", options: ["There is", "There are", "There"], answer: "There is" },
            { type: "multiple-choice", question: "___ three chairs in the room.", options: ["There is", "There are", "There"], answer: "There are" },
            { type: "multiple-choice", question: "___ a cat in the garden.", options: ["There is", "There are", "There"], answer: "There is" },
            { type: "multiple-choice", question: "___ many people at the party.", options: ["There is", "There are", "There"], answer: "There are" },
            { type: "multiple-choice", question: "___ a problem with the computer.", options: ["There is", "There are", "There"], answer: "There is" },
            { type: "multiple-choice", question: "___ some milk in the fridge.", options: ["There is", "There are", "There"], answer: "There is" },
            { type: "multiple-choice", question: "___ two apples on the plate.", options: ["There is", "There are", "There"], answer: "There are" },
            { type: "multiple-choice", question: "___ a letter for you.", options: ["There is", "There are", "There"], answer: "There is" },
            { type: "fill-blank", question: "___ a pen in my bag if you need one.", answer: "There is" },
            { type: "fill-blank", question: "___ many students in the classroom today.", answer: "There are" }
        ]
    },
    {
        id: 16,
        title: "There was / There were",
        description: "There was a house, There were cars",
        questions: [
            { type: "multiple-choice", question: "___ a party last night.", options: ["There was", "There were", "There is"], answer: "There was" },
            { type: "multiple-choice", question: "___ many people at the concert.", options: ["There was", "There were", "There is"], answer: "There were" },
            { type: "multiple-choice", question: "___ a big tree in the garden.", options: ["There was", "There were", "There is"], answer: "There was" },
            { type: "multiple-choice", question: "___ three cats in the house.", options: ["There was", "There were", "There is"], answer: "There were" },
            { type: "multiple-choice", question: "___ a problem with the car.", options: ["There was", "There were", "There is"], answer: "There was" },
            { type: "multiple-choice", question: "___ some coffee in the cup.", options: ["There was", "There were", "There is"], answer: "There was" },
            { type: "multiple-choice", question: "___ two books on the table.", options: ["There was", "There were", "There is"], answer: "There were" },
            { type: "multiple-choice", question: "___ a beautiful sunset yesterday.", options: ["There was", "There were", "There is"], answer: "There was" },
            { type: "fill-blank", question: "___ a good film on TV last night.", answer: "There was" },
            { type: "fill-blank", question: "___ many students in the classroom yesterday.", answer: "There were" }
        ]
    },
    {
        id: 17,
        title: "Prepositions of Place",
        description: "in, on, under, behind, next to",
        questions: [
            { type: "multiple-choice", question: "The book is ___ the table.", options: ["in", "on", "at"], answer: "on" },
            { type: "multiple-choice", question: "The cat is ___ the box.", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "The ball is ___ the bed.", options: ["under", "on", "in"], answer: "under" },
            { type: "multiple-choice", question: "She is standing ___ the door.", options: ["behind", "on", "in"], answer: "behind" },
            { type: "multiple-choice", question: "The school is ___ the hospital.", options: ["next to", "in", "on"], answer: "next to" },
            { type: "multiple-choice", question: "Muhammad is ___ the classroom.", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "The keys are ___ the drawer.", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "The picture is ___ the wall.", options: ["on", "in", "at"], answer: "on" },
            { type: "fill-blank", question: "The cat is sleeping ___ the tree.", answer: "under" },
            { type: "fill-blank", question: "He is sitting right ___ me in the classroom.", answer: "next to" }
        ]
    },
    {
        id: 18,
        title: "Prepositions of Time",
        description: "in, on, at, morning, night, Monday",
        questions: [
            { type: "multiple-choice", question: "I go to work ___ the morning.", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "We have class ___ Monday.", options: ["in", "on", "at"], answer: "on" },
            { type: "multiple-choice", question: "The meeting starts ___ 9 o'clock.", options: ["in", "on", "at"], answer: "at" },
            { type: "multiple-choice", question: "My birthday is ___ July.", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "I'll see you ___ Friday.", options: ["in", "on", "at"], answer: "on" },
            { type: "multiple-choice", question: "Muhammad studies ___ the evening.", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "The shop closes ___ 6 PM.", options: ["in", "on", "at"], answer: "at" },
            { type: "multiple-choice", question: "We go on holiday ___ summer.", options: ["in", "on", "at"], answer: "in" },
            { type: "fill-blank", question: "I usually wake up ___ 7 AM every morning.", answer: "at" },
            { type: "fill-blank", question: "She was born ___ 1990 in London.", answer: "in" }
        ]
    },
    {
        id: 19,
        title: "Modal Verbs: Can / Could / Be able to",
        description: "ability and permission",
        questions: [
            { type: "multiple-choice", question: "I ___ swim when I was five.", options: ["can", "could", "am able to"], answer: "could" },
            { type: "multiple-choice", question: "She ___ speak three languages.", options: ["can", "could", "was able to"], answer: "can" },
            { type: "multiple-choice", question: "___ you help me with this?", options: ["Can", "Could", "Are able to"], answer: "Can" },
            { type: "multiple-choice", question: "They ___ come to the party yesterday.", options: ["can", "could", "were able to"], answer: "were able to" },
            { type: "multiple-choice", question: "___ I borrow your pen?", options: ["Can", "Could", "Am able to"], answer: "Can" },
            { type: "multiple-choice", question: "Muhammad ___ play the piano very well.", options: ["can", "could", "is able to"], answer: "can" },
            { type: "multiple-choice", question: "We ___ finish the project on time.", options: ["can", "could", "were able to"], answer: "were able to" },
            { type: "multiple-choice", question: "___ you open the window, please?", options: ["Can", "Could", "Are able to"], answer: "Could" },
            { type: "fill-blank", question: "I ___ speak French fluently.", answer: "can" },
            { type: "fill-blank", question: "He ___ solve the difficult problem.", answer: "was able to" }
        ]
    },
    {
        id: 20,
        title: "Modal Verbs: Must / Have to / Should",
        description: "obligation, necessity, advice",
        questions: [
            { type: "multiple-choice", question: "You ___ wear a seatbelt in the car.", options: ["must", "have to", "should"], answer: "must" },
            { type: "multiple-choice", question: "I ___ go to the bank today.", options: ["must", "have to", "should"], answer: "have to" },
            { type: "multiple-choice", question: "You ___ see that movie, it's great!", options: ["must", "have to", "should"], answer: "should" },
            { type: "multiple-choice", question: "Students ___ do their homework.", options: ["must", "have to", "should"], answer: "must" },
            { type: "multiple-choice", question: "We ___ be quiet in the library.", options: ["must", "have to", "should"], answer: "must" },
            { type: "multiple-choice", question: "Muhammad ___ study for his exam.", options: ["must", "has to", "should"], answer: "has to" },
            { type: "multiple-choice", question: "You ___ try this cake, it's delicious!", options: ["must", "have to", "should"], answer: "should" },
            { type: "multiple-choice", question: "I ___ wake up early tomorrow.", options: ["must", "have to", "should"], answer: "have to" },
            { type: "fill-blank", question: "You ___ drive on the left in the UK.", answer: "must" },
            { type: "fill-blank", question: "We ___ finish this report by today.", answer: "have to" }
        ]
    },
    {
        id: 21,
        title: "Used to",
        description: "past habits and states",
        questions: [
            { type: "multiple-choice", question: "I ___ play football when I was young.", options: ["used to", "use to", "am used to"], answer: "used to" },
            { type: "multiple-choice", question: "She ___ have long hair.", options: ["used to", "use to", "is used to"], answer: "used to" },
            { type: "multiple-choice", question: "We ___ live in London.", options: ["used to", "use to", "are used to"], answer: "used to" },
            { type: "multiple-choice", question: "He ___ smoke, but he quit last year.", options: ["used to", "use to", "is used to"], answer: "used to" },
            { type: "multiple-choice", question: "They ___ go to that school.", options: ["used to", "use to", "are used to"], answer: "used to" },
            { type: "multiple-choice", question: "Muhammad ___ drink coffee, but now he prefers tea.", options: ["used to", "use to", "is used to"], answer: "used to" },
            { type: "multiple-choice", question: "There ___ be a park here.", options: ["used to", "use to", "was used to"], answer: "used to" },
            { type: "multiple-choice", question: "I ___ like vegetables, but now I love them.", options: ["didn't use to", "didn't used to", "wasn't used to"], answer: "didn't use to" },
            { type: "fill-blank", question: "I ___ walk to school when I was a child.", answer: "used to" },
            { type: "fill-blank", question: "She ___ live in Paris before moving to London.", answer: "used to" }
        ]
    },
    {
        id: 22,
        title: "Needn't have vs Didn't need to",
        description: "unnecessary actions in the past",
        questions: [
            { type: "multiple-choice", question: "I ___ bought milk because we already had some.", options: ["needn't have", "didn't need to", "needn't to"], answer: "needn't have" },
            { type: "multiple-choice", question: "She ___ go to the bank because she had enough cash.", options: ["needn't have", "didn't need to", "needn't to"], answer: "didn't need to" },
            { type: "multiple-choice", question: "We ___ hurry because the train was late.", options: ["needn't have", "didn't need to", "needn't to"], answer: "didn't need to" },
            { type: "multiple-choice", question: "He ___ worry about the test because it was easy.", options: ["needn't have", "didn't need to", "needn't to"], answer: "didn't need to" },
            { type: "multiple-choice", question: "They ___ cook because we ordered pizza.", options: ["needn't have", "didn't need to", "needn't to"], answer: "didn't need to" },
            { type: "multiple-choice", question: "Muhammad ___ studied so hard for the easy exam.", options: ["needn't have", "didn't need to", "needn't to"], answer: "needn't have" },
            { type: "multiple-choice", question: "You ___ brought an umbrella because it didn't rain.", options: ["needn't have", "didn't need to", "needn't to"], answer: "needn't have" },
            { type: "multiple-choice", question: "I ___ call him because he called me first.", options: ["needn't have", "didn't need to", "needn't to"], answer: "didn't need to" },
            { type: "fill-blank", question: "She ___ bought tickets; they were already free.", answer: "needn't have" },
            { type: "fill-blank", question: "We ___ rush; we had plenty of time.", answer: "didn't need to" }
        ]
    },
    {
        id: 23,
        title: "WH-Questions",
        description: "who, what, where, when, why, how",
        questions: [
            { type: "multiple-choice", question: "___ is your name?", options: ["Who", "What", "Where"], answer: "What" },
            { type: "multiple-choice", question: "___ do you live?", options: ["Who", "What", "Where"], answer: "Where" },
            { type: "multiple-choice", question: "___ old are you?", options: ["How", "What", "When"], answer: "How" },
            { type: "multiple-choice", question: "___ is your birthday?", options: ["When", "What", "Where"], answer: "When" },
            { type: "multiple-choice", question: "___ is that man?", options: ["Who", "What", "Where"], answer: "Who" },
            { type: "multiple-choice", question: "___ do you study English?", options: ["Why", "What", "When"], answer: "Why" },
            { type: "multiple-choice", question: "___ is your favorite color?", options: ["What", "Who", "Where"], answer: "What" },
            { type: "multiple-choice", question: "___ does Muhammad work?", options: ["Where", "What", "When"], answer: "Where" },
            { type: "fill-blank", question: "___ time does the movie start?", answer: "What" },
            { type: "fill-blank", question: "___ are you going after class?", answer: "Where" }
        ]
    }
];

// Vocabulary data - DIRECTLY LINKED TO GRAMMAR TOPICS - TRANSLATION-BASED
const vocabularyTopics = [
    {
        id: 1,
        title: "Personal Pronouns",
        description: "I, you, he, she, it, we, they",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «я»:", options: ["I", "He", "We"], answer: "I" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «он»:", options: ["He", "She", "They"], answer: "He" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «она»:", options: ["She", "He", "They"], answer: "She" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «мы»:", options: ["We", "You", "They"], answer: "We" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «они»:", options: ["They", "We", "You"], answer: "They" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «оно»:", options: ["It", "He", "She"], answer: "It" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Ты мой друг.»", options: ["You are my friend.", "I am your friend.", "He is my friend."], answer: "You are my friend." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Вы студенты.»", options: ["You are students.", "We are students.", "They are students."], answer: "You are students." },
            { type: "fill-blank", question: "Переведите на английский: Он сейчас дома.", answer: "He is at home now." },
            { type: "fill-blank", question: "Переведите на английский: Мы хорошие друзья.", answer: "We are good friends." }
        ]
    },
    {
        id: 2,
        title: "Object Pronouns",
        description: "me, you, him, her, it, us, them",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «меня»:", options: ["me", "my", "I"], answer: "me" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «его»:", options: ["him", "his", "he"], answer: "him" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «её»:", options: ["her", "his", "she"], answer: "her" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «нас»:", options: ["us", "our", "we"], answer: "us" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «их»:", options: ["them", "their", "they"], answer: "them" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Она видит меня.»", options: ["She sees me.", "She sees you.", "She sees him."], answer: "She sees me." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я помогаю им.»", options: ["I help them.", "I help us.", "I help you."], answer: "I help them." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Он звонит тебе.»", options: ["He calls you.", "He calls me.", "He calls her."], answer: "He calls you." },
            { type: "fill-blank", question: "Переведите на английский: Она дала мне книгу.", answer: "She gave me a book." },
            { type: "fill-blank", question: "Переведите на английский: Я видел его вчера.", answer: "I saw him yesterday." }
        ]
    },
    {
        id: 3,
        title: "Possessive Adjectives",
        description: "my, your, his, her, its, our, their",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «мой»:", options: ["my", "your", "our"], answer: "my" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «твой»:", options: ["your", "my", "our"], answer: "your" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «его»:", options: ["his", "her", "their"], answer: "his" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «её»:", options: ["her", "his", "their"], answer: "her" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «наш»:", options: ["our", "your", "their"], answer: "our" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «их»:", options: ["their", "our", "your"], answer: "their" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Это мой дом.»", options: ["This is my house.", "This is your house.", "This is his house."], answer: "This is my house." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Это их машина.»", options: ["That is their car.", "That is our car.", "That is his car."], answer: "That is their car." },
            { type: "fill-blank", question: "Переведите на английский: Это его книга.", answer: "This is his book." },
            { type: "fill-blank", question: "Переведите на английский: Наш учитель очень добрый.", answer: "Our teacher is very kind." }
        ]
    },
    {
        id: 4,
        title: "Possessive Pronouns",
        description: "mine, yours, his, hers, its, ours, theirs",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «мой»:", options: ["mine", "my", "me"], answer: "mine" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «твой»:", options: ["yours", "your", "you"], answer: "yours" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «его»:", options: ["his", "him", "he"], answer: "his" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «её»:", options: ["hers", "her", "she"], answer: "hers" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «наш»:", options: ["ours", "our", "us"], answer: "ours" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «их»:", options: ["theirs", "their", "they"], answer: "theirs" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Эта книга моя.»", options: ["This book is mine.", "This book is yours.", "This book is his."], answer: "This book is mine." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Эти туфли наши.»", options: ["These shoes are ours.", "These shoes are yours.", "These shoes are theirs."], answer: "These shoes are ours." },
            { type: "fill-blank", question: "Переведите на английский: Эта сумка её.", answer: "This bag is hers." },
            { type: "fill-blank", question: "Переведите на английский: Эта победа их.", answer: "This victory is theirs." }
        ]
    },
    {
        id: 5,
        title: "Reflexive Pronouns",
        description: "myself, yourself, himself, herself, itself, ourselves, yourselves, themselves",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «сам»:", options: ["myself", "yourself", "himself"], answer: "myself" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «сам» (ты):", options: ["yourself", "myself", "himself"], answer: "yourself" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «сам» (он):", options: ["himself", "herself", "itself"], answer: "himself" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «сама»:", options: ["herself", "himself", "itself"], answer: "herself" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «сами»:", options: ["themselves", "ourselves", "yourselves"], answer: "themselves" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я сделал это сам.»", options: ["I did it myself.", "I did it for myself.", "I did it alone."], answer: "I did it myself." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Она купила себе платье.»", options: ["She bought herself a dress.", "She bought a dress herself.", "She bought a dress for him."], answer: "She bought herself a dress." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Они организовали вечеринку сами.»", options: ["They organized the party themselves.", "They organized the party for themselves.", "They organized the party together."], answer: "They organized the party themselves." },
            { type: "fill-blank", question: "Переведите на английский: Я приготовил этот торт сам.", answer: "I made this cake myself." },
            { type: "fill-blank", question: "Переведите на английский: Она разговаривала сама с собой.", answer: "She was talking to herself." }
        ]
    },
    {
        id: 6,
        title: "Cardinal Numbers",
        description: "one, two, three, ten, twenty, hundred",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «один»:", options: ["one", "first", "once"], answer: "one" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «два»:", options: ["two", "second", "twice"], answer: "two" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «десять»:", options: ["ten", "tenth", "dozen"], answer: "ten" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «двадцать»:", options: ["twenty", "twentieth", "twelve"], answer: "twenty" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «сто»:", options: ["hundred", "hundredth", "century"], answer: "hundred" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «У меня три яблока.»", options: ["I have three apples.", "I have third apple.", "I have thirty apples."], answer: "I have three apples." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «В неделе семь дней.»", options: ["There are seven days in a week.", "It's the seventh day of the week.", "There are seventy days in a week."], answer: "There are seven days in a week." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Ему пятнадцать лет.»", options: ["He is fifteen years old.", "It's his fiftieth year.", "He is fifty years old."], answer: "He is fifteen years old." },
            { type: "fill-blank", question: "Переведите на английский: У меня пять карандашей.", answer: "I have five pencils." },
            { type: "fill-blank", question: "Переведите на английский: В классе тридцать студентов.", answer: "There are thirty students in the class." }
        ]
    },
    {
        id: 7,
        title: "Ordinal Numbers",
        description: "first, second, third, fifth, tenth",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «первый»:", options: ["first", "one", "primary"], answer: "first" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «второй»:", options: ["second", "two", "secondary"], answer: "second" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «третий»:", options: ["third", "three", "triple"], answer: "third" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «пятый»:", options: ["fifth", "five", "fifteen"], answer: "fifth" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «десятый»:", options: ["tenth", "ten", "dozen"], answer: "tenth" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Это мой первый визит.»", options: ["This is my first visit.", "This is my one visit.", "This is my main visit."], answer: "This is my first visit." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Она живёт на восьмом этаже.»", options: ["She lives on the eighth floor.", "She lives on the eight floor.", "She lives on floor eight."], answer: "She lives on the eighth floor." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Сегодня пятое мая.»", options: ["Today is the fifth of May.", "Today is five May.", "Today is May fifth."], answer: "Today is the fifth of May." },
            { type: "fill-blank", question: "Переведите на английский: Это её третий день в школе.", answer: "This is her third day at school." },
            { type: "fill-blank", question: "Переведите на английский: Мой офис на втором этаже.", answer: "My office is on the second floor." }
        ]
    },
    {
        id: 8,
        title: "Demonstrative Pronouns",
        description: "This, That, These, Those",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «этот»:", options: ["this", "that", "these"], answer: "this" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «тот»:", options: ["that", "this", "it"], answer: "that" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «эти»:", options: ["these", "those", "this"], answer: "these" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «те»:", options: ["those", "these", "that"], answer: "those" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Это моя книга.»", options: ["This is my book.", "That is my book.", "These are my books."], answer: "This is my book." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Та машина быстрая.»", options: ["That car is fast.", "This car is fast.", "Those cars are fast."], answer: "That car is fast." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Эти цветы красивые.»", options: ["These flowers are beautiful.", "Those flowers are beautiful.", "This flower is beautiful."], answer: "These flowers are beautiful." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Те горы высокие.»", options: ["Those mountains are high.", "These mountains are high.", "That mountain is high."], answer: "Those mountains are high." },
            { type: "fill-blank", question: "Переведите на английский: Этот дом мой.", answer: "This house is mine." },
            { type: "fill-blank", question: "Переведите на английский: Те книги интересные.", answer: "Those books are interesting." }
        ]
    },
    {
        id: 9,
        title: "Verb 'To Be' - Present",
        description: "am, is, are",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я ... студент»:", options: ["am", "is", "are"], answer: "am" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Он ... мой брат»:", options: ["is", "am", "are"], answer: "is" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Мы ... друзья»:", options: ["are", "am", "is"], answer: "are" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Она ... доктор»:", options: ["is", "am", "are"], answer: "is" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Они ... из Лондона»:", options: ["are", "is", "am"], answer: "are" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Оно ... кот»:", options: ["is", "are", "am"], answer: "is" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Вы ... хороший учитель»:", options: ["are", "is", "am"], answer: "are" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я ... счастлив сегодня»:", options: ["am", "is", "are"], answer: "am" },
            { type: "fill-blank", question: "Переведите на английский: Она сейчас в школе.", answer: "She is at school now." },
            { type: "fill-blank", question: "Переведите на английский: Они счастливы сегодня.", answer: "They are happy today." }
        ]
    },
    {
        id: 10,
        title: "Verb 'To Be' - Past",
        description: "was, were",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я ... дома вчера»:", options: ["was", "were", "am"], answer: "was" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Они ... в Лондоне»:", options: ["were", "was", "are"], answer: "were" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Она ... уставшей»:", options: ["was", "were", "is"], answer: "was" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Мы ... счастливы»:", options: ["were", "was", "are"], answer: "were" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Он ... на вечеринке»:", options: ["was", "were", "is"], answer: "was" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Вы ... опоздали»:", options: ["were", "was", "are"], answer: "were" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Оно ... холодно вчера»:", options: ["was", "were", "is"], answer: "was" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Дети ... взволнованы»:", options: ["were", "was", "are"], answer: "were" },
            { type: "fill-blank", question: "Переведите на английский: Вчера было холодно.", answer: "It was cold yesterday." },
            { type: "fill-blank", question: "Переведите на английский: Мы были в кино вчера вечером.", answer: "We were at the cinema yesterday evening." }
        ]
    },
    {
        id: 11,
        title: "Verb 'To Be' - Future",
        description: "will be",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я ... дома завтра»:", options: ["will be", "was", "am"], answer: "will be" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Они ... в Париже»:", options: ["will be", "were", "are"], answer: "will be" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Она ... врачом»:", options: ["will be", "was", "is"], answer: "will be" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Мы ... рады помочь»:", options: ["will be", "were", "are"], answer: "will be" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Он ... здесь скоро»:", options: ["will be", "was", "is"], answer: "will be" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Вы ... удивлены»:", options: ["will be", "were", "are"], answer: "will be" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Погода ... хорошей»:", options: ["will be", "was", "is"], answer: "will be" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я ... готов через пять минут»:", options: ["will be", "was", "am"], answer: "will be" },
            { type: "fill-blank", question: "Переведите на английский: Я буду готов через пять минут.", answer: "I will be ready in five minutes." },
            { type: "fill-blank", question: "Переведите на английский: Они будут здесь в 5 часов.", answer: "They will be here at 5 o'clock." }
        ]
    },
    {
        id: 12,
        title: "Present Simple Tense",
        description: "I work, he works, they live, she studies",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я работаю.»", options: ["I work", "I worked", "I will work"], answer: "I work" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Он работает.»", options: ["He works", "He worked", "He will work"], answer: "He works" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Они живут.»", options: ["They live", "They lived", "They will live"], answer: "They live" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Она учится.»", options: ["She studies", "She studied", "She will study"], answer: "She studies" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я учу английский каждый день.»", options: ["I study English every day.", "I studied English every day.", "I will study English every day."], answer: "I study English every day." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Он ездит на работу на автобусе.»", options: ["He goes to work by bus.", "He went to work by bus.", "He will go to work by bus."], answer: "He goes to work by bus." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мы смотрим телевизор вечером.»", options: ["We watch TV in the evening.", "We watched TV in the evening.", "We will watch TV in the evening."], answer: "We watch TV in the evening." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Она работает в офисе.»", options: ["She works in an office.", "She worked in an office.", "She will work in an office."], answer: "She works in an office." },
            { type: "fill-blank", question: "Переведите на английский: Он живёт в Лондоне.", answer: "He lives in London." },
            { type: "fill-blank", question: "Переведите на английский: Мы играем в футбол по субботам.", answer: "We play football on Saturdays." }
        ]
    },
    {
        id: 13,
        title: "Past Simple Tense (Regular Verbs)",
        description: "worked, played, cleaned, visited",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «работал»:", options: ["worked", "work", "will work"], answer: "worked" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «играл»:", options: ["played", "play", "will play"], answer: "played" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «убирал»:", options: ["cleaned", "clean", "will clean"], answer: "cleaned" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «посещал»:", options: ["visited", "visit", "will visit"], answer: "visited" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я смотрел телевизор вчера.»", options: ["I watched TV yesterday.", "I watch TV yesterday.", "I will watch TV yesterday."], answer: "I watched TV yesterday." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Она закончила домашнее задание.»", options: ["She finished her homework.", "She finishes her homework.", "She will finish her homework."], answer: "She finished her homework." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мы ходили в парк.»", options: ["We walked to the park.", "We walk to the park.", "We will walk to the park."], answer: "We walked to the park." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Он помыл посуду.»", options: ["He washed the dishes.", "He washes the dishes.", "He will wash the dishes."], answer: "He washed the dishes." },
            { type: "fill-blank", question: "Переведите на английский: Они играли в футбол вчера.", answer: "They played football yesterday." },
            { type: "fill-blank", question: "Переведите на английский: Я посетил бабушку на прошлой неделе.", answer: "I visited my grandmother last week." }
        ]
    },
    {
        id: 14,
        title: "Future Simple Tense (will)",
        description: "will work, will play, will study",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «буду работать»:", options: ["will work", "work", "worked"], answer: "will work" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «буду играть»:", options: ["will play", "play", "played"], answer: "will play" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «буду учиться»:", options: ["will study", "study", "studied"], answer: "will study" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я позвоню тебе завтра.»", options: ["I will call you tomorrow.", "I call you tomorrow.", "I called you tomorrow."], answer: "I will call you tomorrow." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Она придёт на вечеринку.»", options: ["She will come to the party.", "She comes to the party.", "She came to the party."], answer: "She will come to the party." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мы поужинаем в 7 вечера.»", options: ["We will have dinner at 7 PM.", "We have dinner at 7 PM.", "We had dinner at 7 PM."], answer: "We will have dinner at 7 PM." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Они сделают домашнее задание.»", options: ["They will do their homework.", "They do their homework.", "They did their homework."], answer: "They will do their homework." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Он купит новую машину.»", options: ["He will buy a new car.", "He buys a new car.", "He bought a new car."], answer: "He will buy a new car." },
            { type: "fill-blank", question: "Переведите на английский: Она закончит отчёт завтра.", answer: "She will finish the report tomorrow." },
            { type: "fill-blank", question: "Переведите на английский: Мы уедем рано утром.", answer: "We will leave early in the morning." }
        ]
    },
    {
        id: 15,
        title: "There is / There are",
        description: "There is a book, There are books",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Есть ...» (для единственного числа):", options: ["There is", "There are", "There was"], answer: "There is" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Есть ...» (для множественного числа):", options: ["There are", "There is", "There were"], answer: "There are" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «На столе есть книга.»", options: ["There is a book on the table.", "There was a book on the table.", "There will be a book on the table."], answer: "There is a book on the table." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Есть три стула.»", options: ["There are three chairs.", "There were three chairs.", "There will be three chairs."], answer: "There are three chairs." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «В саду есть кот.»", options: ["There is a cat in the garden.", "There was a cat in the garden.", "There will be a cat in the garden."], answer: "There is a cat in the garden." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Есть много людей.»", options: ["There are many people.", "There were many people.", "There will be many people."], answer: "There are many people." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Есть проблема.»", options: ["There is a problem.", "There was a problem.", "There will be a problem."], answer: "There is a problem." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Есть два яблока.»", options: ["There are two apples.", "There were two apples.", "There will be two apples."], answer: "There are two apples." },
            { type: "fill-blank", question: "Переведите на английский: В моей сумке есть ручка.", answer: "There is a pen in my bag." },
            { type: "fill-blank", question: "Переведите на английский: В классе много студентов.", answer: "There are many students in the classroom." }
        ]
    },
    {
        id: 16,
        title: "There was / There were",
        description: "There was a house, There were cars",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Был ...» (единственное число):", options: ["There was", "There is", "There will be"], answer: "There was" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Были ...» (множественное число):", options: ["There were", "There are", "There will be"], answer: "There were" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Вчера вечером была вечеринка.»", options: ["There was a party last night.", "There is a party last night.", "There will be a party last night."], answer: "There was a party last night." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Было много людей.»", options: ["There were many people.", "There are many people.", "There will be many people."], answer: "There were many people." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Было большое дерево.»", options: ["There was a big tree.", "There is a big tree.", "There will be a big tree."], answer: "There was a big tree." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Были три кошки.»", options: ["There were three cats.", "There are three cats.", "There will be three cats."], answer: "There were three cats." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Была проблема.»", options: ["There was a problem.", "There is a problem.", "There will be a problem."], answer: "There was a problem." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Были две книги.»", options: ["There were two books.", "There are two books.", "There will be two books."], answer: "There were two books." },
            { type: "fill-blank", question: "Переведите на английский: Вчера был хороший фильм по телевизору.", answer: "There was a good film on TV yesterday." },
            { type: "fill-blank", question: "Переведите на английский: В классе вчера было много студентов.", answer: "There were many students in the classroom yesterday." }
        ]
    },
    {
        id: 17,
        title: "Prepositions of Place",
        description: "in, on, under, behind, next to",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «в»:", options: ["in", "on", "under"], answer: "in" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «на»:", options: ["on", "in", "under"], answer: "on" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «под»:", options: ["under", "on", "in"], answer: "under" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «за»:", options: ["behind", "in front of", "next to"], answer: "behind" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «рядом с»:", options: ["next to", "in front of", "behind"], answer: "next to" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Книга на столе.»", options: ["The book is on the table.", "The book is in the table.", "The book is under the table."], answer: "The book is on the table." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Кот в коробке.»", options: ["The cat is in the box.", "The cat is on the box.", "The cat is under the box."], answer: "The cat is in the box." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мяч под кроватью.»", options: ["The ball is under the bed.", "The ball is on the bed.", "The ball is in the bed."], answer: "The ball is under the bed." },
            { type: "fill-blank", question: "Переведите на английский: Кошка спит под деревом.", answer: "The cat is sleeping under the tree." },
            { type: "fill-blank", question: "Переведите на английский: Он сидит рядом со мной.", answer: "He is sitting next to me." }
        ]
    },
    {
        id: 18,
        title: "Prepositions of Time",
        description: "in, on, at, morning, night, Monday",
        questions: [
            { type: "multiple-choice", question: "Выберите правильный предлог для времени: «... утру»:", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "Выберите правильный предлог для дней недели: «... понедельник»:", options: ["on", "in", "at"], answer: "on" },
            { type: "multiple-choice", question: "Выберите правильный предлог для точного времени: «... 9 часов»:", options: ["at", "in", "on"], answer: "at" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я хожу на работу утром.»", options: ["I go to work in the morning.", "I go to work on the morning.", "I go to work at the morning."], answer: "I go to work in the morning." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «У нас занятия в понедельник.»", options: ["We have class on Monday.", "We have class in Monday.", "We have class at Monday."], answer: "We have class on Monday." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Встреча начинается в 9 часов.»", options: ["The meeting starts at 9 o'clock.", "The meeting starts in 9 o'clock.", "The meeting starts on 9 o'clock."], answer: "The meeting starts at 9 o'clock." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мой день рождения в июле.»", options: ["My birthday is in July.", "My birthday is on July.", "My birthday is at July."], answer: "My birthday is in July." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Увидимся в пятницу.»", options: ["I'll see you on Friday.", "I'll see you in Friday.", "I'll see you at Friday."], answer: "I'll see you on Friday." },
            { type: "fill-blank", question: "Переведите на английский: Обычно я просыпаюсь в 7 утра.", answer: "I usually wake up at 7 AM." },
            { type: "fill-blank", question: "Переведите на английский: Она родилась в 1990 году.", answer: "She was born in 1990." }
        ]
    },
    {
        id: 19,
        title: "Modal Verbs: Can / Could / Be able to",
        description: "ability and permission",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я могу ...»:", options: ["can", "could", "will be able to"], answer: "can" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я мог ...»:", options: ["could", "can", "was able to"], answer: "could" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я смог ...»:", options: ["was able to", "could", "can"], answer: "was able to" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я умею плавать.»", options: ["I can swim.", "I could swim.", "I will be able to swim."], answer: "I can swim." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я умел плавать, когда мне было пять.»", options: ["I could swim when I was five.", "I can swim when I was five.", "I will be able to swim when I was five."], answer: "I could swim when I was five." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Ты можешь помочь мне?»", options: ["Can you help me?", "Could you help me?", "Will you be able to help me?"], answer: "Can you help me?" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Они смогли прийти.»", options: ["They were able to come.", "They can come.", "They could come."], answer: "They were able to come." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Можно я возьму твою ручку?»", options: ["Can I borrow your pen?", "Could I borrow your pen?", "May I borrow your pen?"], answer: "Can I borrow your pen?" },
            { type: "fill-blank", question: "Переведите на английский: Я могу говорить по-французски.", answer: "I can speak French." },
            { type: "fill-blank", question: "Переведите на английский: Он смог решить проблему.", answer: "He was able to solve the problem." }
        ]
    },
    {
        id: 20,
        title: "Modal Verbs: Must / Have to / Should",
        description: "obligation, necessity, advice",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Ты должен ...» (обязательство):", options: ["must", "have to", "should"], answer: "must" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Мне нужно ...»:", options: ["have to", "must", "should"], answer: "have to" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Тебе следует ...»:", options: ["should", "must", "have to"], answer: "should" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Ты должен пристегнуться.»", options: ["You must wear a seatbelt.", "You have to wear a seatbelt.", "You should wear a seatbelt."], answer: "You must wear a seatbelt." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мне нужно сходить в банк.»", options: ["I have to go to the bank.", "I must go to the bank.", "I should go to the bank."], answer: "I have to go to the bank." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Тебе стоит посмотреть этот фильм.»", options: ["You should see that movie.", "You must see that movie.", "You have to see that movie."], answer: "You should see that movie." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Студенты должны делать домашнее задание.»", options: ["Students must do homework.", "Students have to do homework.", "Students should do homework."], answer: "Students must do homework." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мы должны быть тихими.»", options: ["We must be quiet.", "We have to be quiet.", "We should be quiet."], answer: "We must be quiet." },
            { type: "fill-blank", question: "Переведите на английский: Вы должны ехать слева в Великобритании.", answer: "You must drive on the left in the UK." },
            { type: "fill-blank", question: "Переведите на английский: Нам нужно закончить этот отчёт сегодня.", answer: "We have to finish this report today." }
        ]
    },
    {
        id: 21,
        title: "Used to",
        description: "past habits and states",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «раньше ...»:", options: ["used to", "use to", "am used to"], answer: "used to" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я раньше играл в футбол.»", options: ["I used to play football.", "I use to play football.", "I am used to playing football."], answer: "I used to play football." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «У неё раньше были длинные волосы.»", options: ["She used to have long hair.", "She use to have long hair.", "She is used to having long hair."], answer: "She used to have long hair." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мы раньше жили в Лондоне.»", options: ["We used to live in London.", "We use to live in London.", "We are used to living in London."], answer: "We used to live in London." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Он раньше курил.»", options: ["He used to smoke.", "He use to smoke.", "He is used to smoking."], answer: "He used to smoke." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Они раньше ходили в ту школу.»", options: ["They used to go to that school.", "They use to go to that school.", "They are used to going to that school."], answer: "They used to go to that school." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Раньше здесь был парк.»", options: ["There used to be a park here.", "There use to be a park here.", "There is used to being a park here."], answer: "There used to be a park here." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Раньше мне не нравились овощи.»", options: ["I didn't use to like vegetables.", "I didn't used to like vegetables.", "I wasn't used to liking vegetables."], answer: "I didn't use to like vegetables." },
            { type: "fill-blank", question: "Переведите на английский: Я раньше ходил в школу пешком.", answer: "I used to walk to school." },
            { type: "fill-blank", question: "Переведите на английский: Она раньше жила в Париже.", answer: "She used to live in Paris." }
        ]
    },
    {
        id: 22,
        title: "Needn't have vs Didn't need to",
        description: "unnecessary actions in the past",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «не нужно было ...»:", options: ["didn't need to", "needn't have", "needn't to"], answer: "didn't need to" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «не нужно было ...» (но сделал):", options: ["needn't have", "didn't need to", "needn't to"], answer: "needn't have" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мне не нужно было покупать молоко.»", options: ["I didn't need to buy milk.", "I needn't have bought milk.", "I needn't to buy milk."], answer: "I didn't need to buy milk." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Ей не нужно было идти в банк.»", options: ["She didn't need to go to the bank.", "She needn't have gone to the bank.", "She needn't to go to the bank."], answer: "She didn't need to go to the bank." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Нам не нужно было спешить.»", options: ["We didn't need to hurry.", "We needn't have hurried.", "We needn't to hurry."], answer: "We didn't need to hurry." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Ему не нужно было волноваться.»", options: ["He didn't need to worry.", "He needn't have worried.", "He needn't to worry."], answer: "He didn't need to worry." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Им не нужно было готовить.»", options: ["They didn't need to cook.", "They needn't have cooked.", "They needn't to cook."], answer: "They didn't need to cook." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Тебе не нужно было брать зонт.»", options: ["You didn't need to bring an umbrella.", "You needn't have brought an umbrella.", "You needn't to bring an umbrella."], answer: "You didn't need to bring an umbrella." },
            { type: "fill-blank", question: "Переведите на английский: Ей не нужно было покупать билеты.", answer: "She didn't need to buy tickets." },
            { type: "fill-blank", question: "Переведите на английский: Нам не нужно было спешить.", answer: "We didn't need to hurry." }
        ]
    },
    {
        id: 23,
        title: "WH-Questions",
        description: "who, what, where, when, why, how",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «что»:", options: ["what", "who", "where"], answer: "what" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «где»:", options: ["where", "when", "why"], answer: "where" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «когда»:", options: ["when", "where", "why"], answer: "when" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «кто»:", options: ["who", "what", "which"], answer: "who" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «почему»:", options: ["why", "when", "how"], answer: "why" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «как»:", options: ["how", "what", "which"], answer: "how" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Как тебя зовут?»", options: ["What is your name?", "Who are you?", "Where are you?"], answer: "What is your name?" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Где ты живёшь?»", options: ["Where do you live?", "When do you live?", "Why do you live?"], answer: "Where do you live?" },
            { type: "fill-blank", question: "Переведите на английский: Сколько тебе лет?", answer: "How old are you?" },
            { type: "fill-blank", question: "Переведите на английский: Когда начинается фильм?", answer: "When does the film start?" }
        ]
    }
];

const createA2B2MultipleChoice = (question, options, answer) => ({
    type: "multiple-choice",
    question,
    options,
    answer
});

const createA2B2FillBlank = (question, answer) => ({
    type: "fill-blank",
    question,
    answer
});

const a2ToB2TopicBank = [
    {
        id: 1,
        title: "Chapter 1 - Present Continuous",
        description: "A2-B2 | p. 3-5 | QR",
        questions: [
            createA2B2MultipleChoice("She ___ dinner right now.", ["is cooking", "cooks", "has cooked"], "is cooking"),
            createA2B2MultipleChoice("Listen! The baby ___.", ["is crying", "cries", "cried"], "is crying"),
            createA2B2MultipleChoice("They ___ for the exam at the moment.", ["are studying", "study", "studied"], "are studying"),
            createA2B2MultipleChoice("I ___ with my cousin this week.", ["am staying", "stay", "stayed"], "am staying"),
            createA2B2MultipleChoice("Why ___ you smiling?", ["are", "do", "have"], "are"),
            createA2B2MultipleChoice("He usually takes the bus, but today he ___ home.", ["is walking", "walks", "walked"], "is walking"),
            createA2B2MultipleChoice("We ___ on a new project these days.", ["are working", "work", "have worked"], "are working"),
            createA2B2MultipleChoice("The students ___ a video lesson now.", ["are watching", "watch", "watched"], "are watching"),
            createA2B2FillBlank("I ___ my teacher after class right now.", "am meeting"),
            createA2B2FillBlank("They ___ their homework at the moment.", "are doing")
        ]
    },
    {
        id: 2,
        title: "Chapter 2 - Past Continuous",
        description: "A2-B2 | p. 8-10 | QR",
        questions: [
            createA2B2MultipleChoice("At 8 PM last night, I ___ for my exam.", ["was studying", "studied", "have studied"], "was studying"),
            createA2B2MultipleChoice("She ___ dinner when the lights went out.", ["was making", "made", "has made"], "was making"),
            createA2B2MultipleChoice("They ___ tennis when it started to rain.", ["were playing", "played", "have played"], "were playing"),
            createA2B2MultipleChoice("While we ___ home, we saw an accident.", ["were walking", "walked", "have walked"], "were walking"),
            createA2B2MultipleChoice("What ___ he doing when you called?", ["was", "is", "did"], "was"),
            createA2B2MultipleChoice("The children ___ quietly when the teacher entered.", ["were talking", "talked", "have talked"], "were talking"),
            createA2B2MultipleChoice("I ___ attention when the manager asked me a question.", ["was not paying", "did not pay", "have not paid"], "was not paying"),
            createA2B2MultipleChoice("It ___ heavily all evening.", ["was raining", "rained", "has rained"], "was raining"),
            createA2B2FillBlank("We ___ for the bus when our friend arrived.", "were waiting"),
            createA2B2FillBlank("She ___ a book at 10 o'clock last night.", "was reading")
        ]
    },
    {
        id: 3,
        title: "Chapter 3 - Future Continuous",
        description: "A2-B2 | p. 13-15 | QR",
        questions: [
            createA2B2MultipleChoice("This time tomorrow, I ___ to Samarkand.", ["will be traveling", "travel", "am traveling"], "will be traveling"),
            createA2B2MultipleChoice("At 9 PM tonight, they ___ for the presentation.", ["will be preparing", "prepare", "prepared"], "will be preparing"),
            createA2B2MultipleChoice("Do not call her at 7; she ___ dinner then.", ["will be having", "has", "had"], "will be having"),
            createA2B2MultipleChoice("Next week, we ___ in the new office.", ["will be working", "work", "worked"], "will be working"),
            createA2B2MultipleChoice("At noon tomorrow, what ___ you be doing?", ["will", "do", "are"], "will"),
            createA2B2MultipleChoice("The team ___ on the project all day Friday.", ["will be working", "worked", "has worked"], "will be working"),
            createA2B2MultipleChoice("He ___ for his exam at midnight.", ["will be studying", "studies", "studied"], "will be studying"),
            createA2B2MultipleChoice("This weekend, I ___ with relatives.", ["will be staying", "stay", "stayed"], "will be staying"),
            createA2B2FillBlank("At 6 AM tomorrow, we ___ to the airport.", "will be driving"),
            createA2B2FillBlank("She ___ in the library this afternoon.", "will be studying")
        ]
    },
    {
        id: 4,
        title: "Chapter 4 - Present Perfect",
        description: "A2-B2 | p. 18-20 | QR",
        questions: [
            createA2B2MultipleChoice("I ___ my homework already.", ["have finished", "finished", "am finishing"], "have finished"),
            createA2B2MultipleChoice("She ___ to Bukhara three times.", ["has been", "went", "is going"], "has been"),
            createA2B2MultipleChoice("We ___ each other since 2021.", ["have known", "knew", "know"], "have known"),
            createA2B2MultipleChoice("He is not hungry because he ___ lunch.", ["has eaten", "ate", "was eating"], "has eaten"),
            createA2B2MultipleChoice("They ___ the results.", ["have just received", "received", "receive"], "have just received"),
            createA2B2MultipleChoice("I ___ that movie before.", ["have never seen", "never saw", "am never seeing"], "have never seen"),
            createA2B2MultipleChoice("How long ___ here?", ["have you lived", "did you live", "are you living"], "have you lived"),
            createA2B2MultipleChoice("My brother ___ a new job recently.", ["has started", "started", "is starting"], "has started"),
            createA2B2FillBlank("We ___ this book before, so we know the ending.", "have read"),
            createA2B2FillBlank("I ___ my keys, so I cannot open the door.", "have lost")
        ]
    },
    {
        id: 5,
        title: "Chapter 5 - Past Perfect",
        description: "A2-B2 | p. 23-25 | QR",
        questions: [
            createA2B2MultipleChoice("By the time we arrived, the film ___.", ["had started", "started", "has started"], "had started"),
            createA2B2MultipleChoice("She was tired because she ___ all night.", ["had worked", "worked", "has worked"], "had worked"),
            createA2B2MultipleChoice("After he ___ the room, he locked the door.", ["had left", "left", "has left"], "had left"),
            createA2B2MultipleChoice("They ___ the test before the teacher came in.", ["had completed", "completed", "have completed"], "had completed"),
            createA2B2MultipleChoice("I realized that I ___ my wallet at home.", ["had forgotten", "forgot", "have forgotten"], "had forgotten"),
            createA2B2MultipleChoice("When we got to the airport, the plane ___.", ["had already left", "already left", "has already left"], "had already left"),
            createA2B2MultipleChoice("He knew the city well because he ___ there before.", ["had lived", "lived", "has lived"], "had lived"),
            createA2B2MultipleChoice("The shop was empty because everyone ___.", ["had gone", "went", "has gone"], "had gone"),
            createA2B2FillBlank("She ___ the email before the meeting started.", "had sent"),
            createA2B2FillBlank("We ___ dinner before the guests arrived.", "had prepared")
        ]
    },
    {
        id: 6,
        title: "Chapter 6 - Future Perfect",
        description: "A2-B2 | p. 28-30 | QR",
        questions: [
            createA2B2MultipleChoice("By next June, I ___ my English course.", ["will have completed", "complete", "have completed"], "will have completed"),
            createA2B2MultipleChoice("She ___ the report by noon.", ["will have finished", "finishes", "finished"], "will have finished"),
            createA2B2MultipleChoice("They ___ the bridge by the end of the year.", ["will have built", "build", "have built"], "will have built"),
            createA2B2MultipleChoice("By the time you arrive, we ___ the room.", ["will have cleaned", "clean", "are cleaning"], "will have cleaned"),
            createA2B2MultipleChoice("I ___ all the chapters before the exam.", ["will have studied", "study", "am studying"], "will have studied"),
            createA2B2MultipleChoice("By this evening, he ___ 20 emails.", ["will have answered", "answers", "answered"], "will have answered"),
            createA2B2MultipleChoice("The teacher ___ the papers before class begins.", ["will have checked", "checks", "checked"], "will have checked"),
            createA2B2MultipleChoice("By the end of the month, we ___ the project.", ["will have completed", "complete", "are completing"], "will have completed"),
            createA2B2FillBlank("By Friday, they ___ all the invitations.", "will have sent"),
            createA2B2FillBlank("By the time the guests arrive, I ___ the cake.", "will have baked")
        ]
    },
    {
        id: 7,
        title: "Chapter 7 - Present Simple Passive",
        description: "A2-B2 | p. 33-35 | QR",
        questions: [
            createA2B2MultipleChoice("English ___ in many countries.", ["is spoken", "speaks", "is speaking"], "is spoken"),
            createA2B2MultipleChoice("The letters ___ every morning.", ["are delivered", "deliver", "are delivering"], "are delivered"),
            createA2B2MultipleChoice("This room ___ every day.", ["is cleaned", "cleans", "is cleaning"], "is cleaned"),
            createA2B2MultipleChoice("Coffee ___ here until 10 PM.", ["is served", "serves", "is serving"], "is served"),
            createA2B2MultipleChoice("Mobile phones ___ in the exam hall.", ["are not allowed", "do not allow", "are not allowing"], "are not allowed"),
            createA2B2MultipleChoice("The museum ___ on Mondays.", ["is closed", "closes", "is closing"], "is closed"),
            createA2B2MultipleChoice("The best students ___ at the ceremony.", ["are rewarded", "reward", "are rewarding"], "are rewarded"),
            createA2B2MultipleChoice("The news ___ on television every evening.", ["is announced", "announces", "is announcing"], "is announced"),
            createA2B2FillBlank("Fresh bread ___ in this bakery every morning.", "is sold"),
            createA2B2FillBlank("The results ___ online after each test.", "are posted")
        ]
    },
    {
        id: 8,
        title: "Chapter 8 - Past Simple Passive",
        description: "A2-B2 | p. 38-40 | QR",
        questions: [
            createA2B2MultipleChoice("The bridge ___ in 1998.", ["was built", "built", "was building"], "was built"),
            createA2B2MultipleChoice("The documents ___ yesterday afternoon.", ["were sent", "sent", "were sending"], "were sent"),
            createA2B2MultipleChoice("The thief ___ by the police.", ["was arrested", "arrested", "was arresting"], "was arrested"),
            createA2B2MultipleChoice("The windows ___ last week.", ["were cleaned", "cleaned", "were cleaning"], "were cleaned"),
            createA2B2MultipleChoice("The match ___ because of rain.", ["was canceled", "canceled", "was canceling"], "was canceled"),
            createA2B2MultipleChoice("The invitations ___ by email.", ["were delivered", "delivered", "were delivering"], "were delivered"),
            createA2B2MultipleChoice("Her bag ___ at the station.", ["was found", "found", "was finding"], "was found"),
            createA2B2MultipleChoice("The photos ___ last summer.", ["were taken", "took", "were taking"], "were taken"),
            createA2B2FillBlank("The old computer ___ yesterday.", "was repaired"),
            createA2B2FillBlank("The winners ___ at the end of the event.", "were announced")
        ]
    },
    {
        id: 9,
        title: "Chapter 9 - Future Passive",
        description: "A2-B2 | p. 43-45 | QR",
        questions: [
            createA2B2MultipleChoice("The project ___ next month.", ["will be completed", "will complete", "is completing"], "will be completed"),
            createA2B2MultipleChoice("New rules ___ tomorrow.", ["will be announced", "announce", "are announcing"], "will be announced"),
            createA2B2MultipleChoice("The students ___ by email.", ["will be informed", "will inform", "inform"], "will be informed"),
            createA2B2MultipleChoice("The hall ___ for the conference.", ["will be prepared", "will prepare", "prepares"], "will be prepared"),
            createA2B2MultipleChoice("The winners ___ next week.", ["will be invited", "invite", "are inviting"], "will be invited"),
            createA2B2MultipleChoice("Dinner ___ at 8 PM.", ["will be served", "will serve", "serves"], "will be served"),
            createA2B2MultipleChoice("The exams ___ in June.", ["will be held", "will hold", "hold"], "will be held"),
            createA2B2MultipleChoice("The final version ___ soon.", ["will be published", "publishes", "will publish"], "will be published"),
            createA2B2FillBlank("All applications ___ by the committee tomorrow.", "will be checked"),
            createA2B2FillBlank("The rooms ___ before the guests arrive.", "will be cleaned")
        ]
    },
    {
        id: 10,
        title: "Chapter 10 - Would",
        description: "A2-B2 | p. 48-50 | QR",
        questions: [
            createA2B2MultipleChoice("When I was a child, I ___ visit my grandmother every weekend.", ["would", "will", "am going to"], "would"),
            createA2B2MultipleChoice("___ you like some tea?", ["Would", "Will", "Do"], "Would"),
            createA2B2MultipleChoice("He said he ___ help us after work.", ["would", "will", "is going to"], "would"),
            createA2B2MultipleChoice("If I had more free time, I ___ learn Spanish.", ["would", "will", "would have"], "would"),
            createA2B2MultipleChoice("She ___ always bring homemade cakes to class.", ["would", "will", "used"], "would"),
            createA2B2MultipleChoice("I ___ rather stay at home tonight.", ["would", "will", "am"], "would"),
            createA2B2MultipleChoice("They promised they ___ arrive early.", ["would", "will", "are going to"], "would"),
            createA2B2MultipleChoice("___ you mind opening the window?", ["Would", "Will", "Are"], "Would"),
            createA2B2FillBlank("If I were you, I ___ talk to the teacher.", "would"),
            createA2B2FillBlank("My grandfather ___ tell us stories every evening.", "would")
        ]
    },
    {
        id: 11,
        title: "Chapter 11 - Will",
        description: "A2-B2 | p. 53-55 | QR",
        questions: [
            createA2B2MultipleChoice("I think it ___ rain later.", ["will", "is going to", "has"], "will"),
            createA2B2MultipleChoice("Do not worry, I ___ you with your homework.", ["will help", "help", "am helping"], "will help"),
            createA2B2MultipleChoice("The phone is ringing. I ___ it.", ["will answer", "answer", "am answering"], "will answer"),
            createA2B2MultipleChoice("Perhaps she ___ the answer.", ["will know", "knows", "is knowing"], "will know"),
            createA2B2MultipleChoice("I promise I ___ more carefully next time.", ["will drive", "drive", "am driving"], "will drive"),
            createA2B2MultipleChoice("I am thirsty. I ___ some water.", ["will get", "get", "am getting"], "will get"),
            createA2B2MultipleChoice("I am sure they ___ on time.", ["will arrive", "arrive", "arrived"], "will arrive"),
            createA2B2MultipleChoice("Do you think your team ___ the match?", ["will win", "wins", "won"], "will win"),
            createA2B2FillBlank("I ___ you tonight after the meeting.", "will call"),
            createA2B2FillBlank("He probably ___ the exam if he studies hard.", "will pass")
        ]
    },
    {
        id: 12,
        title: "Chapter 12 - Be Going To",
        description: "A2-B2 | p. 58-60 | QR",
        questions: [
            createA2B2MultipleChoice("Look at those clouds! It ___ rain.", ["is going to", "will", "has"], "is going to"),
            createA2B2MultipleChoice("We ___ visit our uncle this weekend.", ["are going to", "will", "have"], "are going to"),
            createA2B2MultipleChoice("She ___ study medicine next year.", ["is going to", "will", "has"], "is going to"),
            createA2B2MultipleChoice("They bought paint. They ___ the kitchen.", ["are going to paint", "paint", "painted"], "are going to paint"),
            createA2B2MultipleChoice("My brother ___ buy a new laptop soon.", ["is going to", "will", "has"], "is going to"),
            createA2B2MultipleChoice("Who ___ cook tonight?", ["is going to", "will", "did"], "is going to"),
            createA2B2MultipleChoice("We saved money because we ___ a car.", ["are going to buy", "buy", "bought"], "are going to buy"),
            createA2B2MultipleChoice("He ___ start a business after university.", ["is going to", "will", "has"], "is going to"),
            createA2B2FillBlank("They ___ move to a new apartment next month.", "are going to"),
            createA2B2FillBlank("She ___ take the bus, because her car is broken.", "is going to")
        ]
    },
    {
        id: 13,
        title: "Chapter 13 - Used To",
        description: "A2-B2 | p. 63-65 | QR",
        questions: [
            createA2B2MultipleChoice("I ___ play outside every evening when I was a child.", ["used to", "am used to", "get used to"], "used to"),
            createA2B2MultipleChoice("She ___ live in Bukhara before moving to Dushanbe.", ["used to", "is used to", "gets used to"], "used to"),
            createA2B2MultipleChoice("There ___ be a cinema here years ago.", ["used to", "was used to", "got used to"], "used to"),
            createA2B2MultipleChoice("My father ___ smoke, but he stopped.", ["used to", "is used to", "gets used to"], "used to"),
            createA2B2MultipleChoice("Did you ___ walk to school?", ["use to", "used to", "are used to"], "use to"),
            createA2B2MultipleChoice("I did not ___ like coffee, but now I do.", ["use to", "used to", "am used to"], "use to"),
            createA2B2MultipleChoice("They ___ visit us every summer.", ["used to", "are used to", "get used to"], "used to"),
            createA2B2MultipleChoice("He ___ be very shy at school.", ["used to", "is used to", "gets used to"], "used to"),
            createA2B2FillBlank("We ___ live near the river when we were children.", "used to"),
            createA2B2FillBlank("She ___ wear glasses at university.", "used to")
        ]
    },
    {
        id: 14,
        title: "Chapter 14 - Be Used To",
        description: "A2-B2 | p. 68-70 | QR",
        questions: [
            createA2B2MultipleChoice("I am used to ___ up early.", ["getting", "get", "got"], "getting"),
            createA2B2MultipleChoice("She ___ city traffic now.", ["is used to", "used to", "gets used to"], "is used to"),
            createA2B2MultipleChoice("They ___ spicy food yet.", ["are not used to", "did not use to", "do not get used to"], "are not used to"),
            createA2B2MultipleChoice("After two years in London, he ___ driving on the left.", ["is used to", "used to", "gets used to"], "is used to"),
            createA2B2MultipleChoice("We are used to ___ in teams.", ["working", "work", "worked"], "working"),
            createA2B2MultipleChoice("My grandmother is used to ___ very early.", ["waking up", "wake up", "woke up"], "waking up"),
            createA2B2MultipleChoice("I was nervous at first, but now I ___ speaking in public.", ["am used to", "used to", "get used to"], "am used to"),
            createA2B2MultipleChoice("She ___ the cold weather now.", ["is used to", "used to", "gets used to"], "is used to"),
            createA2B2FillBlank("He is used to ___ long hours every day.", "working"),
            createA2B2FillBlank("We are used to ___ online meetings.", "having")
        ]
    },
    {
        id: 15,
        title: "Chapter 15 - Get Used To",
        description: "A2-B2 | p. 73-75 | QR",
        questions: [
            createA2B2MultipleChoice("It takes time to ___ waking up early.", ["get used to", "be used to", "used to"], "get used to"),
            createA2B2MultipleChoice("He is slowly ___ the weather in Canada.", ["getting used to", "used to", "being used to"], "getting used to"),
            createA2B2MultipleChoice("You will ___ the new schedule soon.", ["get used to", "be used to", "used to"], "get used to"),
            createA2B2MultipleChoice("She is finding it hard to ___ speaking English every day.", ["get used to", "be used to", "used to"], "get used to"),
            createA2B2MultipleChoice("After a few weeks, they ___ working together.", ["got used to", "were used to", "used to"], "got used to"),
            createA2B2MultipleChoice("I am sure you will ___ the noise.", ["get used to", "be used to", "used to"], "get used to"),
            createA2B2MultipleChoice("We did not like online classes at first, but we ___ them.", ["got used to", "used to", "were used"], "got used to"),
            createA2B2MultipleChoice("Children usually ___ new schools quickly.", ["get used to", "are used to", "used to"], "get used to"),
            createA2B2FillBlank("She will soon ___ living alone.", "get used to"),
            createA2B2FillBlank("After several months, he ___ driving in heavy traffic.", "got used to")
        ]
    }
];

const a2ToB2AdvancedAdditions = {
    1: [
        createA2B2MultipleChoice("Researchers ___ increasingly on digital archives when primary sources are difficult to access.", ["are relying", "rely", "have relied"], "are relying"),
        createA2B2MultipleChoice("This semester, our lecturer ___ particular attention to academic writing conventions.", ["is giving", "gives", "has given"], "is giving"),
        createA2B2MultipleChoice("Why ___ you constantly interrupting the speaker during the briefing?", ["are", "do", "have"], "are"),
        createA2B2MultipleChoice("More and more cities ___ in cycle lanes to reduce pollution.", ["are investing", "invest", "have invested"], "are investing"),
        createA2B2MultipleChoice("At present, the faculty ___ whether the new syllabus meets international standards.", ["is reviewing", "reviews", "reviewed"], "is reviewing"),
        createA2B2MultipleChoice("I ___ a short course in pronunciation this month to improve my fluency.", ["am taking", "take", "have taken"], "am taking"),
        createA2B2MultipleChoice("The economy ___ more slowly than analysts predicted.", ["is recovering", "recovers", "has recovered"], "is recovering"),
        createA2B2MultipleChoice("Several students ___ part in the debating competition this week.", ["are taking", "take", "took"], "are taking"),
        createA2B2FillBlank("The climate ___ faster than many governments expected.", "is changing"),
        createA2B2FillBlank("We ___ whether the proposal is financially sustainable.", "are evaluating")
    ],
    2: [
        createA2B2MultipleChoice("At the time of the inspection, the engineers ___ the safety equipment.", ["were testing", "tested", "have tested"], "were testing"),
        createA2B2MultipleChoice("While the committee ___ the final report, new evidence emerged.", ["was reviewing", "reviewed", "has reviewed"], "was reviewing"),
        createA2B2MultipleChoice("The audience ___ attentively when the fire alarm sounded.", ["was listening", "listened", "has listened"], "was listening"),
        createA2B2MultipleChoice("I ___ home when I realized I had left my passport in the hotel.", ["was driving", "drove", "have driven"], "was driving"),
        createA2B2MultipleChoice("What ___ the researchers discussing when the interview began?", ["were", "are", "did"], "were"),
        createA2B2MultipleChoice("The company ___ well until demand suddenly fell.", ["was performing", "performed", "has performed"], "was performing"),
        createA2B2MultipleChoice("She ___ over the contract when her lawyer called.", ["was going", "went", "has gone"], "was going"),
        createA2B2MultipleChoice("The students ___ notes while the professor was explaining the theory.", ["were taking", "took", "have taken"], "were taking"),
        createA2B2FillBlank("When I arrived, they ___ whether the data could be trusted.", "were debating"),
        createA2B2FillBlank("He ___ for a scholarship at that point in his career.", "was applying")
    ],
    3: [
        createA2B2MultipleChoice("This time next week, the delegation ___ with international partners in Geneva.", ["will be meeting", "meets", "is meeting"], "will be meeting"),
        createA2B2MultipleChoice("At 10 tomorrow morning, I ___ my oral exam, so please do not call.", ["will be taking", "take", "am taking"], "will be taking"),
        createA2B2MultipleChoice("Will you ___ the seminar this afternoon, or shall I send the notes?", ["be attending", "attend", "have attended"], "be attending"),
        createA2B2MultipleChoice("By mid-July, we ___ on the final chapter of the dissertation.", ["will be working", "work", "have worked"], "will be working"),
        createA2B2MultipleChoice("At that stage, the company ___ whether to expand into Asia.", ["will be deciding", "decides", "decided"], "will be deciding"),
        createA2B2MultipleChoice("This evening, many applicants ___ anxiously for the results.", ["will be waiting", "wait", "are waiting"], "will be waiting"),
        createA2B2MultipleChoice("Next month, she ___ at Oxford as part of the exchange programme.", ["will be studying", "studies", "studied"], "will be studying"),
        createA2B2MultipleChoice("In an hour, the children ___ their grandparents at the station.", ["will be meeting", "meet", "met"], "will be meeting"),
        createA2B2FillBlank("At 8 PM tonight, I ___ the keynote speech online.", "will be watching"),
        createA2B2FillBlank("This time tomorrow, they ___ the final details of the agreement.", "will be discussing")
    ],
    4: [
        createA2B2MultipleChoice("Scientists ___ significant progress in renewable energy over the past decade.", ["have made", "made", "are making"], "have made"),
        createA2B2MultipleChoice("She ___ several articles for academic journals since graduating.", ["has written", "wrote", "is writing"], "has written"),
        createA2B2MultipleChoice("We ___ the issue repeatedly, but no one has offered a practical solution.", ["have discussed", "discussed", "are discussing"], "have discussed"),
        createA2B2MultipleChoice("The minister ___ a statement on the crisis.", ["has just issued", "just issued", "is just issuing"], "has just issued"),
        createA2B2MultipleChoice("I ___ this author before, but this novel is remarkably compelling.", ["have not read", "did not read", "am not reading"], "have not read"),
        createA2B2MultipleChoice("How many times ___ that museum?", ["have you visited", "did you visit", "are you visiting"], "have you visited"),
        createA2B2MultipleChoice("They ___ great resilience since the company restructured.", ["have shown", "showed", "are showing"], "have shown"),
        createA2B2MultipleChoice("My views on the topic ___ considerably in recent years.", ["have changed", "changed", "change"], "have changed"),
        createA2B2FillBlank("He ___ in three international conferences this year.", "has spoken"),
        createA2B2FillBlank("We ___ each other for so long that formalities feel unnecessary.", "have known")
    ],
    5: [
        createA2B2MultipleChoice("By the time the verdict was announced, the public ___ its opinion.", ["had already formed", "already formed", "has already formed"], "had already formed"),
        createA2B2MultipleChoice("She apologized because she ___ the email to the wrong person.", ["had sent", "sent", "has sent"], "had sent"),
        createA2B2MultipleChoice("They were relieved because they ___ the problem before it became serious.", ["had solved", "solved", "have solved"], "had solved"),
        createA2B2MultipleChoice("I recognized the melody immediately because I ___ it before.", ["had heard", "heard", "have heard"], "had heard"),
        createA2B2MultipleChoice("After the researchers ___ the data, they revised their conclusions.", ["had analyzed", "analyzed", "have analyzed"], "had analyzed"),
        createA2B2MultipleChoice("He could not enter the building because he ___ his ID card at home.", ["had left", "left", "has left"], "had left"),
        createA2B2MultipleChoice("The novel felt familiar because I ___ an excerpt online.", ["had read", "read", "have read"], "had read"),
        createA2B2MultipleChoice("Once we ___ the terms carefully, we decided not to sign the contract.", ["had reviewed", "reviewed", "have reviewed"], "had reviewed"),
        createA2B2FillBlank("By the time help arrived, the villagers ___ the fire under control.", "had brought"),
        createA2B2FillBlank("She was exhausted because she ___ all night for the interview.", "had rehearsed")
    ],
    6: [
        createA2B2MultipleChoice("By the end of this term, students ___ every major tense in the syllabus.", ["will have covered", "cover", "have covered"], "will have covered"),
        createA2B2MultipleChoice("The researchers ___ the trial by next autumn.", ["will have completed", "complete", "are completing"], "will have completed"),
        createA2B2MultipleChoice("By 2030, many cities ___ stricter environmental laws.", ["will have introduced", "introduce", "have introduced"], "will have introduced"),
        createA2B2MultipleChoice("I ___ the report before the board meeting begins.", ["will have finished", "finish", "am finishing"], "will have finished"),
        createA2B2MultipleChoice("By the time you read this message, we ___ our decision.", ["will have made", "make", "made"], "will have made"),
        createA2B2MultipleChoice("By next week, the architect ___ the revised design to the client.", ["will have submitted", "submits", "submitted"], "will have submitted"),
        createA2B2MultipleChoice("She ___ her degree by the age of twenty-two.", ["will have earned", "earns", "earned"], "will have earned"),
        createA2B2MultipleChoice("Within six months, they ___ a far more efficient system.", ["will have developed", "develop", "developed"], "will have developed"),
        createA2B2FillBlank("By midnight, we ___ all the evidence into the database.", "will have entered"),
        createA2B2FillBlank("Before the guests arrive, the chef ___ the main course.", "will have prepared")
    ],
    7: [
        createA2B2MultipleChoice("Academic papers ___ before they are accepted for publication.", ["are reviewed", "review", "are reviewing"], "are reviewed"),
        createA2B2MultipleChoice("The most urgent cases ___ first in this clinic.", ["are treated", "treat", "are treating"], "are treated"),
        createA2B2MultipleChoice("Fresh produce ___ daily from local farms.", ["is delivered", "delivers", "is delivering"], "is delivered"),
        createA2B2MultipleChoice("Important decisions ___ collectively in this organisation.", ["are made", "make", "are making"], "are made"),
        createA2B2MultipleChoice("The building ___ by security cameras twenty-four hours a day.", ["is monitored", "monitors", "is monitoring"], "is monitored"),
        createA2B2MultipleChoice("Rare manuscripts ___ in a temperature-controlled room.", ["are kept", "keep", "are keeping"], "are kept"),
        createA2B2MultipleChoice("The final mark ___ on both coursework and the examination.", ["is based", "bases", "is basing"], "is based"),
        createA2B2MultipleChoice("Passenger details ___ before boarding.", ["are checked", "check", "are checking"], "are checked"),
        createA2B2FillBlank("Every application ___ carefully before a response is sent.", "is assessed"),
        createA2B2FillBlank("Traditional dishes ___ during national celebrations.", "are served")
    ],
    8: [
        createA2B2MultipleChoice("The proposal ___ after a lengthy debate in parliament.", ["was approved", "approved", "was approving"], "was approved"),
        createA2B2MultipleChoice("Several ancient coins ___ during the excavation.", ["were discovered", "discovered", "were discovering"], "were discovered"),
        createA2B2MultipleChoice("The suspect ___ late last night.", ["was questioned", "questioned", "was questioning"], "was questioned"),
        createA2B2MultipleChoice("The paintings ___ to the museum in special containers.", ["were transported", "transported", "were transporting"], "were transported"),
        createA2B2MultipleChoice("The award ___ to a young researcher from Tashkent.", ["was given", "gave", "was giving"], "was given"),
        createA2B2MultipleChoice("Many villages ___ by the floods last spring.", ["were damaged", "damaged", "were damaging"], "were damaged"),
        createA2B2MultipleChoice("The final chapter ___ only a week before publication.", ["was written", "wrote", "was writing"], "was written"),
        createA2B2MultipleChoice("The documents ___ for legal reasons.", ["were destroyed", "destroyed", "were destroying"], "were destroyed"),
        createA2B2FillBlank("The old theatre ___ in the nineteenth century.", "was built"),
        createA2B2FillBlank("The injured player ___ to hospital immediately.", "was taken")
    ],
    9: [
        createA2B2MultipleChoice("A decision on the scholarship applications ___ by the end of May.", ["will be made", "will make", "is making"], "will be made"),
        createA2B2MultipleChoice("All candidates ___ before the shortlist is announced.", ["will be interviewed", "will interview", "interview"], "will be interviewed"),
        createA2B2MultipleChoice("The revised policy ___ next term.", ["will be implemented", "will implement", "implements"], "will be implemented"),
        createA2B2MultipleChoice("More details ___ in due course.", ["will be provided", "will provide", "provide"], "will be provided"),
        createA2B2MultipleChoice("The winning essays ___ on the college website.", ["will be published", "will publish", "publish"], "will be published"),
        createA2B2MultipleChoice("The new bridge ___ officially next spring.", ["will be opened", "will open", "opens"], "will be opened"),
        createA2B2MultipleChoice("Every complaint ___ confidentially.", ["will be handled", "will handle", "handles"], "will be handled"),
        createA2B2MultipleChoice("The delegates ___ at the airport by university staff.", ["will be met", "will meet", "meet"], "will be met"),
        createA2B2FillBlank("The final figures ___ after the audit is completed.", "will be released"),
        createA2B2FillBlank("Additional support ___ to students who need it.", "will be given")
    ],
    10: [
        createA2B2MultipleChoice("In his youth, my professor ___ spend hours in the library comparing translations.", ["would", "will", "is going to"], "would"),
        createA2B2MultipleChoice("If the evidence were stronger, the court ___ reconsider the case.", ["would", "will", "would have"], "would"),
        createA2B2MultipleChoice("She said she ___ be delighted to join the panel discussion.", ["would", "will", "is"], "would"),
        createA2B2MultipleChoice("___ you be willing to clarify your final point?", ["Would", "Will", "Are"], "Would"),
        createA2B2MultipleChoice("During winter, we ___ often gather around the stove and tell stories.", ["would", "will", "used"], "would"),
        createA2B2MultipleChoice("Without reliable data, any conclusion ___ be misleading.", ["would", "will", "can"], "would"),
        createA2B2MultipleChoice("I never imagined that the idea ___ attract so much attention.", ["would", "will", "would have"], "would"),
        createA2B2MultipleChoice("When we visited our grandparents, they ___ insist on serving us more food.", ["would", "will", "are going to"], "would"),
        createA2B2FillBlank("If I had known earlier, I ___ have prepared a more detailed answer.", "would"),
        createA2B2FillBlank("He said he ___ return once the negotiations were complete.", "would")
    ],
    11: [
        createA2B2MultipleChoice("I am certain artificial intelligence ___ reshape education in the coming decade.", ["will", "is going to", "has"], "will"),
        createA2B2MultipleChoice("Leave the documents here; I ___ them after lunch.", ["will sign", "sign", "am signing"], "will sign"),
        createA2B2MultipleChoice("Do you think consumers ___ more sustainable products in future?", ["will demand", "demand", "are demanding"], "will demand"),
        createA2B2MultipleChoice("I expect the debate ___ longer than scheduled.", ["will last", "lasts", "is lasting"], "will last"),
        createA2B2MultipleChoice("The doorbell is ringing; I ___ it.", ["will get", "get", "am getting"], "will get"),
        createA2B2MultipleChoice("In my view, the new measures ___ public confidence.", ["will restore", "restore", "are restoring"], "will restore"),
        createA2B2MultipleChoice("I am afraid we ___ be able to finish everything today.", ["will not", "do not", "are not"], "will not"),
        createA2B2MultipleChoice("Experts predict that water shortages ___ more severe.", ["will become", "become", "became"], "will become"),
        createA2B2FillBlank("I ___ let you know as soon as the editor responds.", "will"),
        createA2B2FillBlank("One day, historians ___ look back on this period with fascination.", "will")
    ],
    12: [
        createA2B2MultipleChoice("The research team ___ launch a wider survey next month.", ["is going to", "will", "has"], "is going to"),
        createA2B2MultipleChoice("Judging by the traffic, we ___ miss the beginning of the lecture.", ["are going to", "will", "have"], "are going to"),
        createA2B2MultipleChoice("She has bought the tickets, so she ___ fly to London on Friday.", ["is going to", "will", "has"], "is going to"),
        createA2B2MultipleChoice("Look at that child on the ladder! He ___ fall.", ["is going to", "will", "has"], "is going to"),
        createA2B2MultipleChoice("They ___ renovate the old library during the summer break.", ["are going to", "will", "have"], "are going to"),
        createA2B2MultipleChoice("I ___ apply for the internship as soon as the portal opens.", ["am going to", "will", "have"], "am going to"),
        createA2B2MultipleChoice("We have saved enough money; we ___ replace the old equipment.", ["are going to", "will", "have"], "are going to"),
        createA2B2MultipleChoice("The sky is so dark that it ___ storm.", ["is going to", "will", "has"], "is going to"),
        createA2B2FillBlank("He ___ study law, according to the plan he showed us.", "is going to"),
        createA2B2FillBlank("They ___ announce the winner at the end of the programme.", "are going to")
    ],
    13: [
        createA2B2MultipleChoice("There ___ be a bookshop on this corner, but it closed years ago.", ["used to", "am used to", "get used to"], "used to"),
        createA2B2MultipleChoice("I ___ find formal speeches intimidating, but now I enjoy them.", ["used to", "am used to", "get used to"], "used to"),
        createA2B2MultipleChoice("My aunt ___ travel abroad every winter before she retired.", ["used to", "is used to", "gets used to"], "used to"),
        createA2B2MultipleChoice("Did this building ___ belong to the university?", ["use to", "used to", "be used to"], "use to"),
        createA2B2MultipleChoice("We did not ___ have online lessons when I was at school.", ["use to", "used to", "be used to"], "use to"),
        createA2B2MultipleChoice("He ___ believe that success came only through luck.", ["used to", "is used to", "gets used to"], "used to"),
        createA2B2MultipleChoice("People ___ write long letters instead of sending instant messages.", ["used to", "are used to", "get used to"], "used to"),
        createA2B2MultipleChoice("My brother ___ be quite impatient as a teenager.", ["used to", "is used to", "gets used to"], "used to"),
        createA2B2FillBlank("She ___ work in publishing before switching to education.", "used to"),
        createA2B2FillBlank("I did not ___ understand why literature mattered so much.", "use to")
    ],
    14: [
        createA2B2MultipleChoice("After ten years abroad, she is used to ___ across cultures.", ["working", "work", "worked"], "working"),
        createA2B2MultipleChoice("We are used to ___ tight deadlines in this department.", ["managing", "manage", "managed"], "managing"),
        createA2B2MultipleChoice("He is not used to ___ in front of such a large audience.", ["speaking", "speak", "spoke"], "speaking"),
        createA2B2MultipleChoice("They are used to ___ criticism from the media.", ["receiving", "receive", "received"], "receiving"),
        createA2B2MultipleChoice("I am used to ___ my own research schedule.", ["organizing", "organize", "organized"], "organizing"),
        createA2B2MultipleChoice("Are you used to ___ on the left, or does it still feel strange?", ["driving", "drive", "drove"], "driving"),
        createA2B2MultipleChoice("She is used to ___ formal correspondence in English.", ["writing", "write", "wrote"], "writing"),
        createA2B2MultipleChoice("By now, the interns are used to ___ independently.", ["working", "work", "worked"], "working"),
        createA2B2FillBlank("I am used to ___ long academic articles without a dictionary.", "reading"),
        createA2B2FillBlank("They are not used to ___ such intense heat in April.", "experiencing")
    ],
    15: [
        createA2B2MultipleChoice("You will soon get used to ___ lectures delivered at a faster pace.", ["following", "follow", "followed"], "following"),
        createA2B2MultipleChoice("It took me months to get used to ___ feedback in such direct language.", ["receiving", "receive", "received"], "receiving"),
        createA2B2MultipleChoice("She is gradually getting used to ___ with international clients.", ["negotiating", "negotiate", "negotiated"], "negotiating"),
        createA2B2MultipleChoice("After a while, we got used to ___ the campus at dawn.", ["crossing", "cross", "crossed"], "crossing"),
        createA2B2MultipleChoice("He has not yet got used to ___ in an open-plan office.", ["working", "work", "worked"], "working"),
        createA2B2MultipleChoice("Students often struggle to get used to ___ independently at university.", ["studying", "study", "studied"], "studying"),
        createA2B2MultipleChoice("I eventually got used to ___ my ideas in seminars.", ["defending", "defend", "defended"], "defending"),
        createA2B2MultipleChoice("They are finding it hard to get used to ___ without printed textbooks.", ["learning", "learn", "learned"], "learning"),
        createA2B2FillBlank("You will get used to ___ academic articles more critically.", "reading"),
        createA2B2FillBlank("She never fully got used to ___ away from her family.", "living")
    ]
};

const a2ToB2ChallengeCore = {
    1: [
        createA2B2MultipleChoice("At present, the ethics committee ___ whether the study can proceed under revised conditions.", ["is considering", "considers", "has considered"], "is considering"),
        createA2B2MultipleChoice("More graduates ___ postgraduate study because the labour market has become increasingly competitive.", ["are pursuing", "pursue", "have pursued"], "are pursuing"),
        createA2B2MultipleChoice("Why ___ you constantly checking your phone during the briefing?", ["are", "do", "have"], "are"),
        createA2B2MultipleChoice("This term, our department ___ particular emphasis on analytical writing.", ["is placing", "places", "has placed"], "is placing"),
        createA2B2MultipleChoice("A growing number of firms ___ in sustainable packaging this year.", ["are investing", "invest", "have invested"], "are investing"),
        createA2B2MultipleChoice("We ___ with external consultants while the merger is being negotiated.", ["are collaborating", "collaborate", "collaborated"], "are collaborating"),
        createA2B2MultipleChoice("The university ___ its admissions policy in response to recent criticism.", ["is reviewing", "reviews", "has reviewed"], "is reviewing"),
        createA2B2MultipleChoice("Several governments ___ stricter measures to tackle air pollution right now.", ["are introducing", "introduce", "introduced"], "are introducing"),
        createA2B2FillBlank("Scientists ___ whether the new treatment remains effective in the long term.", "are investigating"),
        createA2B2FillBlank("I ___ extra tutorials this month to improve my academic writing.", "am attending")
    ],
    2: [
        createA2B2MultipleChoice("When the minister arrived, senior advisers ___ the final draft of the statement.", ["were revising", "revised", "have revised"], "were revising"),
        createA2B2MultipleChoice("At that point in the trial, researchers ___ unexpectedly promising results.", ["were observing", "observed", "have observed"], "were observing"),
        createA2B2MultipleChoice("While the board ___ the budget, several shareholders raised objections.", ["was discussing", "discussed", "has discussed"], "was discussing"),
        createA2B2MultipleChoice("The audience ___ closely when the speaker changed his position.", ["was listening", "listened", "has listened"], "was listening"),
        createA2B2MultipleChoice("What ___ the negotiators trying to achieve when talks collapsed?", ["were", "are", "did"], "were"),
        createA2B2MultipleChoice("I ___ back to campus when I realized I had left the manuscript at home.", ["was heading", "headed", "have headed"], "was heading"),
        createA2B2MultipleChoice("The company ___ strongly before international demand began to weaken.", ["was performing", "performed", "has performed"], "was performing"),
        createA2B2MultipleChoice("The students ___ notes while the lecturer outlined the methodology.", ["were taking", "took", "have taken"], "were taking"),
        createA2B2FillBlank("At 11 PM, the legal team ___ a response to the allegations.", "were preparing"),
        createA2B2FillBlank("She ___ the contract carefully when her lawyer called.", "was examining")
    ],
    3: [
        createA2B2MultipleChoice("This time next month, our faculty ___ its annual research symposium.", ["will be hosting", "hosts", "is hosting"], "will be hosting"),
        createA2B2MultipleChoice("At noon tomorrow, I ___ the panel on educational reform, so I may not answer immediately.", ["will be chairing", "chair", "am chairing"], "will be chairing"),
        createA2B2MultipleChoice("Will they ___ alternative suppliers when the current contract expires?", ["be considering", "consider", "have considered"], "be considering"),
        createA2B2MultipleChoice("By late evening, the crew ___ the final equipment checks.", ["will be conducting", "conduct", "conducted"], "will be conducting"),
        createA2B2MultipleChoice("At that stage, both sides ___ whether compromise is still possible.", ["will be assessing", "assess", "assessed"], "will be assessing"),
        createA2B2MultipleChoice("This weekend, thousands of applicants ___ their entrance examinations.", ["will be sitting", "sit", "are sitting"], "will be sitting"),
        createA2B2MultipleChoice("In July, she ___ at Cambridge under the exchange scheme.", ["will be studying", "studies", "studied"], "will be studying"),
        createA2B2MultipleChoice("At 8 tomorrow evening, we ___ the documentary for the media studies module.", ["will be watching", "watch", "watched"], "will be watching"),
        createA2B2FillBlank("By this time tomorrow, the engineers ___ the reliability of the new system.", "will be testing"),
        createA2B2FillBlank("At 6 PM, I ___ with the editor about the revised manuscript.", "will be meeting")
    ],
    4: [
        createA2B2MultipleChoice("Researchers ___ substantial progress since the project received additional funding.", ["have made", "made", "are making"], "have made"),
        createA2B2MultipleChoice("She ___ several influential essays on bilingual education over the past few years.", ["has published", "published", "is publishing"], "has published"),
        createA2B2MultipleChoice("We ___ that issue repeatedly, yet consensus remains elusive.", ["have examined", "examined", "are examining"], "have examined"),
        createA2B2MultipleChoice("The editor ___ a revised statement in response to the criticism.", ["has just released", "just released", "is just releasing"], "has just released"),
        createA2B2MultipleChoice("I ___ a more convincing argument on this topic before.", ["have rarely encountered", "rarely encountered", "am rarely encountering"], "have rarely encountered"),
        createA2B2MultipleChoice("How many times ___ the committee over this matter?", ["has the board met", "did the board meet", "is the board meeting"], "has the board met"),
        createA2B2MultipleChoice("Public opinion ___ markedly since the first survey was conducted.", ["has shifted", "shifted", "shifts"], "has shifted"),
        createA2B2MultipleChoice("He ___ all the evidence, so his conclusion sounds credible.", ["has reviewed", "reviewed", "reviews"], "has reviewed"),
        createA2B2FillBlank("Several institutions ___ interest in adopting the new framework.", "have expressed"),
        createA2B2FillBlank("She ___ in three international conferences this academic year.", "has participated")
    ],
    5: [
        createA2B2MultipleChoice("By the time the appeal was heard, the public ___ its verdict.", ["had already formed", "already formed", "has already formed"], "had already formed"),
        createA2B2MultipleChoice("She felt relieved because she ___ the references before submitting the essay.", ["had checked", "checked", "has checked"], "had checked"),
        createA2B2MultipleChoice("The city recovered quickly because officials ___ before the storm reached the coast.", ["had prepared", "prepared", "have prepared"], "had prepared"),
        createA2B2MultipleChoice("I understood the allusion because I ___ the novel years earlier.", ["had read", "read", "have read"], "had read"),
        createA2B2MultipleChoice("Once the researchers ___ the data more carefully, they changed their hypothesis.", ["had analysed", "analysed", "have analysed"], "had analysed"),
        createA2B2MultipleChoice("He could not board the flight because he ___ his passport at the hotel.", ["had left", "left", "has left"], "had left"),
        createA2B2MultipleChoice("The argument seemed weak because the author ___ a key source.", ["had overlooked", "overlooked", "has overlooked"], "had overlooked"),
        createA2B2MultipleChoice("By the time we reached a decision, several opportunities ___ already.", ["had disappeared", "disappeared", "have disappeared"], "had disappeared"),
        createA2B2FillBlank("Before the announcement was made, the committee ___ every application twice.", "had reviewed"),
        createA2B2FillBlank("She felt confident because she ___ the material thoroughly before the exam.", "had revised")
    ],
    6: [
        createA2B2MultipleChoice("By the end of this term, students ___ every major area of the syllabus.", ["will have covered", "cover", "have covered"], "will have covered"),
        createA2B2MultipleChoice("The research team ___ the first phase of the trial by next autumn.", ["will have completed", "completes", "is completing"], "will have completed"),
        createA2B2MultipleChoice("By 2030, many cities ___ stricter emissions targets.", ["will have adopted", "adopt", "have adopted"], "will have adopted"),
        createA2B2MultipleChoice("I ___ the policy summary before the board convenes.", ["will have finished", "finish", "am finishing"], "will have finished"),
        createA2B2MultipleChoice("By the time you receive my email, we ___ our final recommendation.", ["will have reached", "reach", "reached"], "will have reached"),
        createA2B2MultipleChoice("The architect ___ the revised design by the end of the week.", ["will have submitted", "submits", "submitted"], "will have submitted"),
        createA2B2MultipleChoice("She ___ her doctorate by the age of twenty-seven.", ["will have earned", "earns", "earned"], "will have earned"),
        createA2B2MultipleChoice("Within six months, they ___ a far more efficient distribution system.", ["will have developed", "develop", "developed"], "will have developed"),
        createA2B2FillBlank("By midnight, the team ___ every inconsistency in the report.", "will have identified"),
        createA2B2FillBlank("Before the guests arrive, the chef ___ the main course and the desserts.", "will have prepared")
    ],
    7: [
        createA2B2MultipleChoice("All applications ___ before a shortlist is announced.", ["are assessed", "assess", "are assessing"], "are assessed"),
        createA2B2MultipleChoice("In this journal, submissions ___ by at least two independent reviewers.", ["are evaluated", "evaluate", "are evaluating"], "are evaluated"),
        createA2B2MultipleChoice("Sensitive information ___ in a secure digital archive.", ["is stored", "stores", "is storing"], "is stored"),
        createA2B2MultipleChoice("The final grade ___ on both coursework and examination performance.", ["is based", "bases", "is basing"], "is based"),
        createA2B2MultipleChoice("Rare manuscripts ___ in climate-controlled rooms.", ["are kept", "keep", "are keeping"], "are kept"),
        createA2B2MultipleChoice("Medical waste ___ according to strict safety procedures.", ["is disposed of", "disposes of", "is disposing of"], "is disposed of"),
        createA2B2MultipleChoice("In this company, major decisions ___ collectively rather than individually.", ["are taken", "take", "are taking"], "are taken"),
        createA2B2MultipleChoice("Candidates ___ of the outcome by email.", ["are informed", "inform", "are informing"], "are informed"),
        createA2B2FillBlank("Class attendance ___ electronically at the start of every lecture.", "is recorded"),
        createA2B2FillBlank("Traditional crafts ___ from one generation to the next.", "are passed on")
    ],
    8: [
        createA2B2MultipleChoice("The treaty ___ after months of delicate negotiation.", ["was signed", "signed", "was signing"], "was signed"),
        createA2B2MultipleChoice("Several previously unknown letters ___ in the archive last year.", ["were discovered", "discovered", "were discovering"], "were discovered"),
        createA2B2MultipleChoice("The suspect ___ for several hours before being released.", ["was questioned", "questioned", "was questioning"], "was questioned"),
        createA2B2MultipleChoice("The sculpture ___ to the museum under armed guard.", ["was transported", "transported", "was transporting"], "was transported"),
        createA2B2MultipleChoice("The award ___ to a researcher whose work transformed the field.", ["was presented", "presented", "was presenting"], "was presented"),
        createA2B2MultipleChoice("Many coastal villages ___ by the storm surge.", ["were damaged", "damaged", "were damaging"], "were damaged"),
        createA2B2MultipleChoice("The revised edition ___ only days before publication.", ["was completed", "completed", "was completing"], "was completed"),
        createA2B2MultipleChoice("The documents ___ because they contained classified material.", ["were destroyed", "destroyed", "were destroying"], "were destroyed"),
        createA2B2FillBlank("The injured climber ___ to safety by helicopter.", "was flown"),
        createA2B2FillBlank("Several witnesses ___ before the court reached a decision.", "were interviewed")
    ],
    9: [
        createA2B2MultipleChoice("All shortlisted candidates ___ by the end of next week.", ["will be interviewed", "will interview", "interview"], "will be interviewed"),
        createA2B2MultipleChoice("The revised regulations ___ at the start of the next academic year.", ["will be introduced", "will introduce", "introduce"], "will be introduced"),
        createA2B2MultipleChoice("Further details ___ once the investigation is complete.", ["will be released", "will release", "release"], "will be released"),
        createA2B2MultipleChoice("The winning proposals ___ on the official website.", ["will be published", "will publish", "publish"], "will be published"),
        createA2B2MultipleChoice("The new cultural centre ___ by the mayor in September.", ["will be opened", "will open", "opens"], "will be opened"),
        createA2B2MultipleChoice("Every complaint ___ in strict confidence.", ["will be handled", "will handle", "handles"], "will be handled"),
        createA2B2MultipleChoice("Delegates ___ at the airport by university representatives.", ["will be met", "will meet", "meet"], "will be met"),
        createA2B2MultipleChoice("The final report ___ after an external review has taken place.", ["will be revised", "will revise", "revises"], "will be revised"),
        createA2B2FillBlank("Additional scholarships ___ to students from disadvantaged backgrounds.", "will be offered"),
        createA2B2FillBlank("The findings ___ once the data has been independently verified.", "will be published")
    ],
    10: [
        createA2B2MultipleChoice("In his early lectures, our professor ___ frequently challenge accepted interpretations.", ["would", "will", "used to"], "would"),
        createA2B2MultipleChoice("If the evidence were more convincing, the committee ___ reconsider its decision.", ["would", "will", "would have"], "would"),
        createA2B2MultipleChoice("She said she ___ be delighted to contribute to the edited volume.", ["would", "will", "is"], "would"),
        createA2B2MultipleChoice("___ you mind explaining that final point in a little more detail?", ["Would", "Will", "Are"], "Would"),
        createA2B2MultipleChoice("During summer, we ___ spend entire afternoons in the public library.", ["would", "will", "are going to"], "would"),
        createA2B2MultipleChoice("Without clearer evidence, any conclusion ___ remain speculative.", ["would", "will", "can"], "would"),
        createA2B2MultipleChoice("He never expected that the article ___ receive such international attention.", ["would", "will", "would have"], "would"),
        createA2B2MultipleChoice("When we visited our grandparents, they ___ insist that we stay for dinner.", ["would", "will", "used"], "would"),
        createA2B2FillBlank("If I had more time, I ___ revise the introduction completely.", "would"),
        createA2B2FillBlank("My grandfather ___ tell us stories that seemed endless but fascinating.", "would")
    ],
    11: [
        createA2B2MultipleChoice("I am convinced that renewable energy ___ dominate long-term planning discussions.", ["will", "is going to", "has"], "will"),
        createA2B2MultipleChoice("Leave the contract on my desk; I ___ it after lunch.", ["will review", "review", "am reviewing"], "will review"),
        createA2B2MultipleChoice("Do you think public attitudes ___ significantly over the next decade?", ["will shift", "shift", "are shifting"], "will shift"),
        createA2B2MultipleChoice("I expect the negotiations ___ well into the evening.", ["will continue", "continue", "are continuing"], "will continue"),
        createA2B2MultipleChoice("The doorbell is ringing; I ___ who it is.", ["will see", "see", "am seeing"], "will see"),
        createA2B2MultipleChoice("In my opinion, the reforms ___ public trust only if they are transparent.", ["will restore", "restore", "are restoring"], "will restore"),
        createA2B2MultipleChoice("I am afraid we ___ finish everything unless we extend the deadline.", ["will not", "do not", "are not"], "will not"),
        createA2B2MultipleChoice("Most analysts believe inflation ___ gradually over the coming year.", ["will fall", "falls", "fell"], "will fall"),
        createA2B2FillBlank("I ___ let you know as soon as the admissions office replies.", "will"),
        createA2B2FillBlank("One day, historians ___ regard this period as a turning point.", "will")
    ],
    12: [
        createA2B2MultipleChoice("The faculty ___ launch a revised curriculum next September.", ["is going to", "will", "has"], "is going to"),
        createA2B2MultipleChoice("Judging by the traffic, we ___ miss the opening remarks.", ["are going to", "will", "have"], "are going to"),
        createA2B2MultipleChoice("She has booked the flight, so she ___ attend the conference in person.", ["is going to", "will", "has"], "is going to"),
        createA2B2MultipleChoice("Look at the sky. It ___ storm before evening.", ["is going to", "will", "has"], "is going to"),
        createA2B2MultipleChoice("They ___ modernise the laboratory once the grant is approved.", ["are going to", "will", "have"], "are going to"),
        createA2B2MultipleChoice("I ___ apply for the fellowship as soon as the portal opens.", ["am going to", "will", "have"], "am going to"),
        createA2B2MultipleChoice("We have saved enough, so we ___ replace the outdated equipment.", ["are going to", "will", "have"], "are going to"),
        createA2B2MultipleChoice("The child is climbing too high; he ___ fall if no one stops him.", ["is going to", "will", "has"], "is going to"),
        createA2B2FillBlank("They ___ announce the shortlist after the final round of interviews.", "are going to"),
        createA2B2FillBlank("She ___ study architecture, according to the plan she showed us.", "is going to")
    ],
    13: [
        createA2B2MultipleChoice("There ___ be a thriving bookshop here before the shopping centre opened.", ["used to", "is used to", "gets used to"], "used to"),
        createA2B2MultipleChoice("I ___ find formal debates intimidating, but now I enjoy them.", ["used to", "am used to", "get used to"], "used to"),
        createA2B2MultipleChoice("My aunt ___ spend every winter volunteering abroad.", ["used to", "is used to", "gets used to"], "used to"),
        createA2B2MultipleChoice("Did this building ___ belong to the medical faculty?", ["use to", "used to", "be used to"], "use to"),
        createA2B2MultipleChoice("We did not ___ have digital resources when I started teaching.", ["use to", "used to", "be used to"], "use to"),
        createA2B2MultipleChoice("He ___ believe that success depended entirely on luck.", ["used to", "is used to", "gets used to"], "used to"),
        createA2B2MultipleChoice("People ___ write detailed letters instead of sending instant messages.", ["used to", "are used to", "get used to"], "used to"),
        createA2B2MultipleChoice("My brother ___ be surprisingly shy at public events.", ["used to", "is used to", "gets used to"], "used to"),
        createA2B2FillBlank("She ___ work in publishing before moving into education policy.", "used to"),
        createA2B2FillBlank("I did not ___ understand why historical context mattered so much.", "use to")
    ],
    14: [
        createA2B2MultipleChoice("After several years abroad, she is used to ___ in multicultural teams.", ["working", "work", "worked"], "working"),
        createA2B2MultipleChoice("We are used to ___ under considerable pressure in this department.", ["operating", "operate", "operated"], "operating"),
        createA2B2MultipleChoice("He is not used to ___ such direct criticism in public.", ["receiving", "receive", "received"], "receiving"),
        createA2B2MultipleChoice("They are used to ___ deadlines with very little notice.", ["meeting", "meet", "met"], "meeting"),
        createA2B2MultipleChoice("I am used to ___ my own research timetable.", ["organising", "organise", "organised"], "organising"),
        createA2B2MultipleChoice("Are you used to ___ on the left, or does it still feel unnatural?", ["driving", "drive", "drove"], "driving"),
        createA2B2MultipleChoice("She is used to ___ formal reports in English for international partners.", ["writing", "write", "wrote"], "writing"),
        createA2B2MultipleChoice("By now, the interns are used to ___ independently.", ["working", "work", "worked"], "working"),
        createA2B2FillBlank("I am used to ___ complex academic articles without translating every word.", "reading"),
        createA2B2FillBlank("They are not used to ___ such extreme heat this early in the year.", "experiencing")
    ],
    15: [
        createA2B2MultipleChoice("You will soon get used to ___ lectures delivered at a much faster pace.", ["following", "follow", "followed"], "following"),
        createA2B2MultipleChoice("It took me months to get used to ___ feedback in such direct terms.", ["receiving", "receive", "received"], "receiving"),
        createA2B2MultipleChoice("She is gradually getting used to ___ with international clients.", ["negotiating", "negotiate", "negotiated"], "negotiating"),
        createA2B2MultipleChoice("After a few weeks, we got used to ___ the campus before sunrise.", ["crossing", "cross", "crossed"], "crossing"),
        createA2B2MultipleChoice("He still has not got used to ___ in an open-plan office.", ["working", "work", "worked"], "working"),
        createA2B2MultipleChoice("Students often struggle to get used to ___ independently at university.", ["studying", "study", "studied"], "studying"),
        createA2B2MultipleChoice("I eventually got used to ___ my ideas in front of specialists.", ["defending", "defend", "defended"], "defending"),
        createA2B2MultipleChoice("They are finding it difficult to get used to ___ without printed textbooks.", ["learning", "learn", "learned"], "learning"),
        createA2B2FillBlank("You will get used to ___ academic texts more critically over time.", "reading"),
        createA2B2FillBlank("She never fully got used to ___ so far from her family.", "living")
    ]
};

a2ToB2TopicBank.forEach(topic => {
    const advancedCore = a2ToB2ChallengeCore[topic.id] || topic.questions;
    const additions = a2ToB2AdvancedAdditions[topic.id] || [];
    topic.questions = advancedCore.concat(additions);
});

const cloneA2B2Topics = (topics) => topics.map(topic => ({
    id: topic.id,
    title: topic.title,
    description: topic.description,
    questions: topic.questions.map(question => ({
        ...question,
        ...(Array.isArray(question.options) ? { options: [...question.options] } : {}),
        answer: Array.isArray(question.answer) ? [...question.answer] : question.answer
    }))
}));

const vocabularyPhraseBankSource = String.raw`
1. Political period — политический период
51. Promotion opportunity — возможность повышения
52. Earn a salary — получать зарплату
53. Apply for a position — подать заявку на должность
54. Flexible schedule — гибкий график
55. Professional growth — профессиональный рост
56. Solve problems — решать проблемы
57. Office environment — офисная среда
58. Work-life balance — баланс работы и жизни
59. Choosing a career — выбор карьеры
60. Final choice — окончательный выбор
61. Job opportunities — возможности трудоустройства
62. Career success — карьерный успех
63. Gain experience — получать опыт
64. Learn skills — осваивать навыки
65. Develop habits — развивать привычки
66. Strong future — сильное будущее
67. Satisfying future — удовлетворяющее будущее
68. Education shapes thinking — образование формирует мышление
69. Memorize facts — запоминать факты
70. Ask questions — задавать вопросы
71. Turn information into knowledge — превращать информацию в знания
72. Real life — реальная жизнь
73. Take notes — делать заметки
74. Do research — проводить исследование
75. Complete projects — завершать проекты
76. Revise before exams — повторять перед экзаменами
77. Practical lessons — практические занятия
78. Engaging lessons — интересные уроки
79. Independent study — самостоятельное обучение
80. Lifelong journey — путь длиною в жизнь
81. Attend lectures — посещать лекции
82. Final exam — итоговый экзамен
83. Group project — групповой проект
84. Improve skills — улучшать навыки
85. Scholarship opportunity — возможность стипендии
86. Manage time — управлять временем
87. Pass with honors — закончить с отличием
88. Academic progress — академический прогресс
89. Online resources — онлайн-ресурсы
90. Lifelong education — обучение на протяжении всей жизни
91. Valuable part of life — ценная часть жизни
92. Balanced meals — сбалансированное питание
93. Drink enough water — пить достаточно воды
94. Sleep regularly — спать регулярно
95. Physical exercise — физические упражнения
96. Mental health — психическое здоровье
97. Reduce stress — снижать стресс
98. Medical check-up — медицинский осмотр
99. Quality of life — качество жизни
100. Daily responsibility — ежедневная ответственность
101. Healthy habit — полезная привычка
102. Avoid junk food — избегать вредной еды
103. Strong immune system — сильный иммунитет
104. Daily routine — распорядок дня
105. Feel energetic — чувствовать бодрость
106. Take medicine on time — принимать лекарства вовремя
107. Leave normal routine — выйти из обычного распорядка
108. Fresh eyes — свежий взгляд
109. Change perspective — изменить взгляд
110. Successful trip — удачная поездка
111. Book tickets — бронировать билеты
112. Prepare documents — подготовить документы
113. Pack luggage — собрать багаж
114. Local customs — местные обычаи
115. Bad weather — плохая погода
116. Wrong directions — неверное направление
117. Destination — пункт назначения
118. Collected stories — собранные истории
119. Book a ticket — забронировать билет
120. Travel light — путешествовать налегке
121. Tourist attraction — туристическая достопримечательность
122. Local culture — местная культура
123. Public transport — общественный транспорт
124. Boarding pass — посадочный талон
125. Travel insurance — туристическая страховка
126. Check into a hotel — заселиться в отель
127. Breathtaking view — захватывающий вид
128. Ask for directions — спросить дорогу
129. Enjoy the journey — наслаждаться поездкой
130. Carry documents — иметь при себе документы
131. Plan an itinerary — составить маршрут
132. Emergency situations — чрезвычайные ситуации
133. Fire accident — пожар
134. Road accident — дорожная авария
135. Power outage — отключение электричества
136. Natural disaster — стихийное бедствие
137. Staying calm — сохранять спокойствие
138. Think clearly — мыслить ясно
139. Protect yourself — защитить себя
140. Trained professionals — обученные специалисты
141. Call emergency services — вызвать экстренные службы
142. Save valuable time — сэкономить ценное время
143. First aid kit — аптечка первой помощи
144. Emergency contact list — список экстренных контактов
145. Safe exits — безопасные выходы
146. Evacuation plan — план эвакуации
147. React responsibly — реагировать ответственно
148. Heavy smoke — густой дым
149. Reach safety — добраться до безопасного места
150. Follow instructions — следовать инструкциям
151. Injured person — пострадавший человек
152. Report the accident — сообщить о происшествии
153. Everyday life — повседневная жизнь
154. Use services — пользоваться услугами
155. Repair shop — ремонтная мастерская
156. Delivery company — служба доставки
157. Save time — экономить время
158. Solve problems quickly — быстро решать проблемы
159. Clear communication — ясное общение
160. Polite behavior — вежливое поведение
161. Quick support — быстрая поддержка
162. Receptionist — администратор
163. Explain patiently — терпеливо объяснять
164. Arrive on time — прибыть вовремя
165. Shop assistant — продавец-консультант
166. Useful advice — полезный совет
167. Positive experience — положительный опыт
168. Order food — заказать еду
169. Book appointments — записаться на приём
170. Transfer money — переводить деньги
171. Leave home — выходить из дома
172. Professional responsibility — профессиональная ответственность
173. Customer service — обслуживание клиентов
174. Online support — онлайн-поддержка
175. Friendly staff — дружелюбный персонал
176. Fast delivery — быстрая доставка
177. Repair service — услуга ремонта
178. Reliable company — надёжная компания
179. Ask for assistance — попросить помощь
180. Waiting time — время ожидания
181. Make a complaint — подать жалобу
182. Provide information — предоставить информацию
183. Handle requests — обрабатывать запросы
184. Meet customer needs — удовлетворять потребности клиента
185. Social communication — социальное общение
186. Connect with people — связываться с людьми
187. Share ideas — делиться идеями
188. Build relationships — строить отношения
189. Face-to-face conversation — личный разговор
190. Phone calls — телефонные звонки
191. Online interaction — онлайн-взаимодействие
192. Main goal — главная цель
193. Understand clearly — понимать ясно
194. Listen carefully — внимательно слушать
195. Body language — язык тела
196. Respond with empathy — отвечать с сочувствием
197. Interrupt too often — слишком часто перебивать
198. Misunderstandings grow — недопонимания растут
199. Social media — социальные сети
200. Messaging apps — приложения для сообщений
2. Restore stability — восстановить стабильность
3. National unity — национальное единство
4. Civil conflict — гражданский конфликт
5. Armed forces — вооружённые силы
6. National security — национальная безопасность
7. Infrastructure project — инфраструктурный проект
8. Economic development — экономическое развитие
9. Energy independence — энергетическая независимость
10. State policy — государственная политика
11. Strategic vision — стратегическое видение
12. Public institution — государственное учреждение
13. Living standards — уровень жизни
14. Sustainable development — устойчивое развитие
15. Strong family relationship — крепкие семейные отношения
16. Trust — доверие
17. Respect — уважение
18. Regular communication — регулярное общение
19. Guide children — направлять детей
20. Patience — терпение
21. Share space — делить пространство
22. Solve conflicts — решать конфликты
23. Support one another — поддерживать друг друга
24. Healthy relationships — здоровые отношения
25. Disagree — не соглашаться
26. Feel tired — чувствовать усталость
27. Misunderstand each other — неправильно понимать друг друга
28. Calm conversation — спокойный разговор
29. Honest listening — искренне слушать
30. Make peace — помириться
31. Friendship — дружба
32. Close friends — близкие друзья
33. Stay loyal — оставаться верным
34. Difficult moments — трудные моменты
35. Keep in touch — поддерживать связь
36. Show empathy — проявлять сочувствие
37. Meaningful relationships — значимые отношения
38. Spend quality time — проводить время с пользой
39. Respect each other — уважать друг друга
40. Take care of parents — заботиться о родителях
41. Family tradition — семейная традиция
42. Younger sibling — младший брат / сестра
43. Build trust — строить доверие
44. Healthy boundaries — здоровые границы
45. Career path — карьерный путь
46. Job interview — собеседование
47. Gain experience — получать опыт
48. Work under pressure — работать под давлением
49. Teamwork skills — навыки командной работы
50. Meet deadlines — соблюдать сроки
Агар хоҳӣ, метавонам **50-тои дуюмро бо мисолҳои ҷумлавӣ**, ё **English + Tajik + Russian** диҳам 🔥
201. Stay in contact — оставаться на связи
202. Respectful tone — уважительный тон
203. Clear words — ясные слова
204. Honest intention — искреннее намерение
205. Start a conversation — начать разговор
206. Give feedback — давать обратную связь
207. Misunderstand a message — неправильно понять сообщение
208. Listen actively — активно слушать
209. Speak politely — говорить вежливо
210. Explain clearly — объяснять ясно
211. Group chat — групповой чат
212. Ask for clarification — попросить уточнение
213. Respect different views — уважать разные мнения
214. Digital communication — цифровое общение
215. Build connection — выстраивать связь
216. Natural part of life — естественная часть жизни
217. Feel joy — чувствовать радость
218. Feel fear — чувствовать страх
219. Feel anger — чувствовать гнев
220. Feel hope — чувствовать надежду
221. Feel sadness — чувствовать грусть
222. Feel excitement — чувствовать воодушевление
223. Influence decisions — влиять на решения
224. Express emotions — выражать эмоции
225. Stay hidden — оставаться скрытым
226. Feel anxious inside — чувствовать тревогу внутри
227. Carry disappointment — носить разочарование в себе
228. Emotional awareness — эмоциональная осознанность
229. Manage emotions — управлять эмоциями
230. Healthy response — здоровая реакция
231. Protect relationships — сохранять отношения
232. Stressful moments — стрессовые моменты
233. Feel anxious — чувствовать тревогу
234. Feel all right — чувствовать себя нормально
235. Big events — большие события
236. Control stress — контролировать стресс
237. Breathe slowly — дышать медленно
238. Focus on action — сосредоточиться на действиях
239. Feel calmer — чувствовать себя спокойнее
240. Save money — экономить деньги
241. Spend wisely — тратить с умом
242. Monthly budget — месячный бюджет
243. Unexpected expense — непредвиденный расход
244. Earn income — получать доход
245. Open a bank account — открыть банковский счёт
246. Pay bills — оплачивать счета
247. Borrow money — занимать деньги
248. Avoid debt — избегать долгов
249. Compare prices — сравнивать цены
250. Financial goal — финансовая цель
251. Cash payment — наличная оплата
252. Spend on necessities — тратить на необходимое
253. Plan ahead — планировать заранее
254. Daily decisions — ежедневные решения
255. Save regularly — регулярно откладывать деньги
256. Financial responsibility — финансовая ответственность
257. Small choices — маленькие выборы
258. Impulsive shopping — импульсивные покупки
259. Strong future — стабильное будущее
260. Spirituality and values — духовность и ценности
261. Moral direction — нравственное направление
262. Everyday choices — повседневные выборы
263. Honesty — честность
264. Kindness — доброта
265. Gratitude — благодарность
266. Responsibility — ответственность
267. Shape character — формировать характер
268. Keep promises — держать обещания
269. Respect elders — уважать старших
270. Help someone in need — помогать нуждающемуся
271. Choose truth — выбирать правду
272. Hard times — трудные времена
273. Moral center — моральный стержень
274. Stay respectful — оставаться уважительным
275. Remain hopeful — сохранять надежду
276. Inner peace — внутренний покой
277. Spiritual growth — духовный рост
278. Search for meaning — искать смысл
279. Strong character — сильный характер
280. Live with purpose — жить с целью
281. Follow principles — следовать принципам
282. Quiet reflection — спокойное размышление
283. Life challenges — жизненные трудности
284. Financial pressure — финансовое давление
285. Family problems — семейные проблемы
286. Health issues — проблемы со здоровьем
287. Sudden change — внезапная перемена
288. Respond wisely — реагировать мудро
289. Stand up again — подняться снова
290. Continue forward — продолжать двигаться вперёд
291. One step at a time — шаг за шагом
292. Learn lessons — извлекать уроки
293. Develop courage — развивать смелость
294. Build resilience — развивать устойчивость
295. Mature version — зрелая версия себя
296. Ask for support — просить поддержку
297. Focus on progress — сосредоточиться на прогрессе
298. Face with patience — встречать с терпением
299. Grow through struggle — расти через трудности
300. Difficult period — трудный период
`;

const vocabularyPhraseBank = Array.from(
    vocabularyPhraseBankSource
        .replace(/Агар хоҳӣ[\s\S]*?201\./u, ' 201.')
        .matchAll(/(?:^|[\s,])(\d+)\.\s*([\s\S]*?)\s*—\s*([\s\S]*?)(?=(?:[\s,]+\d+\.\s)|$)/gu)
).map(match => ({
    id: Number(match[1]),
    en: String(match[2] || '')
        .replace(/\*\*/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/,\s*$/u, ''),
    ru: String(match[3] || '')
        .replace(/\*\*/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/,\s*$/u, '')
})).filter(item => item.id && item.en && item.ru)
  .sort((left, right) => left.id - right.id)
  .filter((item, index, items) => index === 0 || item.id !== items[index - 1].id);

function buildVocabularyDistractors(entries, fullBank, currentIndex, field, correctValue, count = 3) {
    const localValues = shuffleArray(entries
        .filter((_, index) => index !== currentIndex)
        .map(entry => entry[field]));
    const globalValues = shuffleArray(fullBank.map(entry => entry[field]));
    const distractors = [];

    for (const pool of [localValues, globalValues]) {
        for (const candidate of pool) {
            if (!candidate || candidate === correctValue || distractors.includes(candidate)) continue;
            distractors.push(candidate);
            if (distractors.length >= count) break;
        }
        if (distractors.length >= count) break;
    }

    return shuffleArray([correctValue, ...distractors]);
}

function createVocabularyQuestion(entry, index, entries, fullBank) {
    const pattern = index % 4;

    if (pattern === 0) {
        return {
            type: "multiple-choice",
            question: `Choose the correct English phrase: ${entry.ru}`,
            options: buildVocabularyDistractors(entries, fullBank, index, 'en', entry.en),
            answer: entry.en
        };
    }

    if (pattern === 1) {
        return {
            type: "multiple-choice",
            question: `Choose the correct Russian translation: ${entry.en}`,
            options: buildVocabularyDistractors(entries, fullBank, index, 'ru', entry.ru),
            answer: entry.ru
        };
    }

    if (pattern === 2) {
        return {
            type: "fill-blank",
            question: `Translate into English: ${entry.ru}`,
            answer: entry.en
        };
    }

    const words = entry.en.split(' ').filter(Boolean);
    if (words.length > 1) {
        return {
            type: "fill-blank",
            question: `Complete the phrase in English: ${words.slice(0, -1).join(' ')} ___`,
            answer: words[words.length - 1]
        };
    }

    return {
        type: "fill-blank",
        question: `Translate into English: ${entry.ru}`,
        answer: entry.en
    };
}

function buildVocabularyTopicsFromPhraseBank(bank, topicCount = 15, topicSize = 20) {
    const topics = [];

    for (let topicIndex = 0; topicIndex < topicCount; topicIndex++) {
        const entries = [];

        for (let questionIndex = 0; questionIndex < topicSize; questionIndex++) {
            const bankIndex = (topicIndex * topicSize + questionIndex) % bank.length;
            entries.push(bank[bankIndex]);
        }

        topics.push({
            id: topicIndex + 1,
            title: `Vocabulary Set ${topicIndex + 1}`,
            description: "English-Russian phrase bank",
            questions: entries.map((entry, index) =>
                createVocabularyQuestion(entry, index, entries, bank)
            )
        });
    }

    return topics;
}

grammarTopics.splice(0, grammarTopics.length, ...cloneA2B2Topics(a2ToB2TopicBank));
vocabularyTopics.splice(0, vocabularyTopics.length, ...buildVocabularyTopicsFromPhraseBank(vocabularyPhraseBank));

// Application state
const state = {
    currentPage: 'home',
    currentTest: null,
    currentTopic: null,
    currentQuestionIndex: 0,
    userAnswers: [],
    testType: null, // 'grammar' or 'vocabulary'
    testMode: null, // 'overall' or 'topic'
    score: 0
};

// DOM Elements
const pages = {
    home: document.getElementById('home-page'),
    grammarMenu: document.getElementById('grammar-menu'),
    vocabularyMenu: document.getElementById('vocabulary-menu'),
    topicSelection: document.getElementById('topic-selection'),
    testSection: document.getElementById('test-section'),
    resultsSection: document.getElementById('results-section')
};

// Navigation functions
function showPage(pageId) {
    // Hide all pages
    Object.values(pages).forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the requested page
    pages[pageId].classList.add('active');
    state.currentPage = pageId;
    
    // Update the current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

function enableKeyboardActivation(element) {
    if (!element) return;

    const tag = element.tagName ? element.tagName.toLowerCase() : '';
    const nativelyFocusable = tag === 'button' || tag === 'a' || tag === 'input' || tag === 'select' || tag === 'textarea';

    if (!nativelyFocusable && !element.hasAttribute('tabindex')) {
        element.setAttribute('tabindex', '0');
    }

    if (!element.hasAttribute('role') && (tag === 'div' || tag === 'span')) {
        element.setAttribute('role', 'button');
    }

    if (!nativelyFocusable && !element.dataset.keyboardBound) {
        element.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                element.click();
            }
        });
        element.dataset.keyboardBound = 'true';
    }
}

function configureAccessibilityEnhancements() {
    [
        'overall-grammar-test',
        'grammar-topics',
        'overall-vocabulary-test',
        'vocabulary-topics',
        'unit-grammar',
        'unit-vocabulary',
        'unit-writing',
        'retry-btn',
        'new-test-btn',
        'home-results-btn',
        'submit-blank-btn',
        'prev-btn',
        'next-btn',
        'finish-btn'
    ].forEach(id => {
        enableKeyboardActivation(document.getElementById(id));
    });

    document.querySelectorAll('.level-card').forEach(card => {
        enableKeyboardActivation(card);
    });

    document.querySelectorAll('.test-link').forEach(link => {
        enableKeyboardActivation(link);
    });

    const feedback = document.getElementById('feedback');
    if (feedback) {
        feedback.setAttribute('role', 'status');
        feedback.setAttribute('aria-live', 'polite');
    }

    const currentScore = document.getElementById('current-score');
    if (currentScore) {
        currentScore.setAttribute('aria-live', 'polite');
    }

    const finalScore = document.getElementById('final-score');
    if (finalScore) {
        finalScore.setAttribute('aria-live', 'polite');
    }
}

function setupEventListeners() {
    configureAccessibilityEnhancements();

    // Home page buttons
    document.getElementById('grammar-btn').addEventListener('click', () => {
        showPage('grammarMenu');
    });
    
    document.getElementById('vocabulary-btn').addEventListener('click', () => {
        showPage('vocabularyMenu');
    });
    
    // Grammar menu buttons
    document.getElementById('overall-grammar-test').addEventListener('click', () => {
        startOverallTest('grammar');
    });
    
    document.getElementById('grammar-topics').addEventListener('click', () => {
        showTopicSelection('grammar');
    });
    
    // Vocabulary menu buttons
    document.getElementById('overall-vocabulary-test').addEventListener('click', () => {
        startOverallTest('vocabulary');
    });
    
    document.getElementById('vocabulary-topics').addEventListener('click', () => {
        showTopicSelection('vocabulary');
    });
    
    // Back buttons
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (state.currentPage === 'grammarMenu' || state.currentPage === 'vocabularyMenu') {
                showPage('home');
            } else if (state.currentPage === 'topicSelection') {
                if (state.testType === 'grammar') {
                    showPage('grammarMenu');
                } else {
                    showPage('vocabularyMenu');
                }
            } else if (state.currentPage === 'testSection') {
                if (state.testMode === 'overall') {
                    if (state.testType === 'grammar') {
                        showPage('grammarMenu');
                    } else {
                        showPage('vocabularyMenu');
                    }
                } else {
                    showPage('topicSelection');
                }
            } else if (state.currentPage === 'resultsSection') {
                showPage('home');
            }
        });
    });
    
    // Test navigation buttons
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('prev-btn').addEventListener('click', previousQuestion);
    document.getElementById('finish-btn').addEventListener('click', finishTest);
    document.getElementById('submit-blank-btn').addEventListener('click', submitBlankAnswer);
    
    // Results buttons
    document.getElementById('retry-btn').addEventListener('click', retryTest);
    document.getElementById('new-test-btn').addEventListener('click', () => {
        if (state.testType === 'grammar') {
            showPage('grammarMenu');
        } else {
            showPage('vocabularyMenu');
        }
    });
    document.getElementById('home-results-btn').addEventListener('click', () => {
        showPage('home');
    });
    
    // Fill in the blank input
    document.getElementById('fill-blank-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitBlankAnswer();
        }
    });

    document.querySelectorAll('.test-link').forEach(link => {
        link.addEventListener('click', () => {
            window.location.href = "test.html";
        });
    });
}

// Test functions
function startOverallTest(type) {
    state.testType = type;
    state.testMode = 'overall';
    state.currentQuestionIndex = 0;
    state.userAnswers = [];
    state.score = 0;
    
    // Get 30 random questions
    let allQuestions = [];
    
    if (type === 'grammar') {
        grammarTopics.forEach(topic => {
            allQuestions = allQuestions.concat(topic.questions.map(q => ({
                ...cloneQuestionForTestSession(q),
                topic: topic.title
            })));
        });
    } else {
        vocabularyTopics.forEach(topic => {
            allQuestions = allQuestions.concat(topic.questions.map(q => ({
                ...cloneQuestionForTestSession(q),
                topic: topic.title
            })));
        });
    }
    
    // Shuffle and get first 30 questions
    allQuestions = shuffleArray(allQuestions).slice(0, 30);
    state.currentTest = allQuestions;
    
    // Update test UI
    document.getElementById('test-topic').textContent = `Overall ${type === 'grammar' ? 'Grammar' : 'Vocabulary'} Test`;
    document.getElementById('total-questions').textContent = state.currentTest.length;
    
    showPage('testSection');
    renderQuestion();
}

function showTopicSelection(type) {
    state.testType = type;
    
    const topicsContainer = document.getElementById('topics-container');
    topicsContainer.innerHTML = '';
    
    const topics = type === 'grammar' ? grammarTopics : vocabularyTopics;
    document.getElementById('topic-selection-title').textContent = `Select a ${type === 'grammar' ? 'Grammar' : 'Vocabulary'} Topic`;
    
    topics.forEach(topic => {
        const topicCard = document.createElement('div');
        topicCard.className = 'topic-card';
        topicCard.innerHTML = `
            <div class="topic-number">${topic.id}</div>
            <h3>${topic.title}</h3>
            <p>${topic.description}</p>
            <div class="topic-info">
                <span><i class="fas fa-question-circle"></i> ${topic.questions.length} questions</span>
                <span><i class="fas fa-clock"></i> 12-20 min</span>
            </div>
        `;

        enableKeyboardActivation(topicCard);
        topicCard.addEventListener('click', () => {
            startTopicTest(topic.id);
        });
        
        topicsContainer.appendChild(topicCard);
    });
    
    showPage('topicSelection');
}

function startTopicTest(topicId) {
    state.testMode = 'topic';
    state.currentQuestionIndex = 0;
    state.userAnswers = [];
    state.score = 0;
    
    const topics = state.testType === 'grammar' ? grammarTopics : vocabularyTopics;
    const topic = topics.find(t => t.id === topicId);
    
    if (!topic) return;
    
    state.currentTopic = topic;
    state.currentTest = buildTopicFocusedMixedTest(topic, topics);
    
    // Update test UI
    document.getElementById('test-topic').textContent = `${topic.title} - ${state.testType === 'grammar' ? 'Grammar' : 'Vocabulary'}`;
    document.getElementById('total-questions').textContent = state.currentTest.length;
    
    showPage('testSection');
    renderQuestion();
}

function renderQuestion() {
    if (!state.currentTest || state.currentTest.length === 0) return;
    
    const question = state.currentTest[state.currentQuestionIndex];
    const questionType = question.type;
    
    // Update progress
    const progressPercentage = ((state.currentQuestionIndex + 1) / state.currentTest.length) * 100;
    document.getElementById('progress-fill').style.width = `${progressPercentage}%`;
    document.getElementById('current-question').textContent = state.currentQuestionIndex + 1;
    
    // Update question text
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('question-type').textContent = questionType === 'multiple-choice' ? 'Multiple Choice' : 'Fill in the Blank';
    
    // Clear previous feedback
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('feedback').className = 'feedback';
    
    // Show/hide appropriate containers
    if (questionType === 'multiple-choice') {
        document.getElementById('options-container').style.display = 'grid';
        document.getElementById('fill-blank-container').style.display = 'none';
        
        // Render options
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            optionBtn.textContent = option;
            optionBtn.dataset.value = option;
            
            // Check if this option was previously selected
            if (state.userAnswers[state.currentQuestionIndex] && 
                state.userAnswers[state.currentQuestionIndex].selected === option) {
                optionBtn.classList.add('selected');
                
                // Show feedback if answer was checked
                if (state.userAnswers[state.currentQuestionIndex].checked) {
                    showFeedback(state.userAnswers[state.currentQuestionIndex].isCorrect, question.answer);
                }
            }
            
            optionBtn.addEventListener('click', () => {
                selectOption(option, optionBtn);
            });
            
            optionsContainer.appendChild(optionBtn);
        });
    } else {
        document.getElementById('options-container').style.display = 'none';
        document.getElementById('fill-blank-container').style.display = 'block';
        
        // Clear the input and enable it
        const fillBlankInput = document.getElementById('fill-blank-input');
        fillBlankInput.value = '';
        fillBlankInput.disabled = false;
        fillBlankInput.focus();
        
        document.getElementById('submit-blank-btn').disabled = false;
        
        // Check if this question was previously answered
        if (state.userAnswers[state.currentQuestionIndex]) {
            fillBlankInput.value = state.userAnswers[state.currentQuestionIndex].selected || '';
            
            if (state.userAnswers[state.currentQuestionIndex].checked) {
                showFeedback(state.userAnswers[state.currentQuestionIndex].isCorrect, question.answer);
                fillBlankInput.disabled = true;
                document.getElementById('submit-blank-btn').disabled = true;
            }
        }
    }
    
    // Update navigation buttons
    document.getElementById('prev-btn').disabled = state.currentQuestionIndex === 0;
    
    // Next button should be enabled only if current question is answered
    const isAnswered = state.userAnswers[state.currentQuestionIndex] && 
                      state.userAnswers[state.currentQuestionIndex].checked;
    document.getElementById('next-btn').disabled = !isAnswered && state.currentQuestionIndex < state.currentTest.length - 1;
    
    // Update score display
    updateScoreDisplay();
}

function selectOption(option, targetButton = null) {
    // Remove selected class from all options
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    const optionSelectorValue = (typeof CSS !== 'undefined' && typeof CSS.escape === 'function')
        ? CSS.escape(String(option))
        : String(option).replace(/"/g, '\\"');
    const selectedButton = targetButton || document.querySelector(`.option-btn[data-value="${optionSelectorValue}"]`);
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }
    
    // Store the answer
    state.userAnswers[state.currentQuestionIndex] = {
        selected: option,
        checked: false,
        isCorrect: false
    };
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
    
    // Auto-check the answer for learning purposes
    checkAnswer();
}

function submitBlankAnswer() {
    const input = document.getElementById('fill-blank-input');
    const answer = input.value.trim();
    
    if (!answer) {
        // Show error message
        const feedbackEl = document.getElementById('feedback');
        feedbackEl.textContent = 'Please enter an answer.';
        feedbackEl.className = 'feedback incorrect';
        feedbackEl.style.display = 'block';
        return;
    }
    
    // Store the answer
    state.userAnswers[state.currentQuestionIndex] = {
        selected: answer,
        checked: false,
        isCorrect: false
    };
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
    
    // Check the answer
    checkAnswer();
}

function checkAnswer() {
    const question = state.currentTest[state.currentQuestionIndex];
    const userAnswer = state.userAnswers[state.currentQuestionIndex];
    
    if (!userAnswer) return;
    
    // Normalize text for robust fill-blank checks (case, spacing, trailing punctuation, apostrophes)
    const normalizeAnswerText = (value) => String(value || '')
        .trim()
        .toLowerCase()
        .replace(/[’`]/g, "'")
        .replace(/\s+/g, ' ')
        .replace(/[.!?]+$/g, '');

    const isCorrect = question.type === 'multiple-choice'
        ? userAnswer.selected === question.answer
        : (
            Array.isArray(question.answer)
                ? question.answer.some(expected => normalizeAnswerText(userAnswer.selected) === normalizeAnswerText(expected))
                : normalizeAnswerText(userAnswer.selected) === normalizeAnswerText(question.answer)
        );
    userAnswer.isCorrect = isCorrect;
    userAnswer.checked = true;
    
    // Show feedback
    showFeedback(isCorrect, question.answer);
    
    // Update score
    if (isCorrect) {
        state.score++;
    }
    
    // Update UI based on question type
    if (question.type === 'multiple-choice') {
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.value === question.answer) {
                btn.classList.add('correct');
            } else if (btn.dataset.value === userAnswer.selected && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
    } else {
        document.getElementById('fill-blank-input').disabled = true;
        document.getElementById('submit-blank-btn').disabled = true;
    }
    
    updateScoreDisplay();
}

function showFeedback(isCorrect, correctAnswer) {
    const feedbackEl = document.getElementById('feedback');
    feedbackEl.style.display = 'block';
    
    if (isCorrect) {
        feedbackEl.textContent = 'Correct! Well done.';
        feedbackEl.className = 'feedback correct';
    } else {
        const answerText = Array.isArray(correctAnswer) ? correctAnswer.join(' / ') : correctAnswer;
        feedbackEl.textContent = `Incorrect. The correct answer is: ${answerText}`;
        feedbackEl.className = 'feedback incorrect';
    }
}

function updateScoreDisplay() {
    const totalAnswered = state.userAnswers.filter(a => a && a.checked).length;
    const currentScore = totalAnswered > 0 ? Math.round((state.score / totalAnswered) * 100) : 0;
    document.getElementById('current-score').textContent = currentScore;
}

function nextQuestion() {
    if (state.currentQuestionIndex < state.currentTest.length - 1) {
        state.currentQuestionIndex++;
        renderQuestion();
    } else {
        finishTest();
    }
}

function previousQuestion() {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        renderQuestion();
    }
}

function finishTest() {
    // Calculate final score
    const totalQuestions = state.currentTest.length;
    const correctAnswers = state.userAnswers.filter(a => a && a.isCorrect).length;
    const wrongAnswers = totalQuestions - correctAnswers;
    const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Determine grade
    let grade = '';
    if (scorePercentage >= 90) {
        grade = 'Excellent';
    } else if (scorePercentage >= 70) {
        grade = 'Good';
    } else {
        grade = 'Try Again';
    }
    
    // Update results UI
    document.getElementById('correct-answers').textContent = correctAnswers;
    document.getElementById('total-answers').textContent = totalQuestions;
    document.getElementById('wrong-answers').textContent = wrongAnswers;
    document.getElementById('final-score').textContent = `${scorePercentage}%`;
    document.getElementById('score-grade').textContent = grade;
    
    // Set the circular progress
    const circle = document.querySelector('.score-circle-fill');
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (scorePercentage / 100) * circumference;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = offset;
    
    // Update test completed message
    const testName = state.testMode === 'overall' 
        ? `Overall ${state.testType} Test` 
        : `${state.currentTopic.title} ${state.testType} Test`;
    document.getElementById('test-completed-message').textContent = `You've completed the ${testName}`;
    
    // Generate breakdown
    const breakdownContent = document.getElementById('breakdown-content');
    breakdownContent.innerHTML = '';
    
    state.currentTest.forEach((question, index) => {
        const userAnswer = state.userAnswers[index];
        const isCorrect = userAnswer && userAnswer.isCorrect;
        const answerText = userAnswer ? userAnswer.selected : 'Not answered';
        
        const item = document.createElement('div');
        item.className = 'breakdown-item';
        item.innerHTML = `
            <div class="breakdown-question">Q${index + 1}: ${question.question.substring(0, 50)}...</div>
            <div class="breakdown-result ${isCorrect ? 'correct' : 'incorrect'}">
                ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
            </div>
        `;
        
        breakdownContent.appendChild(item);
    });
    
    showPage('resultsSection');
}

function retryTest() {
    if (state.testMode === 'overall') {
        startOverallTest(state.testType);
    } else {
        startTopicTest(state.currentTopic.id);
    }
}

// Utility functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function cloneQuestionForTestSession(question) {
    if (!question || typeof question !== 'object') return question;

    const cloned = {
        ...question,
        answer: Array.isArray(question.answer) ? question.answer.slice() : question.answer
    };

    if (Array.isArray(question.options)) {
        cloned.options = shuffleArray(question.options.slice());
    }

    return cloned;
}

// Initialize the application
function optimizeHeroVideoPlayback() {
    const video = document.getElementById('background-video');
    if (!video) return;
    if (video.tagName !== 'VIDEO') return;

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmallViewport = window.matchMedia && window.matchMedia('(max-width: 820px)').matches;
    const saveData = navigator.connection && navigator.connection.saveData;

    if (prefersReducedMotion || saveData || isSmallViewport) {
        video.pause();
        video.removeAttribute('autoplay');
        video.setAttribute('preload', 'none');
    } else {
        video.setAttribute('preload', 'metadata');
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(() => {});
        }
    }
}

function init() {
    setupEventListeners();
    optimizeHeroVideoPlayback();
    showPage('home');
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
window.addEventListener('resize', optimizeHeroVideoPlayback);
window.addEventListener("scroll", function() {

    const bg = document.querySelector(".hero-bg");
    if (!bg) return;

    const scroll = window.scrollY;

    bg.style.transform =
        "translateY(" + scroll * 0.4 + "px)";

});
function openLevel(level) {

    alert("Clicked"); // test

    window.location.href = "test.html";

}
// LEVEL TEST START FUNCTION
function openLevel(level) {

    // set test title
    document.getElementById("test-topic").innerText =
        level + " English Test";


    // hide all pages
    document.querySelectorAll(".page").forEach(page => {

        page.style.display = "none";

    });


    // show test section
    document.getElementById("test-section").style.display = "block";


    // reset values
    window.currentQuestionIndex = 0;
    window.score = 0;


    // example questions (replace later)
    window.currentQuestions = [

        {
            question: "I ___ a student.",
            options: ["am", "is", "are", "be"],
            answer: "am"
        },

        {
            question: "She ___ English.",
            options: ["speak", "speaks", "speaking", "spoken"],
            answer: "speaks"
        }

    ];


    loadLevelQuestion();

}


// LOAD QUESTION
function loadLevelQuestion() {

    const q = window.currentQuestions[window.currentQuestionIndex];

    if (!q) {

        alert("Test finished. Score: " + window.score);
        return;

    }


    document.getElementById("question-text").innerText = q.question;


    const container =
        document.getElementById("options-container");

    container.innerHTML = "";


    q.options.forEach(option => {

        const btn = document.createElement("button");

        btn.className = "option-btn";

        btn.innerText = option;

        btn.onclick = function () {

            if (option === q.answer) {

                window.score++;

            }

            window.currentQuestionIndex++;

            loadLevelQuestion();

        };

        container.appendChild(btn);

    });

}


// LEVEL TEST INTEGRATION (ADDITIVE, NON-DESTRUCTIVE)
Object.defineProperties(window, {
    currentTestQuestions: {
        get() { return state.currentTest; },
        set(value) { state.currentTest = value; }
    },
    currentQuestionIndex: {
        get() { return state.currentQuestionIndex; },
        set(value) { state.currentQuestionIndex = value; }
    },
    correctAnswersCount: {
        get() { return state.score; },
        set(value) { state.score = value; }
    },
    selectedAnswers: {
        get() { return state.userAnswers; },
        set(value) { state.userAnswers = value; }
    }
});

function loadQuestion() {
    renderQuestion();
}

const levelTopicMap = {
    A1: [0, 4],
    A2: [0, 4],
    B1: [5, 9],
    B2: [10, 14],
    C1: [10, 14],
    C2: [10, 14]
};

const levelClassMap = {
    a1: 'A1',
    a2: 'A2',
    b1: 'B1',
    b2: 'B2',
    c1: 'C1',
    c2: 'C2'
};

const topicContrastMap = {
    1: [4, 11, 12],
    2: [5, 8, 13],
    3: [6, 9, 11, 12],
    4: [1, 5, 13],
    5: [2, 4, 6],
    6: [3, 5, 9, 11],
    7: [8, 9, 4],
    8: [7, 9, 5],
    9: [7, 8, 6, 11, 12],
    10: [11, 12, 13, 14, 15],
    11: [10, 12, 3, 9],
    12: [11, 10, 3, 9],
    13: [10, 14, 15],
    14: [13, 15, 10],
    15: [13, 14, 10]
};

function createTopicQuestionEntry(question, topicTitle) {
    return {
        ...cloneQuestionForTestSession(question),
        topic: topicTitle
    };
}

function getTopicMixCandidates(topicId, topics) {
    const topicMap = new Map(topics.map(topic => [topic.id, topic]));
    const configured = topicContrastMap[topicId] || [];
    const nearby = [topicId - 1, topicId + 1, topicId - 2, topicId + 2];
    const fallback = topics.map(topic => topic.id);

    const orderedIds = [];
    [...configured, ...nearby, ...fallback].forEach(id => {
        if (!topicMap.has(id) || id === topicId || orderedIds.includes(id)) return;
        orderedIds.push(id);
    });

    return orderedIds.map(id => topicMap.get(id)).filter(Boolean);
}

function takeUniqueQuestions(pool, targetCount, usedKeys) {
    const result = [];

    for (const item of shuffleArray(pool)) {
        const key = `${item.topic || ''}::${item.question || ''}`;
        if (usedKeys.has(key)) continue;
        usedKeys.add(key);
        result.push(item);
        if (result.length >= targetCount) break;
    }

    return result;
}

function buildTopicFocusedMixedTest(topic, topics, totalQuestions = 20) {
    const mainPool = Array.isArray(topic.questions)
        ? topic.questions.map(question => createTopicQuestionEntry(question, topic.title))
        : [];

    const contrastPool = getTopicMixCandidates(topic.id, topics).flatMap(relatedTopic =>
        Array.isArray(relatedTopic.questions)
            ? relatedTopic.questions.map(question => createTopicQuestionEntry(question, relatedTopic.title))
            : []
    );

    const usedKeys = new Set();
    const mainTarget = Math.min(mainPool.length, 14);
    const mixedTarget = Math.max(0, totalQuestions - mainTarget);

    let selected = takeUniqueQuestions(mainPool, mainTarget, usedKeys);
    selected = selected.concat(takeUniqueQuestions(contrastPool, mixedTarget, usedKeys));

    if (selected.length < totalQuestions) {
        selected = selected.concat(
            takeUniqueQuestions(mainPool.concat(contrastPool), totalQuestions - selected.length, usedKeys)
        );
    }

    return shuffleArray(selected).slice(0, totalQuestions);
}

function getLevelFromCard(card) {
    for (const className in levelClassMap) {
        if (card.classList.contains(className)) {
            return levelClassMap[className];
        }
    }
    return null;
}

function collectLevelQuestions(level) {
    const range = levelTopicMap[level];
    if (!range) return [];

    const questions = [];
    const start = range[0];
    const end = range[1];

    for (let i = start; i <= end; i++) {
        const topic = grammarTopics[i];
        if (!topic || !Array.isArray(topic.questions)) continue;

        topic.questions.forEach(question => {
            questions.push({
                ...cloneQuestionForTestSession(question),
                topic: topic.title
            });
        });
    }

    return questions;
}

function startLevelTest(level) {
    const questions = collectLevelQuestions(level);
    if (questions.length === 0) return;

    currentTestQuestions = questions;
    currentQuestionIndex = 0;
    correctAnswersCount = 0;
    selectedAnswers = [];

    state.testType = 'grammar';
    state.testMode = 'level';
    state.currentLevel = level;
    state.currentTopic = { id: null, title: level };

    document.getElementById("test-topic").innerText = level + " English Test";
    document.getElementById('total-questions').textContent = currentTestQuestions.length;

    showPage('test-section');

    loadQuestion();
}

function bindLevelTestLinks() {
    document.querySelectorAll('.level-card .test-link').forEach(link => {
        enableKeyboardActivation(link);
        link.addEventListener('click', (event) => {
            const card = link.closest('.level-card');
            if (!card) return;

            const level = getLevelFromCard(card);
            if (!level) return;

            event.preventDefault();
            event.stopImmediatePropagation();
            startLevelTest(level);
        }, true);
    });
}

function openLevel(level) {
    startLevelTest(level);
}

function retryTest() {
    if (state.testMode === 'level-mixed' && state.currentLevel) {
        startLevelMixedTest(state.currentLevel);
        return;
    }

    if (state.testMode === 'level' && state.currentLevel) {
        startLevelTest(state.currentLevel);
        return;
    }

    if (state.testMode === 'overall') {
        startOverallTest(state.testType);
    } else {
        startTopicTest(state.currentTopic.id);
    }
}

document.addEventListener('DOMContentLoaded', bindLevelTestLinks);

/* ===== Unit-Based Level Flow Extension (Additive) ===== */
const unitQuestions = {};

const a1Unit1Override = {
    unit: 1,
grammar: [
    {
        type: "multiple-choice",
        question: "I have ___ book.",
        options: ["a", "an", "the"],
        answer: "a"
    },
    {
        type: "multiple-choice",
        question: "She is ___ engineer.",
        options: ["a", "an", "the"],
        answer: "an"
    },
    {
        type: "multiple-choice",
        question: "He has ___ car.",
        options: ["a", "an", "the"],
        answer: "a"
    },
    {
        type: "multiple-choice",
        question: "It is ___ apple.",
        options: ["a", "an", "the"],
        answer: "an"
    },
    {
        type: "multiple-choice",
        question: "I see ___ dog.",
        options: ["a", "an", "the"],
        answer: "a"
    },
    {
        type: "multiple-choice",
        question: "She eats ___ orange every day.",
        options: ["a", "an", "the"],
        answer: "an"
    },
    {
        type: "multiple-choice",
        question: "He is ___ student.",
        options: ["a", "an", "the"],
        answer: "a"
    },
    {
        type: "multiple-choice",
        question: "This is ___ umbrella.",
        options: ["a", "an", "the"],
        answer: "an"
    },
    {
        type: "multiple-choice",
        question: "I need ___ pen.",
        options: ["a", "an", "the"],
        answer: "a"
    },
    {
        type: "multiple-choice",
        question: "She wants ___ egg.",
        options: ["a", "an", "the"],
        answer: "an"
    }
],

    vocabulary: [
        {
            type: "multiple-choice",
            question: "Choose the correct translation: миллат",
            options: ["nationality", "address", "surname"],
            answer: "nationality"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: суроға",
            options: ["address", "city", "country"],
            answer: "address"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: насаб",
            options: ["surname", "email", "nationality"],
            answer: "surname"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: шаҳр",
            options: ["city", "country", "address"],
            answer: "city"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: кишвар",
            options: ["country", "city", "surname"],
            answer: "country"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: оиладор",
            options: ["married", "single", "nationality"],
            answer: "married"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: муҷаррад",
            options: ["single", "married", "country"],
            answer: "single"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: почтаи электронӣ",
            options: ["email", "address", "surname"],
            answer: "email"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: байналмилалӣ",
            options: ["international", "national", "local"],
            answer: "international"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: рақами телефон",
            options: ["phone number", "address", "surname"],
            answer: "phone number"
        }
    ],
    writing: [
    {
        type: "fill-blank",
        question: "Plural of book → ______",
        answer: "books"
    },
    {
        type: "fill-blank",
        question: "Plural of city → ______",
        answer: "cities"
    },
    {
        type: "fill-blank",
        question: "Plural of bus → ______",
        answer: "buses"
    },
    {
        type: "fill-blank",
        question: "Plural of baby → ______",
        answer: "babies"
    },
    {
        type: "fill-blank",
        question: "Plural of class → ______",
        answer: "classes"
    },
    {
        type: "fill-blank",
        question: "Plural of man → ______",
        answer: "men"
    },
    {
        type: "fill-blank",
        question: "Plural of woman → ______",
        answer: "women"
    },
    {
        type: "fill-blank",
        question: "Plural of child → ______",
        answer: "children"
    },
    {
        type: "fill-blank",
        question: "Plural of person → ______",
        answer: "people"
    },
    {
        type: "fill-blank",
        question: "Plural of apple → ______",
        answer: "apples"
    }
]
};

const a1Unit2Override = {
    unit: 2,
    grammar: [
        {
            type: "multiple-choice",
            question: "She ___ my sister.",
            options: ["am", "is", "are"],
            answer: "is"
        },
        {
            type: "multiple-choice",
            question: "They ___ married.",
            options: ["am", "is", "are"],
            answer: "are"
        },
        {
            type: "multiple-choice",
            question: "___ he your brother?",
            options: ["Am", "Is", "Are"],
            answer: "Is"
        },
        {
            type: "multiple-choice",
            question: "I ___ not married.",
            options: ["am", "is", "are"],
            answer: "am"
        },
        {
            type: "multiple-choice",
            question: "We ___ from Tajikistan.",
            options: ["am", "is", "are"],
            answer: "are"
        },
        {
            type: "multiple-choice",
            question: "He ___ a doctor.",
            options: ["am", "is", "are"],
            answer: "is"
        },
        {
            type: "multiple-choice",
            question: "___ they your parents?",
            options: ["Am", "Is", "Are"],
            answer: "Are"
        },
        {
            type: "multiple-choice",
            question: "She ___ not my wife.",
            options: ["am", "is", "are"],
            answer: "is"
        },
        {
            type: "multiple-choice",
            question: "You ___ my friend.",
            options: ["am", "is", "are"],
            answer: "are"
        },
        {
            type: "multiple-choice",
            question: "___ she single?",
            options: ["Am", "Is", "Are"],
            answer: "Is"
        }
    ],
    vocabulary: [
        {
            type: "multiple-choice",
            question: "Choose the correct translation: оила",
            options: ["family", "company", "address"],
            answer: "family"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: шавҳар",
            options: ["husband", "brother", "friend"],
            answer: "husband"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: зан",
            options: ["wife", "mother", "sister"],
            answer: "wife"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: бародар",
            options: ["brother", "father", "husband"],
            answer: "brother"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: хоҳар",
            options: ["sister", "wife", "mother"],
            answer: "sister"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: падар",
            options: ["father", "brother", "friend"],
            answer: "father"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: модар",
            options: ["mother", "wife", "sister"],
            answer: "mother"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: касб",
            options: ["job", "family", "country"],
            answer: "job"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: ширкат",
            options: ["company", "city", "address"],
            answer: "company"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: дӯст",
            options: ["friend", "father", "husband"],
            answer: "friend"
        }
    ],
   writing: [
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Вай хоҳари ман аст. → ______",
        answer: ["She is my sister.", "She's my sister."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Онҳо дӯстони ман ҳастанд. → ______",
        answer: ["They are my friends.", "They're my friends."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ӯ бародари ман аст. → ______",
        answer: ["He is my brother.", "He's my brother."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Вай шавҳардор нест. → ______",
        answer: ["She is not married.", "She isn't married."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ман донишҷӯ нестам. → ______",
        answer: ["I am not a student.", "I'm not a student."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Онҳо дар хона нестанд. → ______",
        answer: ["They are not at home.", "They aren't at home."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ӯ духтур нест. → ______",
        answer: ["He is not a doctor.", "He isn't a doctor."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Оё вай хоҳари ту аст? → ______",
        answer: ["Is she your sister?"]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Оё онҳо дӯстони ту ҳастанд? → ______",
        answer: ["Are they your friends?"]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Оё ӯ муаллим аст? → ______",
        answer: ["Is he a teacher?"]
    }
]
};


const a1Unit3Override = {
    unit: 3,
grammar: [
    {
        type: "multiple-choice",
        question: "This is ___ book.",
        options: ["my", "me", "I"],
        answer: "my"
    },
    {
        type: "multiple-choice",
        question: "She is ___ sister.",
        options: ["my", "mine", "I"],
        answer: "my"
    },
    {
        type: "multiple-choice",
        question: "He is ___ friend.",
        options: ["my", "me", "mine"],
        answer: "my"
    },
    {
        type: "multiple-choice",
        question: "This is ___ car.",
        options: ["his", "he", "him"],
        answer: "his"
    },
    {
        type: "multiple-choice",
        question: "That is ___ bag.",
        options: ["her", "she", "hers"],
        answer: "her"
    },
    {
        type: "multiple-choice",
        question: "We love ___ teacher.",
        options: ["our", "us", "we"],
        answer: "our"
    },
    {
        type: "multiple-choice",
        question: "They live in ___ house.",
        options: ["their", "them", "they"],
        answer: "their"
    },
    {
        type: "multiple-choice",
        question: "I have a dog. ___ name is Rex.",
        options: ["Its", "It", "It's"],
        answer: "Its"
    },
    {
        type: "multiple-choice",
        question: "Is this ___ pen?",
        options: ["your", "you", "yours"],
        answer: "your"
    },
    {
        type: "multiple-choice",
        question: "This is ___ classroom.",
        options: ["our", "we", "ours"],
        answer: "our"
    }
],

    vocabulary: [
        {
            type: "multiple-choice",
            question: "Choose the correct translation: кор",
            options: ["work", "job", "company"],
            answer: "work"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: коргар",
            options: ["worker", "teacher", "doctor"],
            answer: "worker"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: духтур",
            options: ["doctor", "teacher", "worker"],
            answer: "doctor"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: омӯзгор",
            options: ["teacher", "doctor", "worker"],
            answer: "teacher"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: ширкат",
            options: ["company", "office", "school"],
            answer: "company"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: офис",
            options: ["office", "company", "job"],
            answer: "office"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: бонк",
            options: ["bank", "school", "company"],
            answer: "bank"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: мактаб",
            options: ["school", "bank", "office"],
            answer: "school"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: беморхона",
            options: ["hospital", "school", "office"],
            answer: "hospital"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: кор кардан",
            options: ["work", "live", "teach"],
            answer: "work"
        }
    ],
   writing: [
    {
        type: "fill-blank",
        question: "Ба англисӣ тарҷума кунед: Ин китоби ман аст. → ______",
        answer: ["This is my book.", "It's my book."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ тарҷума кунед: Ин мошини ӯ аст. (мард) → ______",
        answer: ["This is his car.", "It's his car."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ тарҷума кунед: Ин сумкаи вай аст. (зан) → ______",
        answer: ["This is her bag.", "It's her bag."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ тарҷума кунед: Ин хонаи мо аст. → ______",
        answer: ["This is our house.", "It's our house."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ тарҷума кунед: Ин мактаби онҳо аст. → ______",
        answer: ["This is their school.", "It's their school."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ тарҷума кунед: Ин қалами ту аст. → ______",
        answer: ["This is your pen.", "It's your pen."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ тарҷума кунед: Ин телефони ман нест. → ______",
        answer: ["This is not my phone.", "This isn't my phone."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ тарҷума кунед: Ин мошини ӯ нест. (зан) → ______",
        answer: ["This is not her car.", "This isn't her car."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ тарҷума кунед: Оё ин китоби ту аст? → ______",
        answer: ["Is this your book?"]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ тарҷума кунед: Оё ин хонаи онҳо аст? → ______",
        answer: ["Is this their house?"]
    }
]
};

const a1Unit4Override = {
    unit: 4,
grammar: [
    {
        type: "multiple-choice",
        question: "This is ___ car.",
        options: ["Muhammad's", "Muhammad", "Muhammads"],
        answer: "Muhammad's"
    },
    {
        type: "multiple-choice",
        question: "This is ___ book.",
        options: ["the teacher's", "the teacher", "the teachers"],
        answer: "the teacher's"
    },
    {
        type: "multiple-choice",
        question: "This is ___ ball.",
        options: ["the boys'", "the boys", "the boy"],
        answer: "the boys'"
    },
    {
        type: "multiple-choice",
        question: "That is ___ house.",
        options: ["Ali's", "Ali", "Alis"],
        answer: "Ali's"
    },
    {
        type: "multiple-choice",
        question: "This is ___ office.",
        options: ["the manager's", "the manager", "the managers"],
        answer: "the manager's"
    },
    {
        type: "multiple-choice",
        question: "This is ___ classroom.",
        options: ["the students'", "the student", "the students"],
        answer: "the students'"
    },
    {
        type: "multiple-choice",
        question: "That is ___ phone.",
        options: ["my friend's", "my friend", "my friends"],
        answer: "my friend's"
    },
    {
        type: "multiple-choice",
        question: "This is ___ car.",
        options: ["my father's", "my father", "my fathers"],
        answer: "my father's"
    },
    {
        type: "multiple-choice",
        question: "This is ___ bag.",
        options: ["the girl's", "the girls", "the girl"],
        answer: "the girl's"
    },
    {
        type: "multiple-choice",
        question: "That is ___ teacher.",
        options: ["John's", "John", "Johns"],
        answer: "John's"
    }
],

    vocabulary: [
        {
            type: "multiple-choice",
            question: "Choose the correct translation: бедор шудан",
            options: ["sleep", "wake up", "work"],
            answer: "wake up"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: субҳона",
            options: ["breakfast", "dinner", "lunch"],
            answer: "breakfast"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: телевизор тамошо кардан",
            options: ["watch TV", "read", "work"],
            answer: "watch TV"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: хоб рафтан",
            options: ["wake up", "sleep", "eat"],
            answer: "sleep"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: кор кардан",
            options: ["work", "sleep", "watch"],
            answer: "work"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: хондан",
            options: ["write", "read", "eat"],
            answer: "read"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: қаҳва",
            options: ["tea", "milk", "coffee"],
            answer: "coffee"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: нисфирӯзӣ",
            options: ["morning", "afternoon", "night"],
            answer: "afternoon"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: шаб",
            options: ["evening", "morning", "night"],
            answer: "night"
        },
        {
            type: "multiple-choice",
        question: "Choose the correct translation: идора",
            options: ["home", "office", "school"],
            answer: "office"
        }
    ],
    writing: [
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ин мошини афсар аст. → ______",
        answer: ["This is the officer's car.", "It's the officer's car."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ин кабинети командир аст. → ______",
        answer: ["This is the commander's office.", "It's the commander's office."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ин ҳуҷҷати корманд аст. → ______",
        answer: ["This is the employee's document.", "It's the employee's document."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ин телефони афсар нест. → ______",
        answer: ["This is not the officer's phone.", "This isn't the officer's phone."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ин кабинети генерал нест. → ______",
        answer: ["This is not the general's office.", "This isn't the general's office."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ин мошини командир нест. → ______",
        answer: ["This is not the commander's car.", "This isn't the commander's car."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ин ҳуҷҷати корманд нест. → ______",
        answer: ["This is not the employee's document.", "This isn't the employee's document."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Оё ин мошини афсар аст? → ______",
        answer: ["Is this the officer's car?"]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Оё ин кабинети командир аст? → ______",
        answer: ["Is this the commander's office?"]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Оё ин ҳуҷҷати генерал аст? → ______",
        answer: ["Is this the general's document?"]
    }
]
};


const a1Unit5Override = {
   unit: 5,
grammar: [
    {
        type: "multiple-choice",
        question: "I ___ English every day.",
        options: ["study", "studies", "studying"],
        answer: "study"
    },
    {
        type: "multiple-choice",
        question: "She ___ in an office.",
        options: ["work", "works", "working"],
        answer: "works"
    },
    {
        type: "multiple-choice",
        question: "They ___ coffee in the morning.",
        options: ["drink", "drinks", "drinking"],
        answer: "drink"
    },
    {
        type: "multiple-choice",
        question: "He ___ TV in the evening.",
        options: ["watch", "watches", "watching"],
        answer: "watches"
    },
    {
        type: "multiple-choice",
        question: "We ___ in Dushanbe.",
        options: ["live", "lives", "living"],
        answer: "live"
    },
    {
        type: "multiple-choice",
        question: "The officer ___ a uniform.",
        options: ["wear", "wears", "wearing"],
        answer: "wears"
    },
    {
        type: "multiple-choice",
        question: "I ___ at 7 AM.",
        options: ["wake", "wakes", "waking"],
        answer: "wake"
    },
    {
        type: "multiple-choice",
        question: "She ___ English.",
        options: ["teach", "teaches", "teaching"],
        answer: "teaches"
    },
    {
        type: "multiple-choice",
        question: "They ___ in a police department.",
        options: ["work", "works", "working"],
        answer: "work"
    },
    {
        type: "multiple-choice",
        question: "He ___ to work every day.",
        options: ["go", "goes", "going"],
        answer: "goes"
    }
],

    vocabulary: [
        {
            type: "multiple-choice",
            question: "Choose the correct translation: хона",
            options: ["room", "house", "kitchen"],
            answer: "house"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: ҳуҷра",
            options: ["room", "house", "garden"],
            answer: "room"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: ошхона",
            options: ["kitchen", "bathroom", "bedroom"],
            answer: "kitchen"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: хобгоҳ",
            options: ["bathroom", "bedroom", "kitchen"],
            answer: "bedroom"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: ҳаммом",
            options: ["bedroom", "bathroom", "garden"],
            answer: "bathroom"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: ҳуҷраи меҳмон",
            options: ["living room", "bedroom", "kitchen"],
            answer: "living room"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: боғ",
            options: ["garden", "room", "house"],
            answer: "garden"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: тиреза",
            options: ["door", "window", "wall"],
            answer: "window"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: дар",
            options: ["window", "wall", "door"],
            answer: "door"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: девор",
            options: ["door", "wall", "window"],
            answer: "wall"
        }
    ],
    writing: [
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Афсар соати 6 бедор мешавад. → ______",
        answer: ["The officer wakes up at 6."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ӯ соати 7 аз хоб мехезад. → ______",
        answer: ["He gets up at 7."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ӯ соати 8 ба кор меравад. → ______",
        answer: ["He goes to work at 8."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ӯ либоси махсус мепӯшад. → ______",
        answer: ["He wears a uniform."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ӯ дар шуъбаи полис кор мекунад. → ______",
        answer: ["He works in a police department."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ӯ ҳуҷҷатҳоро тафтиш мекунад. → ______",
        answer: ["He checks documents."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ӯ бо одамон гап мезанад. → ______",
        answer: ["He talks to people."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ӯ соати 6 бегоҳ ба хона меравад. → ______",
        answer: ["He goes home at 6 PM."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ӯ шом хӯрок мехӯрад. → ______",
        answer: ["He eats dinner."]
    },
    {
        type: "fill-blank",
        question: "Ба англисӣ нависед: Ӯ шаб истироҳат мекунад. → ______",
        answer: ["He rests at night."]
    }
]
};


const a1Unit6Override = {
    unit: 6,
grammar: [
    {
        type: "multiple-choice",
        question: "___ you work in a police department?",
        options: ["Do", "Does", "Is"],
        answer: "Do"
    },
    {
        type: "multiple-choice",
        question: "___ she work in an office?",
        options: ["Do", "Does", "Is"],
        answer: "Does"
    },
    {
        type: "multiple-choice",
        question: "___ they live in Dushanbe?",
        options: ["Do", "Does", "Are"],
        answer: "Do"
    },
    {
        type: "multiple-choice",
        question: "___ he wear a uniform?",
        options: ["Do", "Does", "Is"],
        answer: "Does"
    },
    {
        type: "multiple-choice",
        question: "___ you speak English?",
        options: ["Do", "Does", "Are"],
        answer: "Do"
    },
    {
        type: "multiple-choice",
        question: "___ the officer work at night?",
        options: ["Do", "Does", "Is"],
        answer: "Does"
    },
    {
        type: "multiple-choice",
        question: "___ we study English every day?",
        options: ["Do", "Does", "Are"],
        answer: "Do"
    },
    {
        type: "multiple-choice",
        question: "___ he go to work at 8?",
        options: ["Do", "Does", "Is"],
        answer: "Does"
    },
    {
        type: "multiple-choice",
        question: "___ they drink coffee in the morning?",
        options: ["Do", "Does", "Are"],
        answer: "Do"
    },
    {
        type: "multiple-choice",
        question: "___ she use a computer?",
        options: ["Do", "Does", "Is"],
        answer: "Does"
    }
],

    vocabulary: [
        {
            type: "multiple-choice",
            question: "Choose the correct translation: сухан гуфтан",
            options: ["write", "speak", "read"],
            answer: "speak"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: хондан",
            options: ["read", "speak", "write"],
            answer: "read"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: навиштан",
            options: ["write", "read", "speak"],
            answer: "write"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: фаҳмидан",
            options: ["understand", "listen", "speak"],
            answer: "understand"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: гӯш кардан",
            options: ["read", "listen", "write"],
            answer: "listen"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: рондан",
            options: ["drive", "cook", "work"],
            answer: "drive"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: истифода бурдан",
            options: ["use", "drive", "listen"],
            answer: "use"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: компютер",
            options: ["phone", "computer", "email"],
            answer: "computer"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: забон",
            options: ["language", "country", "city"],
            answer: "language"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: омӯзиш",
            options: ["study", "teach", "learn"],
            answer: "learn"
        }
    ],
   writing: [
    {
        type: "fill-blank",
        question: "Афсар дар шуъбаи полис кор мекунад. → ______",
        answer: ["The officer works in a police department."]
    },
    {
        type: "fill-blank",
        question: "Вай соати 6 бедор мешавад. → ______",
        answer: ["He wakes up at 6."]
    },
    {
        type: "fill-blank",
        question: "Онҳо дар Душанбе зиндагӣ мекунанд. → ______",
        answer: ["They live in Dushanbe."]
    },
    {
        type: "fill-blank",
        question: "Афсар дар офис кор намекунад. → ______",
        answer: ["The officer does not work in an office.", "The officer doesn't work in an office."]
    },
    {
        type: "fill-blank",
        question: "Вай либоси махсус намепӯшад. → ______",
        answer: ["He does not wear a uniform.", "He doesn't wear a uniform."]
    },
    {
        type: "fill-blank",
        question: "Онҳо қаҳва наменӯшанд. → ______",
        answer: ["They do not drink coffee.", "They don't drink coffee."]
    },
    {
        type: "fill-blank",
        question: "Оё афсар дар шуъбаи полис кор мекунад? → ______",
        answer: ["Does the officer work in a police department?"]
    },
    {
        type: "fill-blank",
        question: "Оё вай соати 6 бедор мешавад? → ______",
        answer: ["Does he wake up at 6?"]
    },
    {
        type: "fill-blank",
        question: "Оё онҳо дар Душанбе зиндагӣ мекунанд? → ______",
        answer: ["Do they live in Dushanbe?"]
    },
    {
        type: "fill-blank",
        question: "Оё вай либоси махсус мепӯшад? → ______",
        answer: ["Does he wear a uniform?"]
    }
]
};


const a1Unit7Override = {
    unit: 7,
grammar: [
    {
        type: "multiple-choice",
        question: "___ do you work? — In a police department.",
        options: ["Where", "What", "Who"],
        answer: "Where"
    },
    {
        type: "multiple-choice",
        question: "___ is your name? — Muhammad.",
        options: ["What", "Where", "When"],
        answer: "What"
    },
    {
        type: "multiple-choice",
        question: "___ do you wake up? — At 6 AM.",
        options: ["When", "Where", "Why"],
        answer: "When"
    },
    {
        type: "multiple-choice",
        question: "___ do you live? — In Dushanbe.",
        options: ["Where", "What", "Who"],
        answer: "Where"
    },
    {
        type: "multiple-choice",
        question: "___ do you do? — I am a police officer.",
        options: ["What", "Where", "When"],
        answer: "What"
    },
    {
        type: "multiple-choice",
        question: "___ is your commander? — Colonel Rahim.",
        options: ["Who", "What", "Where"],
        answer: "Who"
    },
    {
        type: "multiple-choice",
        question: "___ do you study English? — Because it is important.",
        options: ["Why", "Where", "Who"],
        answer: "Why"
    },
    {
        type: "multiple-choice",
        question: "___ do you go to work? — At 8 AM.",
        options: ["When", "What", "Who"],
        answer: "When"
    },
    {
        type: "multiple-choice",
        question: "___ do you speak English with? — With my teacher.",
        options: ["Who", "Where", "Why"],
        answer: "Who"
    },
    {
        type: "multiple-choice",
        question: "___ is your office? — On Rudaki Street.",
        options: ["Where", "When", "Why"],
        answer: "Where"
    }
],

   vocabulary: [
    {
        type: "multiple-choice",
        question: "Choose the correct translation: чӣ",
        options: ["what", "where", "when"],
        answer: "what"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: дар куҷо",
        options: ["who", "where", "why"],
        answer: "where"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: кай",
        options: ["when", "what", "which"],
        answer: "when"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: кӣ",
        options: ["whose", "who", "where"],
        answer: "who"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: чаро",
        options: ["why", "when", "how"],
        answer: "why"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: кадом",
        options: ["which", "what", "who"],
        answer: "which"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: чӣ тавр",
        options: ["how", "why", "where"],
        answer: "how"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: чандто",
        options: ["how many", "how much", "how"],
        answer: "how many"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: чанд қадар",
        options: ["how much", "how many", "what"],
        answer: "how much"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: чанд вақт (чанд маротиба)",
        options: ["how often", "how long", "when"],
        answer: "how often"
    }
],

    writing: [
    {
        type: "fill-blank",
        question: "Ту дар куҷо кор мекунӣ? → ______",
        answer: ["Where do you work?"]
    },
    {
        type: "fill-blank",
        question: "Номи ту чист? → ______",
        answer: ["What is your name?"]
    },
    {
        type: "fill-blank",
        question: "Ту кай бедор мешавӣ? → ______",
        answer: ["When do you wake up?"]
    },
    {
        type: "fill-blank",
        question: "Командири ту кист? → ______",
        answer: ["Who is your commander?"]
    },
    {
        type: "fill-blank",
        question: "Чаро ту забони англисиро меомӯзӣ? → ______",
        answer: ["Why do you study English?"]
    },
    {
        type: "fill-blank",
        question: "Ту кадом забонҳоро медонӣ? → ______",
        answer: ["Which languages do you speak?"]
    },
    {
        type: "fill-blank",
        question: "Ту чӣ тавр ба кор меравӣ? → ______",
        answer: ["How do you go to work?"]
    },
    {
        type: "fill-blank",
        question: "Чандто корманд дар шуъба кор мекунад? → ______",
        answer: ["How many employees work in the department?"]
    },
    {
        type: "fill-blank",
        question: "Ин чанд қадар вақт мегирад? → ______",
        answer: ["How much time does it take?"]
    },
    {
        type: "fill-blank",
        question: "Ту чанд вақт машқ мекунӣ? → ______",
        answer: ["How often do you train?"]
    }
]
};


const a1Unit8Override = {
    unit: 8,
grammar: [
    {
        type: "multiple-choice",
        question: "There ___ a police station in this city.",
        options: ["is", "are", "am"],
        answer: "is"
    },
    {
        type: "multiple-choice",
        question: "There ___ many officers in the department.",
        options: ["is", "are", "am"],
        answer: "are"
    },
    {
        type: "multiple-choice",
        question: "There ___ not a hospital near here.",
        options: ["is", "are", "am"],
        answer: "is"
    },
    {
        type: "multiple-choice",
        question: "There ___ not many cars on the street.",
        options: ["is", "are", "am"],
        answer: "are"
    },
    {
        type: "multiple-choice",
        question: "There ___ a commander in the office.",
        options: ["is", "are", "am"],
        answer: "is"
    },
    {
        type: "multiple-choice",
        question: "There ___ many rooms in this building.",
        options: ["is", "are", "am"],
        answer: "are"
    },
    {
        type: "multiple-choice",
        question: "___ there a police station near here?",
        options: ["Is", "Are", "Am"],
        answer: "Is"
    },
    {
        type: "multiple-choice",
        question: "___ there many officers in the office?",
        options: ["Is", "Are", "Am"],
        answer: "Are"
    },
    {
        type: "multiple-choice",
        question: "___ there a document on the table?",
        options: ["Is", "Are", "Am"],
        answer: "Is"
    },
    {
        type: "multiple-choice",
        question: "___ there many people in the building?",
        options: ["Is", "Are", "Am"],
        answer: "Are"
    }
],

    vocabulary: [
    {
        type: "multiple-choice",
        question: "Choose the correct translation: ҳамеша",
        options: ["always", "sometimes", "never"],
        answer: "always"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: одатан",
        options: ["usually", "never", "rarely"],
        answer: "usually"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: аксар вақт",
        options: ["often", "always", "never"],
        answer: "often"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: гоҳ-гоҳ",
        options: ["sometimes", "usually", "always"],
        answer: "sometimes"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: кам-кам",
        options: ["rarely", "often", "always"],
        answer: "rarely"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: ҳеҷ гоҳ",
        options: ["never", "sometimes", "usually"],
        answer: "never"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: ҳар рӯз",
        options: ["every day", "sometimes", "never"],
        answer: "every day"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: ҳар ҳафта",
        options: ["every week", "every day", "never"],
        answer: "every week"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: баъзан",
        options: ["occasionally", "always", "never"],
        answer: "occasionally"
    },
    {
        type: "multiple-choice",
        question: "Choose the correct translation: қариб ҳеҷ гоҳ",
        options: ["almost never", "always", "usually"],
        answer: "almost never"
    }
],

   writing: [
    {
        type: "fill-blank",
        question: "Дар шаҳр шуъбаи полис ҳаст. → ______",
        answer: ["There is a police department in the city."]
    },
    {
        type: "fill-blank",
        question: "Дар офис як афсар ҳаст. → ______",
        answer: ["There is an officer in the office."]
    },
    {
        type: "fill-blank",
        question: "Дар бино ҳуҷраҳои зиёд ҳастанд. → ______",
        answer: ["There are many rooms in the building."]
    },
    {
        type: "fill-blank",
        question: "Дар кӯча мошин нест. → ______",
        answer: ["There is not a car on the street.", "There isn't a car on the street."]
    },
    {
        type: "fill-blank",
        question: "Дар офис афсарон нестанд. → ______",
        answer: ["There are no officers in the office.", "There aren't any officers in the office."]
    },
    {
        type: "fill-blank",
        question: "Дар ин ҷо беморхона нест. → ______",
        answer: ["There is not a hospital here.", "There isn't a hospital here."]
    },
    {
        type: "fill-blank",
        question: "Оё дар шаҳр шуъбаи полис ҳаст? → ______",
        answer: ["Is there a police department in the city?"]
    },
    {
        type: "fill-blank",
        question: "Оё дар офис афсар ҳаст? → ______",
        answer: ["Is there an officer in the office?"]
    },
    {
        type: "fill-blank",
        question: "Оё дар бино ҳуҷраҳои зиёд ҳастанд? → ______",
        answer: ["Are there many rooms in the building?"]
    },
    {
        type: "fill-blank",
        question: "Оё дар кӯча мошинҳо ҳастанд? → ______",
        answer: ["Are there cars on the street?"]
    }
]
};

const a1Unit9Override = {
   unit: 9,
grammar: [
    {
        type: "multiple-choice",
        question: "I ___ at work yesterday.",
        options: ["was", "were", "am"],
        answer: "was"
    },
    {
        type: "multiple-choice",
        question: "They ___ at home last night.",
        options: ["was", "were", "is"],
        answer: "were"
    },
    {
        type: "multiple-choice",
        question: "She ___ in the office yesterday.",
        options: ["was", "were", "are"],
        answer: "was"
    },
    {
        type: "multiple-choice",
        question: "We ___ at the police station.",
        options: ["was", "were", "am"],
        answer: "were"
    },
    {
        type: "multiple-choice",
        question: "He ___ not at work yesterday.",
        options: ["was", "were", "is"],
        answer: "was"
    },
    {
        type: "multiple-choice",
        question: "They ___ not in the office.",
        options: ["was", "were", "are"],
        answer: "were"
    },
    {
        type: "multiple-choice",
        question: "___ you at home yesterday?",
        options: ["Was", "Were", "Are"],
        answer: "Were"
    },
    {
        type: "multiple-choice",
        question: "___ he at work last night?",
        options: ["Was", "Were", "Is"],
        answer: "Was"
    },
    {
        type: "multiple-choice",
        question: "___ they in the police department?",
        options: ["Was", "Were", "Are"],
        answer: "Were"
    },
    {
        type: "multiple-choice",
        question: "She ___ happy yesterday.",
        options: ["was", "were", "is"],
        answer: "was"
    }
],

    vocabulary: [
        {
            type: "multiple-choice",
            question: "Choose the correct translation: нон",
            options: ["bread", "rice", "milk"],
            answer: "bread"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: шир",
            options: ["milk", "water", "tea"],
            answer: "milk"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: об",
            options: ["water", "juice", "tea"],
            answer: "water"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: биринҷ",
            options: ["rice", "bread", "milk"],
            answer: "rice"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: гӯшт",
            options: ["meat", "bread", "rice"],
            answer: "meat"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: себ",
            options: ["apple", "banana", "orange"],
            answer: "apple"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: банан",
            options: ["banana", "apple", "rice"],
            answer: "banana"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: чой",
            options: ["tea", "milk", "water"],
            answer: "tea"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: қаҳва",
            options: ["coffee", "tea", "milk"],
            answer: "coffee"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: афшура",
            options: ["juice", "water", "milk"],
            answer: "juice"
        }
    ],
    writing: [
    {
        type: "fill-blank",
        question: "Ман дирӯз дар офис будам. → ______",
        answer: ["I was in the office yesterday."]
    },
    {
        type: "fill-blank",
        question: "Вай дирӯз дар шуъбаи полис буд. → ______",
        answer: ["He was in the police department yesterday."]
    },
    {
        type: "fill-blank",
        question: "Онҳо дирӯз дар хона буданд. → ______",
        answer: ["They were at home yesterday."]
    },
    {
        type: "fill-blank",
        question: "Ман дирӯз дар кор набудам. → ______",
        answer: ["I was not at work yesterday.", "I wasn't at work yesterday."]
    },
    {
        type: "fill-blank",
        question: "Вай дирӯз дар офис набуд. → ______",
        answer: ["He was not in the office yesterday.", "He wasn't in the office yesterday."]
    },
    {
        type: "fill-blank",
        question: "Онҳо дирӯз дар шуъба набуданд. → ______",
        answer: ["They were not in the department yesterday.", "They weren't in the department yesterday."]
    },
    {
        type: "fill-blank",
        question: "Оё ту дирӯз дар кор будӣ? → ______",
        answer: ["Were you at work yesterday?"]
    },
    {
        type: "fill-blank",
        question: "Оё вай дирӯз дар офис буд? → ______",
        answer: ["Was he in the office yesterday?"]
    },
    {
        type: "fill-blank",
        question: "Оё онҳо дирӯз дар хона буданд? → ______",
        answer: ["Were they at home yesterday?"]
    },
    {
        type: "fill-blank",
        question: "Оё афсар дирӯз дар шуъбаи полис буд? → ______",
        answer: ["Was the officer in the police department yesterday?"]
    }
]
};


const a1Unit10Override = {
    unit: 10,
grammar: [
    {
        type: "multiple-choice",
        question: "I ___ in the police department last year.",
        options: ["work", "worked", "working"],
        answer: "worked"
    },
    {
        type: "multiple-choice",
        question: "She ___ English yesterday.",
        options: ["study", "studied", "studying"],
        answer: "studied"
    },
    {
        type: "multiple-choice",
        question: "They ___ work yesterday.",
        options: ["did", "did not", "does"],
        answer: "did not"
    },
    {
        type: "multiple-choice",
        question: "He ___ visit the office last week.",
        options: ["did", "did not", "does"],
        answer: "did not"
    },
    {
        type: "multiple-choice",
        question: "We ___ TV last night.",
        options: ["watch", "watched", "watching"],
        answer: "watched"
    },
    {
        type: "multiple-choice",
        question: "She ___ her friend yesterday.",
        options: ["visit", "visited", "visiting"],
        answer: "visited"
    },
    {
        type: "multiple-choice",
        question: "___ you work yesterday?",
        options: ["Did", "Do", "Does"],
        answer: "Did"
    },
    {
        type: "multiple-choice",
        question: "___ he study English last year?",
        options: ["Did", "Does", "Do"],
        answer: "Did"
    },
    {
        type: "multiple-choice",
        question: "They ___ football last week.",
        options: ["play", "played", "playing"],
        answer: "played"
    },
    {
        type: "multiple-choice",
        question: "___ she visit the police station yesterday?",
        options: ["Did", "Do", "Does"],
        answer: "Did"
    }
],

    vocabulary: [
        {
            type: "multiple-choice",
            question: "Choose the correct translation: калон",
            options: ["big", "small", "long"],
            answer: "big"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: хурд",
            options: ["small", "big", "tall"],
            answer: "small"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: дароз",
            options: ["long", "short", "big"],
            answer: "long"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: кӯтоҳ",
            options: ["short", "long", "tall"],
            answer: "short"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: баланд",
            options: ["tall", "short", "small"],
            answer: "tall"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: зуд",
            options: ["fast", "slow", "big"],
            answer: "fast"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: суст",
            options: ["slow", "fast", "short"],
            answer: "slow"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: нав",
            options: ["new", "old", "big"],
            answer: "new"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: кӯҳна",
            options: ["old", "new", "small"],
            answer: "old"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: арзон",
            options: ["cheap", "expensive", "big"],
            answer: "cheap"
        }
    ],
   writing: [
    {
        type: "fill-blank",
        question: "Ман дирӯз ба кор рафтам. → ______",
        answer: ["I went to work yesterday."]
    },
    {
        type: "fill-blank",
        question: "Вай дирӯз хӯрок хӯрд. → ______",
        answer: ["He ate food yesterday."]
    },
    {
        type: "fill-blank",
        question: "Онҳо дирӯз мошин ронданд. → ______",
        answer: ["They drove a car yesterday."]
    },
    {
        type: "fill-blank",
        question: "Ман дирӯз ба кор нарафтам. → ______",
        answer: ["I did not go to work yesterday.", "I didn't go to work yesterday."]
    },
    {
        type: "fill-blank",
        question: "Вай дирӯз чизе нахӯрд. → ______",
        answer: ["He did not eat food yesterday.", "He didn't eat food yesterday."]
    },
    {
        type: "fill-blank",
        question: "Онҳо дирӯз мошин наронданд. → ______",
        answer: ["They did not drive a car yesterday.", "They didn't drive a car yesterday."]
    },
    {
        type: "fill-blank",
        question: "Оё ту дирӯз ба кор рафтӣ? → ______",
        answer: ["Did you go to work yesterday?"]
    },
    {
        type: "fill-blank",
        question: "Оё вай дирӯз хӯрок хӯрд? → ______",
        answer: ["Did he eat food yesterday?"]
    },
    {
        type: "fill-blank",
        question: "Оё онҳо дирӯз мошин ронданд? → ______",
        answer: ["Did they drive a car yesterday?"]
    },
    {
        type: "fill-blank",
        question: "Афсар дирӯз ҳуҷҷат гирифт. → ______",
        answer: ["The officer took the document yesterday."]
    }
]
};


const a1Unit11Override = {
   unit: 11,
grammar: [
    {
        type: "multiple-choice",
        question: "How many ___ are there in the office?",
        options: ["officer", "officers", "water"],
        answer: "officers"
    },
    {
        type: "multiple-choice",
        question: "How much ___ do you drink?",
        options: ["water", "apples", "cars"],
        answer: "water"
    },
    {
        type: "multiple-choice",
        question: "How many ___ do you have?",
        options: ["car", "cars", "water"],
        answer: "cars"
    },
    {
        type: "multiple-choice",
        question: "How much ___ is there?",
        options: ["milk", "books", "officers"],
        answer: "milk"
    },
    {
        type: "multiple-choice",
        question: "I ___ speak English.",
        options: ["can", "can't", "has"],
        answer: "can"
    },
    {
        type: "multiple-choice",
        question: "She ___ drive a car.",
        options: ["can", "can't", "have"],
        answer: "can"
    },
    {
        type: "multiple-choice",
        question: "He ___ enter this room.",
        options: ["can", "can't", "has"],
        answer: "can't"
    },
    {
        type: "multiple-choice",
        question: "They ___ use phones here.",
        options: ["can", "can't", "have"],
        answer: "can't"
    },
    {
        type: "multiple-choice",
        question: "How many ___ are in the building?",
        options: ["room", "rooms", "water"],
        answer: "rooms"
    },
    {
        type: "multiple-choice",
        question: "How much ___ do you need?",
        options: ["money", "cars", "officers"],
        answer: "money"
    }
],

    vocabulary: [
        {
            type: "multiple-choice",
            question: "Choose the correct translation: либос",
            options: ["dress", "shirt", "coat"],
            answer: "dress"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: курта",
            options: ["shirt", "coat", "dress"],
            answer: "shirt"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: курта (гарм)",
            options: ["coat", "shirt", "dress"],
            answer: "coat"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: пойафзол",
            options: ["shoes", "coat", "hat"],
            answer: "shoes"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: кулоҳ",
            options: ["hat", "shirt", "coat"],
            answer: "hat"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: айнак",
            options: ["glasses", "hat", "shoes"],
            answer: "glasses"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: шим",
            options: ["jeans", "coat", "shirt"],
            answer: "jeans"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: сурх",
            options: ["red", "blue", "black"],
            answer: "red"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: кабуд",
            options: ["blue", "red", "white"],
            answer: "blue"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: сиёҳ",
            options: ["black", "white", "blue"],
            answer: "black"
        }
    ],
    writing: [
    {
        type: "fill-blank",
        question: "Чандто афсар дар шуъба ҳаст? → ______",
        answer: ["How many officers are there in the department?"]
    },
    {
        type: "fill-blank",
        question: "Чанд қадар об ҳаст? → ______",
        answer: ["How much water is there?"]
    },
    {
        type: "fill-blank",
        question: "Чандто мошин дар кӯча ҳаст? → ______",
        answer: ["How many cars are there on the street?"]
    },
    {
        type: "fill-blank",
        question: "Чанд қадар вақт лозим аст? → ______",
        answer: ["How much time is needed?"]
    },
    {
        type: "fill-blank",
        question: "Ман метавонам мошин ронам. → ______",
        answer: ["I can drive a car."]
    },
    {
        type: "fill-blank",
        question: "Вай метавонад забони англисиро гап занад. → ______",
        answer: ["He can speak English."]
    },
    {
        type: "fill-blank",
        question: "Ман наметавонам дароям. → ______",
        answer: ["I cannot enter.", "I can't enter."]
    },
    {
        type: "fill-blank",
        question: "Онҳо наметавонанд инро истифода баранд. → ______",
        answer: ["They cannot use this.", "They can't use this."]
    },
    {
        type: "fill-blank",
        question: "Чандто ҳуҷра дар бино ҳаст? → ______",
        answer: ["How many rooms are there in the building?"]
    },
    {
        type: "fill-blank",
        question: "Чанд қадар пул дорӣ? → ______",
        answer: ["How much money do you have?"]
    }
]
};


const a1Unit12Override = {
   unit: 12,
grammar: [
    {
        type: "multiple-choice",
        question: "I have ___ water.",
        options: ["some", "any", "a"],
        answer: "some"
    },
    {
        type: "multiple-choice",
        question: "She has ___ friends in the department.",
        options: ["some", "any", "a"],
        answer: "some"
    },
    {
        type: "multiple-choice",
        question: "There are ___ officers in the building.",
        options: ["some", "any", "a"],
        answer: "some"
    },
    {
        type: "multiple-choice",
        question: "I do not have ___ money.",
        options: ["some", "any", "a"],
        answer: "any"
    },
    {
        type: "multiple-choice",
        question: "He does not have ___ documents.",
        options: ["some", "any", "a"],
        answer: "any"
    },
    {
        type: "multiple-choice",
        question: "There is not ___ milk.",
        options: ["some", "any", "a"],
        answer: "any"
    },
    {
        type: "multiple-choice",
        question: "Do you have ___ questions?",
        options: ["some", "any", "a"],
        answer: "any"
    },
    {
        type: "multiple-choice",
        question: "Are there ___ officers here?",
        options: ["some", "any", "a"],
        answer: "any"
    },
    {
        type: "multiple-choice",
        question: "Is there ___ water?",
        options: ["some", "any", "a"],
        answer: "any"
    },
    {
        type: "multiple-choice",
        question: "We need ___ information.",
        options: ["some", "any", "a"],
        answer: "some"
    }
],

    vocabulary: [
        {
            type: "multiple-choice",
            question: "Choose the correct translation: сафар",
            options: ["travel", "visit", "stay"],
            answer: "travel"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: боздид кардан",
            options: ["visit", "travel", "stay"],
            answer: "visit"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: меҳмонхона",
            options: ["hotel", "airport", "city"],
            answer: "hotel"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: фурудгоҳ",
            options: ["airport", "hotel", "station"],
            answer: "airport"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: кишвар",
            options: ["country", "city", "hotel"],
            answer: "country"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: шаҳр",
            options: ["city", "country", "airport"],
            answer: "city"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: ҳавопаймо",
            options: ["plane", "train", "car"],
            answer: "plane"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: рафтан",
            options: ["go", "come", "stay"],
            answer: "go"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: мондан",
            options: ["stay", "go", "visit"],
            answer: "stay"
        },
        {
            type: "multiple-choice",
            question: "Choose the correct translation: акс гирифтан",
            options: ["take photos", "see", "visit"],
            answer: "take photos"
        }
    ],
    writing: [
    {
        type: "fill-blank",
        question: "Оё ту чой мехоҳӣ? → ______",
        answer: ["Would you like tea?"]
    },
    {
        type: "fill-blank",
        question: "Оё ту каме об мехоҳӣ? → ______",
        answer: ["Would you like some water?"]
    },
    {
        type: "fill-blank",
        question: "Ман қаҳва мехоҳам. → ______",
        answer: ["I would like coffee.", "I'd like coffee."]
    },
    {
        type: "fill-blank",
        question: "Ман каме чой мехоҳам. → ______",
        answer: ["I would like some tea.", "I'd like some tea."]
    },
    {
        type: "fill-blank",
        question: "Ман об намехоҳам. → ______",
        answer: ["I would not like water.", "I wouldn't like water."]
    },
    {
        type: "fill-blank",
        question: "Ман қаҳва намехоҳам. → ______",
        answer: ["I would not like coffee.", "I wouldn't like coffee."]
    },
    {
        type: "fill-blank",
        question: "Оё ту қаҳва мехоҳӣ? → ______",
        answer: ["Would you like coffee?"]
    },
    {
        type: "fill-blank",
        question: "Оё ту каме хӯрок мехоҳӣ? → ______",
        answer: ["Would you like some food?"]
    },
    {
        type: "fill-blank",
        question: "Вай об мехоҳад. → ______",
        answer: ["He would like water.", "He'd like water."]
    },
    {
        type: "fill-blank",
        question: "Онҳо чой намехоҳанд. → ______",
        answer: ["They would not like tea.", "They wouldn't like tea."]
    }
]
};

const unitFlowState = {
    level: null,
    unit: null,
    type: null
};

const a1UnitFocusMap = {
    1: {
        grammar: "Articles (a / an)",
        vocabulary: "Personal profile words",
        writing: "Plural nouns"
    },
    2: {
        grammar: "Verb to be (affirmative / negative / questions)",
        vocabulary: "Family and relationships",
        writing: "Basic family sentences"
    },
    3: {
        grammar: "Possessive adjectives",
        vocabulary: "Jobs and workplace",
        writing: "Possession sentences"
    },
    4: {
        grammar: "Possessives ('s / s')",
        vocabulary: "Daily routine words",
        writing: "Possessive writing"
    },
    5: {
        grammar: "Present Simple",
        vocabulary: "Home and rooms",
        writing: "Routine sentences"
    },
    6: {
        grammar: "Do / Does questions",
        vocabulary: "Actions and skills",
        writing: "Questions and negatives"
    },
    7: {
        grammar: "WH-questions",
        vocabulary: "Question words",
        writing: "Question formation"
    },
    8: {
        grammar: "There is / There are",
        vocabulary: "Frequency adverbs",
        writing: "Existence sentences"
    },
    9: {
        grammar: "Was / Were",
        vocabulary: "Food and drinks",
        writing: "Past be statements"
    },
    10: {
        grammar: "Past Simple",
        vocabulary: "Adjectives",
        writing: "Past actions"
    },
    11: {
        grammar: "How much / How many / Can",
        vocabulary: "Clothes and colors",
        writing: "Quantity and ability"
    },
    12: {
        grammar: "Some / Any",
        vocabulary: "Travel vocabulary",
        writing: "Would like requests"
    }
};

function getMostCommonTopicFromQuestions(questions) {
    if (!Array.isArray(questions) || questions.length === 0) return null;

    const topicCounts = new Map();
    questions.forEach(question => {
        const topic = question && typeof question.topic === 'string' ? question.topic.trim() : '';
        if (!topic) return;
        topicCounts.set(topic, (topicCounts.get(topic) || 0) + 1);
    });

    if (topicCounts.size === 0) return null;

    let bestTopic = null;
    let bestCount = -1;
    topicCounts.forEach((count, topic) => {
        if (count > bestCount) {
            bestTopic = topic;
            bestCount = count;
        }
    });

    return bestTopic;
}

function inferWritingFocus(questions) {
    if (!Array.isArray(questions) || questions.length === 0) {
        return 'Sentence writing';
    }

    const firstQuestion = questions.find(
        question => question && typeof question.question === 'string' && question.question.trim()
    );

    if (!firstQuestion) return 'Sentence writing';

    const text = firstQuestion.question;
    const lower = text.toLowerCase();

    if (text.includes('→')) return 'Translation writing';
    if (text.includes('___') && /(right now|today|now)/i.test(text)) return 'Verb to be patterns';
    if (text.includes('___') && /(every day|every morning|in the evening|on weekends)/i.test(text)) {
        return 'Present Simple patterns';
    }
    if (lower.includes('would you like') || lower.includes("i'd like") || lower.includes('i would like')) {
        return 'Requests with would like';
    }

    return 'Sentence completion';
}

function getUnitFocusSummary(level, unitNumber, unitItem) {
    const normalizedLevel = String(level || '').toUpperCase();

    if (normalizedLevel === 'A1' && a1UnitFocusMap[unitNumber]) {
        return a1UnitFocusMap[unitNumber];
    }

    const grammarFocus =
        getMostCommonTopicFromQuestions(unitItem && unitItem.grammar) || 'Mixed grammar topics';
    const vocabularyFocus =
        getMostCommonTopicFromQuestions(unitItem && unitItem.vocabulary) || 'Mixed vocabulary topics';
    const writingFocus = inferWritingFocus(unitItem && unitItem.writing);

    return {
        grammar: grammarFocus,
        vocabulary: vocabularyFocus,
        writing: writingFocus
    };
}

function buildUnitQuestions() {
    if (Object.keys(unitQuestions).length > 0) {
        return unitQuestions;
    }

    const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const unitsPerLevel = 12;

    const grammarAll = grammarTopics.flatMap(topic =>
        topic.questions.map(question => ({
            ...question,
            topic: topic.title
        }))
    );

    const vocabularyAll = vocabularyTopics.flatMap(topic =>
        topic.questions.map(question => ({
            ...question,
            topic: topic.title
        }))
    );

    levels.forEach(level => {
        let grammarPool = [];
        let vocabularyPool = [];

        if (typeof levelTopicMap !== 'undefined' && levelTopicMap[level]) {
            const [start, end] = levelTopicMap[level];

            for (let i = start; i <= end; i++) {
                const grammarTopic = grammarTopics[i];
                const vocabularyTopic = vocabularyTopics[i];

                if (grammarTopic && Array.isArray(grammarTopic.questions)) {
                    grammarPool.push(
                        ...grammarTopic.questions.map(question => ({
                            ...question,
                            topic: grammarTopic.title
                        }))
                    );
                }

                if (vocabularyTopic && Array.isArray(vocabularyTopic.questions)) {
                    vocabularyPool.push(
                        ...vocabularyTopic.questions.map(question => ({
                            ...question,
                            topic: vocabularyTopic.title
                        }))
                    );
                }
            }
        }

        if (grammarPool.length === 0) grammarPool = grammarAll;
        if (vocabularyPool.length === 0) vocabularyPool = vocabularyAll;

        unitQuestions[level] = [];

        for (let unit = 1; unit <= unitsPerLevel; unit++) {
            const grammar = [];
            const vocabulary = [];
            const writing = [];

            const subjects = ['I', 'You', 'He', 'She', 'We', 'They', 'Tom', 'My brother', 'The students', 'The children'];
            const beForms = {
                'I': 'am',
                'You': 'are',
                'He': 'is',
                'She': 'is',
                'We': 'are',
                'They': 'are',
                'Tom': 'is',
                'My brother': 'is',
                'The students': 'are',
                'The children': 'are'
            };
            const beComplements = [
                'at home right now.',
                'in the office today.',
                'in the park right now.',
                'at school now.',
                'on time for class.',
                'ready for duty.',
                'from Tajikistan.',
                'very busy today.',
                'happy today.',
                'in this city now.'
            ];
            const verbTemplates = [
                { base: 'go', third: 'goes', rest: 'to school by bus every day.' },
                { base: 'study', third: 'studies', rest: 'English every day.' },
                { base: 'watch', third: 'watches', rest: 'TV in the evening.' },
                { base: 'read', third: 'reads', rest: 'books at night.' },
                { base: 'work', third: 'works', rest: 'in an office every day.' },
                { base: 'live', third: 'lives', rest: 'in this city.' },
                { base: 'drink', third: 'drinks', rest: 'water every morning.' },
                { base: 'write', third: 'writes', rest: 'emails to friends.' },
                { base: 'speak', third: 'speaks', rest: 'English very well.' },
                { base: 'play', third: 'plays', rest: 'football on weekends.' }
            ];

            for (let i = 0; i < 10; i++) {
                const grammarIndex = (((unit - 1) * 10) + i) % grammarPool.length;
                const vocabularyIndex = (((unit - 1) * 10) + i) % vocabularyPool.length;

                grammar.push({ ...grammarPool[grammarIndex] });
                vocabulary.push({ ...vocabularyPool[vocabularyIndex] });

                const subject = subjects[(unit + i) % subjects.length];
                const beComplement = beComplements[((unit * 3) + i) % beComplements.length];
                const verbTemplate = verbTemplates[((unit * 2) + i) % verbTemplates.length];
                const isThirdSingular = ['He', 'She', 'Tom', 'My brother'].includes(subject);

                if (i % 2 === 0) {
                    writing.push({
                        type: 'fill-blank',
                        question: `${subject} ___ ${beComplement}`,
                        answer: beForms[subject]
                    });
                } else {
                    writing.push({
                        type: 'fill-blank',
                        question: `${subject} ___ ${verbTemplate.rest}`,
                        answer: isThirdSingular ? verbTemplate.third : verbTemplate.base
                    });
                }
            }

            unitQuestions[level].push({
                unit,
                grammar,
                vocabulary,
                writing
            });
        }
    });

    if (Array.isArray(unitQuestions.A1) && unitQuestions.A1.length > 0) {
        unitQuestions.A1[0] = {
            unit: a1Unit1Override.unit,
            grammar: a1Unit1Override.grammar.map(question => ({ ...question })),
            vocabulary: a1Unit1Override.vocabulary.map(question => ({ ...question })),
            writing: a1Unit1Override.writing.map(question => ({ ...question }))
        };
    }

    if (Array.isArray(unitQuestions.A1) && unitQuestions.A1.length > 1) {
        unitQuestions.A1[1] = {
            unit: a1Unit2Override.unit,
            grammar: a1Unit2Override.grammar.map(question => ({ ...question })),
            vocabulary: a1Unit2Override.vocabulary.map(question => ({ ...question })),
            writing: a1Unit2Override.writing.map(question => ({ ...question }))
        };
    }

    if (Array.isArray(unitQuestions.A1) && unitQuestions.A1.length > 2) {
        unitQuestions.A1[2] = {
            unit: a1Unit3Override.unit,
            grammar: a1Unit3Override.grammar.map(question => ({ ...question })),
            vocabulary: a1Unit3Override.vocabulary.map(question => ({ ...question })),
            writing: a1Unit3Override.writing.map(question => ({ ...question }))
        };
    }

    if (Array.isArray(unitQuestions.A1) && unitQuestions.A1.length > 3) {
        unitQuestions.A1[3] = {
            unit: a1Unit4Override.unit,
            grammar: a1Unit4Override.grammar.map(question => ({ ...question })),
            vocabulary: a1Unit4Override.vocabulary.map(question => ({ ...question })),
            writing: a1Unit4Override.writing.map(question => ({ ...question }))
        };
    }

    if (Array.isArray(unitQuestions.A1) && unitQuestions.A1.length > 4) {
        unitQuestions.A1[4] = {
            unit: a1Unit5Override.unit,
            grammar: a1Unit5Override.grammar.map(question => ({ ...question })),
            vocabulary: a1Unit5Override.vocabulary.map(question => ({ ...question })),
            writing: a1Unit5Override.writing.map(question => ({ ...question }))
        };
    }

    if (Array.isArray(unitQuestions.A1) && unitQuestions.A1.length > 5) {
        unitQuestions.A1[5] = {
            unit: a1Unit6Override.unit,
            grammar: a1Unit6Override.grammar.map(question => ({ ...question })),
            vocabulary: a1Unit6Override.vocabulary.map(question => ({ ...question })),
            writing: a1Unit6Override.writing.map(question => ({ ...question }))
        };
    }

    if (Array.isArray(unitQuestions.A1) && unitQuestions.A1.length > 6) {
        unitQuestions.A1[6] = {
            unit: a1Unit7Override.unit,
            grammar: a1Unit7Override.grammar.map(question => ({ ...question })),
            vocabulary: a1Unit7Override.vocabulary.map(question => ({ ...question })),
            writing: a1Unit7Override.writing.map(question => ({ ...question }))
        };
    }

    if (Array.isArray(unitQuestions.A1) && unitQuestions.A1.length > 7) {
        unitQuestions.A1[7] = {
            unit: a1Unit8Override.unit,
            grammar: a1Unit8Override.grammar.map(question => ({ ...question })),
            vocabulary: a1Unit8Override.vocabulary.map(question => ({ ...question })),
            writing: a1Unit8Override.writing.map(question => ({ ...question }))
        };
    }

    if (Array.isArray(unitQuestions.A1) && unitQuestions.A1.length > 8) {
        unitQuestions.A1[8] = {
            unit: a1Unit9Override.unit,
            grammar: a1Unit9Override.grammar.map(question => ({ ...question })),
            vocabulary: a1Unit9Override.vocabulary.map(question => ({ ...question })),
            writing: a1Unit9Override.writing.map(question => ({ ...question }))
        };
    }

    if (Array.isArray(unitQuestions.A1) && unitQuestions.A1.length > 9) {
        unitQuestions.A1[9] = {
            unit: a1Unit10Override.unit,
            grammar: a1Unit10Override.grammar.map(question => ({ ...question })),
            vocabulary: a1Unit10Override.vocabulary.map(question => ({ ...question })),
            writing: a1Unit10Override.writing.map(question => ({ ...question }))
        };
    }

    if (Array.isArray(unitQuestions.A1) && unitQuestions.A1.length > 10) {
        unitQuestions.A1[10] = {
            unit: a1Unit11Override.unit,
            grammar: a1Unit11Override.grammar.map(question => ({ ...question })),
            vocabulary: a1Unit11Override.vocabulary.map(question => ({ ...question })),
            writing: a1Unit11Override.writing.map(question => ({ ...question }))
        };
    }

    if (Array.isArray(unitQuestions.A1) && unitQuestions.A1.length > 11) {
        unitQuestions.A1[11] = {
            unit: a1Unit12Override.unit,
            grammar: a1Unit12Override.grammar.map(question => ({ ...question })),
            vocabulary: a1Unit12Override.vocabulary.map(question => ({ ...question })),
            writing: a1Unit12Override.writing.map(question => ({ ...question }))
        };
    }

    return unitQuestions;
}

function showLevelDetail(level) {
    buildUnitQuestions();

    const units = unitQuestions[level] || [];
    const unitsContainer = document.getElementById('units-container');
    const levelName = document.getElementById('level-name');

    if (!unitsContainer) return;

    unitFlowState.level = level;
    unitFlowState.unit = null;
    unitFlowState.type = null;

    if (levelName) {
        levelName.textContent = level;
    }

    const lastLevelTestResult = getLevelTestLastResult(level);
    const lastResultText = lastLevelTestResult
        ? `Last result: ${lastLevelTestResult.score}%`
        : 'Last result: Not taken yet';

    unitsContainer.innerHTML = '';

    const levelTestCard = document.createElement('div');
    levelTestCard.className = 'menu-card';
    levelTestCard.setAttribute('data-role', 'level-mixed-test');
    enableKeyboardActivation(levelTestCard);
    levelTestCard.innerHTML = `
        <div class="menu-icon"><i class="fas fa-layer-group"></i></div>
        <h3>${level} Level Test</h3>
        <p>60 random questions from Grammar, Vocabulary, and Writing</p>
        <p>${lastResultText}</p>
        <div class="test-info">
            <span><i class="fas fa-question-circle"></i> 60 questions</span>
            <span><i class="fas fa-random"></i> New every time</span>
        </div>
    `;
    levelTestCard.addEventListener('click', () => {
        startLevelMixedTest(level);
    });
    unitsContainer.appendChild(levelTestCard);

    units.forEach(item => {
        const unitCard = document.createElement('div');
        unitCard.className = 'topic-card';
        enableKeyboardActivation(unitCard);
        const focus = getUnitFocusSummary(level, item.unit, item);
        unitCard.innerHTML = `
            <div class="topic-number">${item.unit}</div>
            <h3>Unit ${item.unit}</h3>
            <p>${level} unit test set</p>
            <p class="unit-focus-line"><strong>Grammar:</strong> ${focus.grammar}</p>
            <p class="unit-focus-line"><strong>Vocabulary:</strong> ${focus.vocabulary}</p>
            <p class="unit-focus-line"><strong>Writing:</strong> ${focus.writing}</p>
            <div class="topic-info">
                <span><i class="fas fa-question-circle"></i> 30 tasks</span>
                <span><i class="fas fa-layer-group"></i> Grammar/Vocabulary/Writing</span>
            </div>
        `;

        unitCard.addEventListener('click', () => {
            showUnitMenu(level, item.unit);
        });

        unitsContainer.appendChild(unitCard);
    });

    if (typeof pages === 'object' && !pages.levelDetailPage) {
        const pageElement = document.getElementById('level-detail-page');
        if (pageElement) pages.levelDetailPage = pageElement;
    }

    if (typeof showPage === 'function' && pages.levelDetailPage) {
        showPage('levelDetailPage');
    } else {
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        const target = document.getElementById('level-detail-page');
        if (target) target.classList.add('active');
        state.currentPage = 'levelDetailPage';
    }
}

function cloneQuestionForLevelMixedTest(question) {
    return cloneQuestionForTestSession(question);
}

function pickRandomQuestionsForLevelMixedTest(pool, count) {
    if (!Array.isArray(pool) || pool.length === 0 || count <= 0) return [];

    const shuffled = shuffleArray(pool.map(cloneQuestionForLevelMixedTest));
    if (shuffled.length >= count) {
        return shuffled.slice(0, count);
    }

    const result = shuffled.slice();
    while (result.length < count) {
        const randomQuestion = pool[Math.floor(Math.random() * pool.length)];
        result.push(cloneQuestionForLevelMixedTest(randomQuestion));
    }

    return result;
}

function buildLevelMixedQuestionSet(level, totalQuestions = 60) {
    buildUnitQuestions();

    const units = unitQuestions[level] || [];
    if (!Array.isArray(units) || units.length === 0) return [];

    const grammarPool = [];
    const vocabularyPool = [];
    const writingPool = [];

    units.forEach(unitItem => {
        if (unitItem && Array.isArray(unitItem.grammar)) {
            grammarPool.push(...unitItem.grammar);
        }
        if (unitItem && Array.isArray(unitItem.vocabulary)) {
            vocabularyPool.push(...unitItem.vocabulary);
        }
        if (unitItem && Array.isArray(unitItem.writing)) {
            writingPool.push(...unitItem.writing);
        }
    });

    const grammarCount = Math.floor(totalQuestions / 3);
    const vocabularyCount = Math.floor(totalQuestions / 3);
    const writingCount = totalQuestions - grammarCount - vocabularyCount;

    let mixed = []
        .concat(pickRandomQuestionsForLevelMixedTest(grammarPool, grammarCount))
        .concat(pickRandomQuestionsForLevelMixedTest(vocabularyPool, vocabularyCount))
        .concat(pickRandomQuestionsForLevelMixedTest(writingPool, writingCount));

    if (mixed.length < totalQuestions) {
        const combinedPool = grammarPool.concat(vocabularyPool, writingPool);
        mixed = mixed.concat(
            pickRandomQuestionsForLevelMixedTest(combinedPool, totalQuestions - mixed.length)
        );
    }

    return shuffleArray(mixed).slice(0, totalQuestions);
}

function getLevelTestScoreStorageKey(level) {
    return level + "_level_test_last_score";
}

function getLevelTestDateStorageKey(level) {
    return level + "_level_test_last_date";
}

function getLevelTestLastResult(level) {
    try {
        if (!level) return null;
        const rawScore = localStorage.getItem(getLevelTestScoreStorageKey(level));
        if (rawScore === null) return null;

        const score = Number(rawScore);
        if (!Number.isFinite(score)) return null;

        const date = localStorage.getItem(getLevelTestDateStorageKey(level));
        return { score, date };
    } catch (error) {
        console.error('[level-mixed-result] getLevelTestLastResult failed', error);
        return null;
    }
}

function saveLevelMixedResultSafely() {
    try {
        if (!state || state.testMode !== 'level-mixed') return;

        const level = String(state.currentLevel || (unitFlowState && unitFlowState.level) || '').trim();
        if (!level) return;

        const total = Array.isArray(state.currentTest) ? state.currentTest.length : 0;
        const correct = Array.isArray(state.userAnswers)
            ? state.userAnswers.filter(answer => answer && answer.isCorrect).length
            : 0;
        const score = total > 0 ? Math.round((correct / total) * 100) : 0;

        localStorage.setItem(getLevelTestScoreStorageKey(level), String(score));
        localStorage.setItem(getLevelTestDateStorageKey(level), new Date().toISOString());
    } catch (error) {
        console.error('[level-mixed-result] saveLevelMixedResultSafely failed', error);
    }
}

function startLevelMixedTest(level) {
    const mixedQuestions = buildLevelMixedQuestionSet(level, 60);
    if (!Array.isArray(mixedQuestions) || mixedQuestions.length === 0) return;

    unitFlowState.level = level;
    unitFlowState.unit = null;
    unitFlowState.type = null;

    state.testMode = 'level-mixed';
    state.testType = 'mixed';
    state.currentLevel = level;
    state.currentUnit = null;
    state.currentTopic = {
        id: 'level-mixed',
        title: `${level} Level Test`
    };
    state.currentQuestionIndex = 0;
    state.userAnswers = [];
    state.score = 0;
    state.currentTest = mixedQuestions;

    const topicEl = document.getElementById('test-topic');
    if (topicEl) {
        topicEl.textContent = `${level} Level Test`;
    }

    const totalEl = document.getElementById('total-questions');
    if (totalEl) {
        totalEl.textContent = state.currentTest.length;
    }

    if (typeof showPage === 'function') {
        showPage('testSection');
    }

    renderQuestion();
}

function showUnitMenu(level, unit) {
    unitFlowState.level = level;
    unitFlowState.unit = unit;

    const unitName = document.getElementById('unit-name');
    if (unitName) {
        unitName.textContent = `${level} - Unit ${unit}`;
    }

    const grammarBtn = document.getElementById('unit-grammar');
    const vocabularyBtn = document.getElementById('unit-vocabulary');
    const writingBtn = document.getElementById('unit-writing');

    if (grammarBtn) grammarBtn.onclick = () => startUnitTest('grammar');
    if (vocabularyBtn) vocabularyBtn.onclick = () => startUnitTest('vocabulary');
    if (writingBtn) writingBtn.onclick = () => startUnitTest('writing');

    if (typeof pages === 'object' && !pages.unitMenuPage) {
        const pageElement = document.getElementById('unit-menu-page');
        if (pageElement) pages.unitMenuPage = pageElement;
    }

    if (typeof showPage === 'function' && pages.unitMenuPage) {
        showPage('unitMenuPage');
    } else {
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        const target = document.getElementById('unit-menu-page');
        if (target) target.classList.add('active');
        state.currentPage = 'unitMenuPage';
    }
}

function startUnitTest(type) {
    buildUnitQuestions();

    if (!unitFlowState.level || !unitFlowState.unit) return;

    const units = unitQuestions[unitFlowState.level] || [];
    const selectedUnit = units.find(item => item.unit === unitFlowState.unit);
    if (!selectedUnit || !selectedUnit[type]) return;

    unitFlowState.type = type;

    state.testMode = 'unit';
    state.testType = type;
    state.currentLevel = unitFlowState.level;
    state.currentUnit = unitFlowState.unit;
    state.currentTopic = {
        id: unitFlowState.unit,
        title: `${unitFlowState.level} Unit ${unitFlowState.unit}`
    };

    state.currentQuestionIndex = 0;
    state.userAnswers = [];
    state.score = 0;
    state.currentTest = selectedUnit[type].map(cloneQuestionForTestSession);

    const typeName = type.charAt(0).toUpperCase() + type.slice(1);
    document.getElementById('test-topic').textContent = `${unitFlowState.level} Unit ${unitFlowState.unit} - ${typeName} Test`;
    document.getElementById('total-questions').textContent = state.currentTest.length;

    if (typeof showPage === 'function') {
        showPage('testSection');
    }

    renderQuestion();
}

const __originalRenderQuestion = renderQuestion;
renderQuestion = function renderQuestion() {
    __originalRenderQuestion();
};

const __originalNextQuestion = nextQuestion;
nextQuestion = function nextQuestion() {
    __originalNextQuestion();
};

const __originalPreviousQuestion = previousQuestion;
previousQuestion = function previousQuestion() {
    __originalPreviousQuestion();
};

const __originalFinishTest = finishTest;
finishTest = function finishTest() {
    if (state.testMode !== 'unit') {
        __originalFinishTest();
        return;
    }

    const totalQuestions = state.currentTest.length;
    const correctAnswers = state.userAnswers.filter(answer => answer && answer.isCorrect).length;
    const wrongAnswers = totalQuestions - correctAnswers;
    const scorePercentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

    document.getElementById('correct-answers').textContent = correctAnswers;
    document.getElementById('wrong-answers').textContent = wrongAnswers;
    document.getElementById('total-answers').textContent = totalQuestions;
    document.getElementById('final-score').textContent = `${scorePercentage}%`;

    const grade = scorePercentage >= 90 ? 'Excellent' : scorePercentage >= 70 ? 'Good' : 'Try Again';
    const gradeEl = document.getElementById('score-grade');
    if (gradeEl) gradeEl.textContent = grade;

    const completedEl = document.getElementById('test-completed-message');
    if (completedEl) {
        const typeLabel = unitFlowState.type ? unitFlowState.type : state.testType;
        completedEl.textContent = `You've completed ${unitFlowState.level} Unit ${unitFlowState.unit} ${typeLabel} test.`;
    }

    const circle = document.querySelector('.score-circle-fill');
    if (circle) {
        const radius = 54;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (scorePercentage / 100) * circumference;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = offset;
    }

    const breakdownContent = document.getElementById('breakdown-content');
    if (breakdownContent) {
        breakdownContent.innerHTML = '';
        state.currentTest.forEach((question, index) => {
            const userAnswer = state.userAnswers[index];
            const isCorrect = userAnswer && userAnswer.isCorrect;
            const item = document.createElement('div');
            item.className = 'breakdown-item';
            item.innerHTML = `
                <div class="breakdown-question">Q${index + 1}: ${question.question.substring(0, 50)}...</div>
                <div class="breakdown-result ${isCorrect ? 'correct' : 'incorrect'}">${isCorrect ? 'Correct' : 'Incorrect'}</div>
            `;
            breakdownContent.appendChild(item);
        });
    }

    if (typeof showPage === 'function') {
        showPage('resultsSection');
    } else {
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        const target = document.getElementById('results-section');
        if (target) target.classList.add('active');
        state.currentPage = 'resultsSection';
    }
};

(function () {
    buildUnitQuestions();

    document.addEventListener('click', event => {
        const retryBtn = event.target.closest('#retry-btn');
        if (retryBtn && state.testMode === 'level-mixed') {
            event.preventDefault();
            event.stopImmediatePropagation();
            startLevelMixedTest(state.currentLevel || unitFlowState.level);
            return;
        }

        if (retryBtn && state.testMode === 'unit') {
            event.preventDefault();
            event.stopImmediatePropagation();
            startUnitTest(unitFlowState.type || state.testType || 'grammar');
            return;
        }

        const newTestBtn = event.target.closest('#new-test-btn');
        if (newTestBtn && state.testMode === 'level-mixed') {
            event.preventDefault();
            event.stopImmediatePropagation();
            showLevelDetail(state.currentLevel || unitFlowState.level);
            return;
        }

        if (newTestBtn && state.testMode === 'unit') {
            event.preventDefault();
            event.stopImmediatePropagation();
            showUnitMenu(unitFlowState.level, unitFlowState.unit);
            return;
        }

        const backBtn = event.target.closest('.back-btn');
        if (backBtn) {
            const activePage = document.querySelector('.page.active');

            if (activePage && activePage.id === 'level-detail-page') {
                event.preventDefault();
                event.stopImmediatePropagation();
                showPage('home');
                return;
            }

            if (activePage && activePage.id === 'unit-menu-page') {
                event.preventDefault();
                event.stopImmediatePropagation();
                showLevelDetail(unitFlowState.level);
                return;
            }

            if (activePage && activePage.id === 'test-section' && state.testMode === 'unit') {
                event.preventDefault();
                event.stopImmediatePropagation();
                showUnitMenu(unitFlowState.level, unitFlowState.unit);
                return;
            }

            if (activePage && activePage.id === 'test-section' && state.testMode === 'level-mixed') {
                event.preventDefault();
                event.stopImmediatePropagation();
                showLevelDetail(state.currentLevel || unitFlowState.level);
                return;
            }

            if (activePage && activePage.id === 'results-section' && state.testMode === 'unit') {
                event.preventDefault();
                event.stopImmediatePropagation();
                showUnitMenu(unitFlowState.level, unitFlowState.unit);
                return;
            }

            if (activePage && activePage.id === 'results-section' && state.testMode === 'level-mixed') {
                event.preventDefault();
                event.stopImmediatePropagation();
                showLevelDetail(state.currentLevel || unitFlowState.level);
                return;
            }
        }

        const levelCard = event.target.closest('.level-card');
        if (!levelCard) return;

        event.preventDefault();
        event.stopImmediatePropagation();

        const level = levelCard.getAttribute('data-level') || (typeof getLevelFromCard === 'function' ? getLevelFromCard(levelCard) : null);
        if (!level) return;

        showLevelDetail(level);
    }, true);
})();
/* LOCK ALL UNITS EXCEPT FIRST */

document.addEventListener("DOMContentLoaded", function () {

    const observer = new MutationObserver(function () {

        const units = document.querySelectorAll("#units-container .topic-card");

        units.forEach((unit, index) => {

            if (index !== 0) {

                unit.classList.add("locked");

                unit.style.pointerEvents = "none";

            }

        });

    });

    const container = document.getElementById("units-container");

    if (container) {
        observer.observe(container, { childList: true });
    }

});
/* ============================= */
/* COMPLETE UNIT LOCK SYSTEM */
/* COPY THIS TO END OF script.js */
/* ============================= */


/*/* ============================= */
/* COMPLETE UNIT ONLY IF ALL 3 TESTS DONE */
/* ============================= */


/* SAVE COMPLETED TEST TYPE */

(function () {

    const originalFinishTest = window.finishTest;

    window.finishTest = function () {

        if (originalFinishTest) {
            originalFinishTest();
        }

        try {

            const total = Array.isArray(state.currentTest) ? state.currentTest.length : 0;

            const correct =
                Array.isArray(state.userAnswers)
                    ? state.userAnswers.filter(a => a && a.isCorrect).length
                    : 0;

            const score =
                total > 0 ? Math.round((correct / total) * 100) : 0;

            const level = unitFlowState && unitFlowState.level ? unitFlowState.level : null;
            const unit = unitFlowState && Number.isFinite(Number(unitFlowState.unit))
                ? Number(unitFlowState.unit)
                : null;
            const type = unitFlowState && typeof unitFlowState.type === 'string'
                ? unitFlowState.type.toLowerCase()
                : null;
            const validType = type === 'grammar' || type === 'vocabulary' || type === 'writing';

            if (state && state.testMode === 'unit' && score >= 60 && level && unit && validType) {

                localStorage.setItem(
                    level + "_unit_" + unit + "_" + type,
                    "done"
                );

            }

        } catch (e) {}

    };

})();



/* CHECK IF UNIT COMPLETED */

function isUnitCompleted(level, unit) {

    const grammar =
        localStorage.getItem(level + "_unit_" + unit + "_grammar");

    const vocabulary =
        localStorage.getItem(level + "_unit_" + unit + "_vocabulary");

    const writing =
        localStorage.getItem(level + "_unit_" + unit + "_writing");

    return grammar && vocabulary && writing;

}



/* LOCK / UNLOCK */

function applyUnitLocks() {

    const cards =
        document.querySelectorAll("#units-container .topic-card");

    const level = unitFlowState.level;

    cards.forEach((card, index) => {

        const unit = index + 1;

        if (unit === 1) {

            unlock(card);
            return;

        }

        if (isUnitCompleted(level, unit - 1)) {

            unlock(card);

        } else {

            lock(card);

        }

    });

}


function lock(card) {

    card.classList.add("locked");
    card.style.pointerEvents = "none";

}


function unlock(card) {

    card.classList.remove("locked");
    card.style.pointerEvents = "auto";

}



/* WATCH LOAD */

const observer =
    new MutationObserver(applyUnitLocks);

document.addEventListener("DOMContentLoaded", function () {

    const container =
        document.getElementById("units-container");

    if (container) {

        observer.observe(container, {

            childList: true

        });

    }

});


setInterval(applyUnitLocks, 1000);

/* ============================= */
/* STRICT UNIT PROGRESSION SAFE ADD-ON */
/* ============================= */

(function () {
    if (window.__strictUnitProgressionInstalled) return;
    window.__strictUnitProgressionInstalled = true;

    const REQUIRED_SCORE = 90;
    const TEST_TYPES = ["grammar", "vocabulary", "writing"];

    function logStrictProgressError(scope, error) {
        try {
            console.error("[strict-unit-progression] " + scope, error);
        } catch (_) {}
    }

    function getScoreStorageKey(level, unit, testType) {
        return level + "_unit_" + unit + "_" + testType + "_score";
    }

    function getCurrentLevelSafely() {
        try {
            if (typeof unitFlowState !== "undefined" && unitFlowState && unitFlowState.level) {
                return String(unitFlowState.level).trim();
            }
            if (typeof state !== "undefined" && state && state.currentLevel) {
                return String(state.currentLevel).trim();
            }
            const levelName = document.getElementById("level-name");
            if (levelName && levelName.textContent) {
                return String(levelName.textContent).trim();
            }
        } catch (error) {
            logStrictProgressError("getCurrentLevelSafely", error);
        }
        return "";
    }

    function getUnitNumberFromCardSafely(card, fallbackIndex) {
        try {
            const numberElement = card ? card.querySelector(".topic-number") : null;
            const parsed = Number(numberElement && numberElement.textContent ? numberElement.textContent.trim() : "");
            if (Number.isFinite(parsed) && parsed > 0) {
                return parsed;
            }
        } catch (error) {
            logStrictProgressError("getUnitNumberFromCardSafely", error);
        }
        return fallbackIndex + 1;
    }

    function hasPreviousUnitPassedStrictly(level, previousUnit) {
        try {
            return TEST_TYPES.every(type => {
                const rawScore = localStorage.getItem(getScoreStorageKey(level, previousUnit, type));
                if (rawScore === null) return false;
                const score = Number(rawScore);
                return Number.isFinite(score) && score >= REQUIRED_SCORE;
            });
        } catch (error) {
            logStrictProgressError("hasPreviousUnitPassedStrictly", error);
            return false;
        }
    }

    window.applyUnitLocksSafely = function applyUnitLocksSafely() {
        try {
            const cards = document.querySelectorAll("#units-container .topic-card");
            if (!cards.length) return;

            const level = getCurrentLevelSafely();
            if (!level) return;

            cards.forEach((card, index) => {
                const unitNumber = getUnitNumberFromCardSafely(card, index);
                const shouldUnlock = unitNumber === 1 || hasPreviousUnitPassedStrictly(level, unitNumber - 1);

                if (shouldUnlock) {
                    card.classList.remove("locked");
                    card.style.pointerEvents = "auto";
                } else {
                    card.classList.add("locked");
                    card.style.pointerEvents = "none";
                }
            });
        } catch (error) {
            logStrictProgressError("applyUnitLocksSafely", error);
        }
    };

    function saveCurrentUnitScoreSafely() {
        try {
            if (typeof state === "undefined" || !state) return;
            if (state.testMode && state.testMode !== "unit") return;

            const level = getCurrentLevelSafely();
            const unit =
                (typeof unitFlowState !== "undefined" && unitFlowState && unitFlowState.unit != null)
                    ? Number(unitFlowState.unit)
                    : Number(state.currentUnit);

            const typeRaw =
                (typeof unitFlowState !== "undefined" && unitFlowState && unitFlowState.type)
                    ? unitFlowState.type
                    : state.testType;

            const testType = String(typeRaw || "").trim().toLowerCase();

            if (!level || !Number.isFinite(unit) || unit < 1 || !TEST_TYPES.includes(testType)) return;

            const total = Array.isArray(state.currentTest) ? state.currentTest.length : 0;
            const answers = Array.isArray(state.userAnswers) ? state.userAnswers : [];
            if (total <= 0) return;

            const correct = answers.filter(answer => answer && answer.isCorrect).length;
            const score = Math.round((correct / total) * 100);

            localStorage.setItem(getScoreStorageKey(level, unit, testType), String(score));
        } catch (error) {
            logStrictProgressError("saveCurrentUnitScoreSafely", error);
        }
    }

    const originalFinishTest = window.finishTest;
    if (typeof originalFinishTest === "function" && !window.__strictUnitProgressionFinishWrapped) {
        window.finishTest = function () {
            const result = originalFinishTest.apply(this, arguments);
            saveCurrentUnitScoreSafely();
            if (typeof saveLevelMixedResultSafely === "function") {
                saveLevelMixedResultSafely();
            }
            window.applyUnitLocksSafely();
            return result;
        };
        window.__strictUnitProgressionFinishWrapped = true;
    } else if (typeof originalFinishTest !== "function") {
        logStrictProgressError("finishTestHook", new Error("window.finishTest is not a function"));
    }

    let strictLockObserver = null;
    let observedContainer = null;

    function bindStrictLockObserverSafely() {
        try {
            const container = document.getElementById("units-container");
            if (!container) return;

            if (strictLockObserver && observedContainer === container) return;

            if (strictLockObserver) {
                strictLockObserver.disconnect();
            }

            strictLockObserver = new MutationObserver(function () {
                window.applyUnitLocksSafely();
            });
            strictLockObserver.observe(container, { childList: true, subtree: true });
            observedContainer = container;
        } catch (error) {
            logStrictProgressError("bindStrictLockObserverSafely", error);
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        bindStrictLockObserverSafely();
        window.applyUnitLocksSafely();
    });

    window.addEventListener("load", function () {
        bindStrictLockObserverSafely();
        window.applyUnitLocksSafely();
    });

    setInterval(function () {
        bindStrictLockObserverSafely();
        window.applyUnitLocksSafely();
    }, 1000);
})();

/* ============================= */
/* FORCE UNLOCK ALL UNITS (SAFE OVERRIDE) */
/* ============================= */
(function () {
    if (window.__forceUnlockAllUnitsInstalled) return;
    window.__forceUnlockAllUnitsInstalled = true;

    function unlockAllUnitsNow() {
        try {
            const cards = document.querySelectorAll("#units-container .topic-card");
            if (!cards.length) return;
            cards.forEach(function (card) {
                card.classList.remove("locked");
                card.style.pointerEvents = "auto";
            });
        } catch (_) {}
    }

    if (typeof window.lock === "function") {
        window.lock = function (card) {
            try {
                if (!card) return;
                card.classList.remove("locked");
                card.style.pointerEvents = "auto";
            } catch (_) {}
        };
    }

    if (typeof window.applyUnitLocks === "function") {
        const originalApplyUnitLocks = window.applyUnitLocks;
        window.applyUnitLocks = function () {
            const result = originalApplyUnitLocks.apply(this, arguments);
            unlockAllUnitsNow();
            return result;
        };
    }

    if (typeof window.applyUnitLocksSafely === "function") {
        const originalApplyUnitLocksSafely = window.applyUnitLocksSafely;
        window.applyUnitLocksSafely = function () {
            const result = originalApplyUnitLocksSafely.apply(this, arguments);
            unlockAllUnitsNow();
            return result;
        };
    }

    function bindUnlockObserver() {
        try {
            const container = document.getElementById("units-container");
            if (!container) return;
            const observer = new MutationObserver(function () {
                unlockAllUnitsNow();
            });
            observer.observe(container, { childList: true, subtree: true });
        } catch (_) {}
    }

    document.addEventListener("DOMContentLoaded", function () {
        bindUnlockObserver();
        unlockAllUnitsNow();
    });

    window.addEventListener("load", function () {
        bindUnlockObserver();
        unlockAllUnitsNow();
    });

    setInterval(unlockAllUnitsNow, 500);
})();
