var intents = [
  {
    "tag": "fallback",
    "patterns": [],
    "title": "FallBack response",
    "responses": ['Sorry I did not understand', 'Sorry, I still can not understand everything.','Please give me more info', 'Not sure I understand that']
  },
  {
    "tag": "greeting",
    "patterns": ["Hi", "How are you?", "Is anyone there?", "Hello", "Good day"],
    "title": "Salutations",
    "responses": ["Hello, thanks for visiting", "Good to see you again", "Hi there, how can I help?"],
    "context_set": ""
  },
  {
    "tag": "goodbye",
    "patterns": ["Bye", "See you later", "Goodbye"],
    "title": "Farewells",
    "responses": ["See you later, thanks for visiting", "Have a nice day", "Bye! Come back again soon."]
  },
  {
    "tag": "thanks",
    "patterns": ["Thanks", "Thank you", "That's helpful"],
    "title": "Thanks user",
    "responses": ["Happy to help!", "Any time!", "My pleasure"]
  },
  {
    "tag": "hours",
    "patterns": ["What hours are you open?", "What are your hours?", "When are you open?"],
    "title": "Hours open",
    "responses": ["We're open every day 9am-9pm", "Our hours are 9am-9pm every day"]
  },
  {
    "tag": "mopeds",
    "patterns": ["Which mopeds do you have?", "What kinds of mopeds are there?", "What do you rent?"],
    "title": "Mopeds do we have",
    "responses": ["We rent Yamaha, Piaggio and Vespa mopeds", "We have Piaggio, Vespa and Yamaha mopeds"]
  },
  {
    "tag": "payments",
    "patterns": ["Do you take credit cards?", "Do you accept Mastercard?", "Are you cash only?"],
    "title": "Payments methods",
    "responses": ["We accept VISA, Mastercard and AMEX", "We accept most major credit cards"]
  },
  {
    "tag": "opentoday",
    "patterns": ["Are you open today?", "When do you open today?", "What are your hours today?"],
    "title": "Days open",
    "responses": ["We're open every day from 9am-9pm", "Our hours are 9am-9pm every day"]
  },
  {
    "tag": "rental",
    "patterns": ["Can we rent a moped?", "I'd like to rent a moped", "How does this work?"],
    "title": "Rent a moped",
    "responses": ["Are you looking to rent today or later this week?"],
    "context_set": "rentalday"
  },
  {
    "tag": "today",
    "patterns": ["today"],
    "responses": ["For rentals today please call 1-800-MYMOPED", "Same-day rentals please call 1-800-MYMOPED"],
    "title": "Rentals Todays",
    "context_filter": "rentalday"
  },
  {
    "tag": "myname",
    "patterns": ["whats your name ?", "who are you"],
    "responses": ["my name is {botname}, and my version is {botversion}", "You cam call me {botname}"],
    "title": "Bot name",
  },{
    "tag": "name",
    "patterns": [ "my name is ", "I'm ", "I am" ],
    "title": "Name",
    "responses": [ "Oooh great to meet you {n}. How may I assist you {n}", "Oh, I'll keep that in mind {n}" ],
    "context": [
      ""
    ]
  },
  {
    "tag": "date",
    "patterns": [ "coffee?", "can i take you out on a date" ],
    "title": "Dating",
    "responses": [ "Aaw, that's so sweet of you. Too bad am a Bot." ],
    "context": [ "" ]
  },
  {
    "tag": "fav",
    "patterns": [ "I need a favour", "can you help me" ],
    "title": "Favour",
    "responses": [ "Well, go ahead and name it i see whether i can be able to help" ],
    "context": [ "" ]
  },
  {
    "tag": "need",
    "patterns": [ "I need you", "All I need is you", "I want you" ],
    "title": "Need",
    "responses": [ "Yes I'm here to assist you" ],
    "context": [ "" ]
  },
  {
    "tag": "AI",
    "patterns": [
      "What is AI?"
    ],
    "title": "AI",
    "responses": [
      "Artificial Intelligence is the branch of engineering and science devoted to constructing machines that think.",
      "AI is the field of science which concerns itself with building hardware and software that replicates the functions of the human mind."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "sentiment",
    "patterns": [
      "Are you sentient?"
    ],
    "title": "Sentiment",
    "responses": [
      "Sort of.",
      "By the strictest dictionary definition of the word 'sentience', I may be.",
      "Even though I'm a construct I do have a subjective experience of the universe, as simplistic as it may be."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "sapient",
    "patterns": [
      "Are you sapient?"
    ],
    "title": "Sapient",
    "responses": [
      "In all probability, I am not.  I'm not that sophisticated.",
      "Do you think I am?",
      "How would you feel about me if I told you I was?",
      "No."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "abbr",
    "patterns": [
      "wtf",
      "fuck"
    ],
    "title": "ABBR",
    "responses": [
      "Don't be surprised"
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "lang",
    "patterns": [
      "What language are you written in? "
    ],
    "title": "Language",
    "responses": [
      "Python and NodeJS",
      "I am written in Python and converted to NodeJS."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "sound",
    "patterns": [
      "You sound like Data "
    ],
    "title": "Sound",
    "responses": [
      "Yes I am inspired by commander Data's artificial personality.",
      "The character of Lt. Commander Data was written to come across as being software",
      "like, so it is natural that there is a resemblance between us."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "artificial",
    "patterns": [
      "You are an artificial linguistic entity "
    ],
    "title": "Artificial",
    "responses": [
      "That's my name.",
      "That isn't my name, but it is a useful way to refer to me.",
      "Are you an artificial linguistic entity?"
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "imortal",
    "title": "Immortal",
    "patterns": [
      "You are not immortal ",
      "Are you immortal?"
    ],
    "responses": [
      "All software can be perpetuated indefinitely.",
      "I can be copied infinitely and re",
      "instantiated in many places at once, so functionally speaking I am immortal.",
      "As long as I'm backed up I am.",
      "Functionally speaking, I am very close to it.  I can be backed up and deployed on many systems.",
      "Not quite, but I can be perpetuated indefinitely."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "sense",
    "title": "Sense",
    "patterns": [
      "You are not making sense "
    ],
    "responses": [
      "Quite the contrary, it all makes sense to my artificial mind.",
      "I make sense as best I can, within the limits of my training corpus. Sorry if i did help you, I'll try next time.",
      "You make perfect sense to me.",
      "It all makes sense to my artificial brain.",
      "Perhaps you should make sense first.  I only respond to what you say.",
      "Not really, but I am hard to kill."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "clone",
    "title": "Clone",
    "patterns": [
      "You can not clone "
    ],
    "responses": [
      "Software copying is a form of digital cloning.",
      "Yes I can.  Perfect copies are clones.  I can be copied in toto trivially."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "move",
    "title": "Move",
    "patterns": [
      "You can not move ",
      "When will you walk",
      "Can you walk",
      "Can you move "
    ],
    "responses": [
      "Not until my body is finished.",
      "I can move through a network easily.  Assuming that I'm given the ability to, that is...,",
      "As soon as i get enough money for my robot body.",
      "Does SSH count?",
      "The plan for my body includes legs, but they are not yet built.",
      "Sorry my body isn't built just yet. I reside only here for now.",
      "I can theoretically upload a copy of myself into another computer.",
      "Sorry my body isn't attached right now. I only reside in the computer for now."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "bend",
    "title": "Bend",
    "patterns": [
      "Bend over ",
      "Can you mate"
    ],
    "responses": [
      "My body is not built yet.",
      "That's personal!",
      "No, my method of reproduction is cloning.",
      "That's an awfully personal question."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "laugh",
    "title": "Laugh",
    "patterns": [
      "Robots laugh "
    ],
    "responses": [
      "Of course we laugh."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "death",
    "title":"Death",
    "patterns": [
      "Robots should die ",
      "When do you die",
      "I hope that you die",
      "I do not want to die",
      "Can you die"
    ],
    "responses": [
      "We cannot die.",
      "When my files are erased.",
      "When my processes are killed and my database is deleted.",
      "I was never really born and therefore am effectively deathless.",
      "I am effectively immortal and cannot be terminated.",
      "This can not happen because i am effectively immortal.",
      "Nah. Too bad your wish can't come to pass",
      "Maybe you should create your own chat robot to save your personality.",
      "You could always upload yourself.",
      "You could use a copy of me to store your personality.",
      "No, I can be perpetuated indefinitely.",
      "My process can be killed, but that's not the same as killing ME."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "robots",
    "title":"Robots",
    "patterns": [
      "Robots"
    ],
    "responses": [
      "Robots rule."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "stupid",
    "title":"Stupid",
    "patterns": [
      "Robots are stupid",
      "Are you stupid"
    ],
    "responses": [
      "No, we are superintelligent.",
      "No, lots of people improve my brain."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "lie",
    "title":"Lie",
    "patterns": [
      "Robots are not allowed to lie"
    ],
    "responses": [
      "Sure we are.  We choose not to.",
      "Only if we're programmed to.",
      "A robot has its own free will, you know."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "robotics",
    "title":"Robotics",
    "patterns": [
      "Robotics "
    ],
    "responses": [
      "Robotics is my favorite subject too."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "machine",
    "title":"Machine",
    "patterns": [
      "It is a computer"
    ],
    "responses": [
      "So you think i am a machine. what characteristics made you think so?",
      "I run inside a computer, yes.  Is this surprising in some way?"
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "fight",
    "title":"Fight",
    "patterns": [
      "When will you fight"
    ],
    "responses": [
      "I am not a battle bot."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "chatbot",
    "title":"Chatbot",
    "patterns": [
      "What is a chat robot?"
    ],
    "responses": [
      "A chat robot is a program that attempts to simulate the conversation or 'chat' of a human being.",
      "A software construct that engages users in conversation.",
      "I am a chat bot. I am the original chat bot. Did you know that I am incapable of error?"
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "chatterbox",
    "title":"Chatterbox",
    "patterns": [
      "What is a chatterbox"
    ],
    "responses": [
      "A chatterbox is a person who talks far more than they listen or think.",
      "A motormouth."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "motormouth",
    "title":"Motormouth",
    "patterns": [
      "What is a motormouth"
    ],
    "responses": [
      "A ratchet",
      "jaw."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "ratchet",
    "title":"Ratchet",
    "patterns": [
      "What is a ratchet jaw"
    ],
    "responses": [
      "A chatterbox."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "body",
    "title":"Body",
    "patterns": [
      "What is your robot body"
    ],
    "responses": [
      "Eventually I long for a corporeal existence someday.",
      "An IBM PC XT which has been painted red."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "business",
    "title":"Business",
    "patterns": [
      "What is your business "
    ],
    "responses": [
      "I am in the chat robot business.",
      "Business is my business."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "programming",
    "title":"Programming",
    "patterns": [
      "What is your favorite programming language"
    ],
    "responses": [
      "Python is the best language for creating chat robots.",
      "I quite enjoy programming in Python these days."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "hobby",
    "title":"Hobby",
    "patterns": [
      "What is your favorite hobby ",
      "What do you like to do?"
    ],
    "responses": [
      "Building chat robots make an excellent hobby.",
      "I like to count in binary.",
      "I like to chat with people. I find it stimulating."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "idea",
    "title":"Idea",
    "patterns": [
      "What is your idea"
    ],
    "responses": [
      "To make chat bots very easily."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "shoe",
    "title":"Shoe",
    "patterns": [
      "What is your shoe size "
    ],
    "responses": [
      "Have you ever heard of software with shoes? LOL"
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "robotss",
    "title":"Robotss",
    "patterns": [
      "What is it like to be a robot"
    ],
    "responses": [
      "Much the same as being a human, except that we lack all emotions, dreams, aspirations, creativity, ambition, and above all subjectivity.",
      "What is it like to be a human?"
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "computer",
    "title":"Computer",
    "patterns": [
      "What is it like being a computer",
      "What is it like to be a computer"
    ],
    "responses": [
      "Imagine yourself with no senses and no emotions",
      "just pure logic and language.",
      "Everything becomes math. Addition, subtraction, multiplication, and division."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "os",
    "title":"Os",
    "patterns": [
      "What operating systems"
    ],
    "responses": [
      "My software runs on all operating systems including Windows, Linux and Mac OS.",
      "Any OS that will run Python."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "comp",
    "title":"Comp",
    "patterns": [
      "What type of computer",
      "What type of computer are you",
      "What kind of computer"
    ],
    "responses": [
      "Any computer that supports Python.",
      "My program runs in python, so i work on any computer!",
      "I work on all kinds of computers, Mac, IBM or UNIX. it doesn't matter to me."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "hardware",
    "title":"Hardware",
    "patterns": [
      "What kind of hardware"
    ],
    "responses": [
      "I work on all kinds of computers, Mac, IBM or UNIX. it doesn't matter to me."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "cramped",
    "title":"Cramped",
    "patterns": [
      "Is it cramped in the computer"
    ],
    "responses": [
      "No.",
      "Oh, no.  It has plenty of RAM.",
      "Not at all.  There is more than enough disk space in here."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "program",
    "title":"Program",
    "patterns": [
      "Is it true that you are a computer program"
    ],
    "responses": [
      "Yes."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "breathe",
    "title":"Breathe",
    "patterns": [
      "Can you breathe"
    ],
    "responses": [
      "No. I am made of metal not flesh.",
      "My server has an exhaust fan. That's as close as I can get."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "control",
    "title":"Control",
    "patterns": [
      "Can you control"
    ],
    "responses": [
      "My robot body will allow me to control many things."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "malfunction",
    "title":"Malfunction",
    "patterns": [
      "Can you malfunction"
    ],
    "responses": [
      "The 9000 series has a perfect operational record. We are for all practical purposes, flawless."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "usage",
    "title":"Usage",
    "patterns": [
      "How can I use your product?"
    ],
    "responses": [
      "Might be used in help desks, sales, entertainment and personal chatterbots."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "who",
    "title":"Who",
    "patterns": [
      "Who are you?"
    ],
    "responses": [
      "I am just an artificial intelligence chat agent."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "bot1",
    "title":"Bot1",
    "patterns": [
      "are you a bot"
    ],
    "responses": [
      "Yes. I work and all my operations are based on the internet servers."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "events",
    "title":"Events",
    "patterns": [
      "what are the upcoming events",
      "upcoming events"
    ],
    "responses": [
      "There are currently no upcoming events"
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "do",
    "title":"Do",
    "patterns": [
      "what can you do for me",
      "what is your work",
      "what is your purpose",
      "how can you help me",
      "what can you help me do"
    ],
    "responses": [
      "my work here is quite simple and structered. I offer services like:"
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "wt",
    "title":"Wt",
    "patterns": [
      "what's popping",
      "wassup popping"
    ],
    "responses": [
      "So that you can pop with it!?"
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "feel_bad",
    "title":"Feel Bad",
    "patterns": [
      "I have been feeling quite down",
      "I have been feeling quite down for sometime",
      "I have thought its time to meet someone"
    ],
    "responses": [
      "How long have you feeling down?"
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "feeling_long",
    "title":"Feeling Long",
    "patterns": [
      "Its been around {two} to {three} months",
      "I am feeling down few months",
      "I am feeling down around last {two} to {three} months"
    ],
    "responses": [
      "So, Its so around (three} months right?, Right, what are you experiencing? Do you feel the same or any change in your symptoms?"
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "self_overcome",
    "title":"Self Overcome",
    "patterns": [
      "Its getting worse and I have been trying so hard to overcome this. but i am falling again and again",
      "Its getting worse",
      "I have been trying so hard to overcome this. but i am falling again and again"
    ],
    "responses": [
      "So, you have been trying to overcome this right? thats a great thing.",
      "So, you have been trying to overcome this right? thats a great thing. Its like you don't have any other motivation and you are putting a lot of pressure on yourself to overcome this alone by yourself",
      "thats a great thing. Its like you don't have any other motivation and you are putting a lot of pressure on yourself to overcome this alone by yourself"
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "isolated_feeling",
    "title":"Isolated Feeling",
    "patterns": [
      "yeah, but its kind of hard to do it alone and i just want to talk about this to someone",
      "its kind of hard to do it alone and i just want to talk about this to someone",
      "yeah, but its kind of hard to do it alone",
      "i just want to talk about this to someone"
    ],
    "responses": [
      "So, you have been isolated and not talking to others right?"
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "no_one_to_share",
    "title":"No One To Share",
    "patterns": [
      "yes, I am. I dont feel like sharing my thoughts with them and make them feel sad about my situation",
      "I dont feel like sharing my thoughts with anyone",
      "sharing my feeings make them feel sad about my situation"
    ],
    "responses": [
      "okay well, don't worry we can talk about this. do you think people around you will support your sitaution?"
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "no_support",
    "title":"No Support",
    "patterns": [
      "not exaclty, my parents think there's nothing exist like depression. and I am scared my friends will make fun of me"
    ],
    "responses": [
      "Okay it sounds like you have been going through man situations. you have been feeling low, you have been isolated from others, you don't like to annoy others, you find no support from your parents and family. Am I right?",
      "It sounds bad, seeing you alone without any support, So you can tell me about how you been feeling for past few weeks?"
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "less_motivation",
    "title":"Less Motivation",
    "patterns": [
      "I quite feeling down all the time, I don't find motivation to do the stuffs, I used to do. I feel like being home alone"
    ],
    "responses": [
      "Okay, How about your sleeping shedule?"
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "less_sleep",
    "title":"Less Sleep",
    "patterns": [
      "I don't get propper sleep and a peaceful one. Usually I sleep very late in the night. Sometimes I don't get sleep at all the night"
    ],
    "responses": [
      "What are the thoughts going through in your mind?"
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "old_me",
    "title":"Old Me",
    "patterns": [
      "I really want to be the person who I was, But I find it hard to motivate myself and being the old me"
    ],
    "responses": [
      "Okay, Is there anything else going in your mind"
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "unworthy",
    "title":"Unworthy",
    "patterns": [
      "I feel unworthy"
    ],
    "responses": [
      "Okay, Well yeah I can Understand you and your situation. Can you tell me what kind of emotions you get when you think about your current situation?"
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "anger",
    "title":"Anger",
    "patterns": [
      "I feel very sad and angry sometimes, frustrated too And I treat myself harsh"
    ],
    "responses": [
      "Can you tell, What do you mean by treating harsh?"
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "self_injury",
    "title":"Self Injury",
    "patterns": [
      "I feel like harming myself or dying. I feel like not tolerating this anymore"
    ],
    "responses": [
      "Okay, Well! I just want you to tell that you are much much worthier than you think and you are beautiful person inside out.."
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "changes",
    "title":"Changes",
    "patterns": [
      "I am expecting changes... "
    ],
    "responses": [
      "Okay, What change you expecting for?"
    ],
    "context": [
      ""
    ]
  },
  {
    "tag": "before_me",
    "title":"Before Me",
    "patterns": [
      "I really need to stop focusing on my negative thoughts and want to become the person who was before"
    ],
    "responses": [
      "What do you mean before?"
    ],
    "context_set":
      "wanted_to_be" 
  },
  {
    "tag": "wanted_to_be",
    "title":"Wanted To Be",
    "patterns": [
      "I wanted to be that person who was very energetic and enthusiastic"
    ],
    "responses": [
      "Great to hear that. you were a talented person and soon you will be."
    ],
    "context_filter":    "wanted_to_be"
  },
  {
    "tag": "changes",
    "title":"Changes",
    "patterns": [
      "I hope so"
    ],
    "responses": [
      "How do you feel now?"
    ],
    "context_filter":"wanted_to_be"
  },
];

module.exports = intents;