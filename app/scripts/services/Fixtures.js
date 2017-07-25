(function() {
  function Fixtures() {
    var Fixtures = {};
    var projects = [{
        project: 'Ambient Jams',
        link: 'https://frame-maker-badger-75026.netlify.com/',
        languages: 'HTML, CSS, JavaScript, jQuery, AngularJS',
        art: '/assets/ambient_jams.png' //,
        //  summary: 'There are a lot of options for music streaming out there. Sometimes though, you just want to tune in and zone out. Enter Ambient Jams, perfect for homework, coding, or just general white noise'
      },
      {
        project: 'Sea Chat',
        link: 'https://peddler-cat-30376.netlify.com/',
        languages: 'HTML, CSS, JavaScript, jQuery, Bootstrap, Firebase, AngularJS',
        art: '/assets/sea_chat.png' //,
        //  summary: 'Lightweight chat app, built to enable quick communication for those that are interested in ocean environmentalism'
      },
      {
        project: 'Address Book',
        link: 'https://github.com/SancSalix/address_bloc',
        languages: 'Ruby',
        art: '/assets/address.png' //,
        //  summary: 'Lightweight chat app, built to enable quick communication for those that are interested in ocean environmentalism'
      },
      {
        project: 'Bloccit',
        link: 'https://obscure-anchorage-28821.herokuapp.com/',
        languages: 'HTML, CSS, Ruby on Rails',
        art: '/assets/bloccit.png' //,
        //  summary: 'Lightweight chat app, built to enable quick communication for those that are interested in ocean environmentalism'
      }
    ];

    var posts = [{
        title: 'Getting My Start',
        date: '4/12/2017',
        text: "   I got started with programming because I was very bored at my accounting job, there wasn't enough work to keep" +
          " me occupied, and I was frustrated by the limitations of the tools I had. Those tools were mainly the ERP I used" +
          " (SAP at that time) and Microsoft Excel. So very limited.<br><br>" +
          "To save time and effort, I created an invoice generator for some internal business units I was cross charging." +
          "Very simple, it merely captured a certain area, and created a pdf every time I clicked a button.<br><br>" +
          "   A co-worker saw this and liked it. He asked for one of his own. However, he wanted one of vastly different scope." +
          "He wanted his to be automated, to scrape the data out of forecasted templates, create new templates, and add all" +
          " the data to an ever growing database. He wanted it locked down for editing when operations people used it, he wanted" +
          " a way to implement static cost changes, the ability to edit templates, the list went on and on.<br><br>" +
          "   My co-worker was also very exacting. He had a long list of must-haves, and wouldn't budge on a single one." +
          " A lot of times I thought something was impossible, I would spend researching and cobbling together different bits" +
          " of things I had learned, to learn I was wrong and learn a lot in the process.<br><br>" +
          "   All the while I was learning new types of VB, learning it again when I was forced to move to Access, and realizing" +
          " that the struggle and completion of a programming challenge was far more satisfying than accounting had ever been.<br><br>" +
          "   Once I had grasped this, it was like a curtain had parted. I started looking for a new job, because I knew my current" +
          " role couldn't expand to fit my newfound programming urges. I was lucky enough to find a role at a local (and locally" +
          " famous) software developer. The role was for a position that was half accountant/half sys admin. So much closer! I" +
          " was also allowed a lot more freedom in my ability to explore and try things out. I spent a year learning SQL and testing" +
          " the limits and if my new passion would last.<br><br>" +
          "   It not only lasted, it grew. I wanted more than databases and reports. I wanted to be able to create things, to see" +
          " complicated nests of code make something beautiful. I had a goal and I was driven to pursue it. It was a relief to me" +
          " to find work that satisfied, after the frustration of working in accounting.<br><br>" +
          "   So! I started because I didn't want to save every invoice individually, and that was the best happy accident for me.<br><br> " +
          "<sub>*Also I'd prefer to never have to use VB ever again.*</sub><br><br><br>"
      },
      {
        title: 'Challenge',
        date: '4/11/17',
        text: "One of the biggest troubles I've had with attempting to shift my career and learn programming has been" +
          " centered around tools. Which IDE to use? How do I upload things? Where/how do I preview what I'm building? " +
          "Which languages do I want to learn?<br><br>" +
          "I was embarrassed to ask in the beginning some of the stuff I assumed would be simple. Most resources either had" +
          " internal little coding windows to attempt what they were teaching, or were just examples and how-tos. Googling" +
          " ususually ended up at Stack Overflow with a million voices shouting.<br><br>" +
          "The choice for IDE is a lot of personal preference mixed with whatever people have to use at work, but I had no" +
          " experience with any of them, and didn't want to choose one that would be *too* helpful and prevent me from" +
          " learning. Random googling proved overwhelming. The best results I had were from asking developers their favorite" +
          " and giving those a try.<br><br>" +
          "After that, how did I actually *see* what I was making? HTML was simple enough, but where was I going to test the" +
          " functionality of my other scripts? That was where a simple google was enough, and I ended up enjoying JSBin for " +
          "simple checks.<br><br>" +
          "More complicated projects though needed more sophisticated preview methods. I learned the rightness of version" +
          " control, and the ease of GitHub (after some minor struggles setting up my command line) meant I now had GitHub" +
          " pages. A blessing to see the websites I had built! My first time launching the site I had been working on was " +
          "something of a revelation. The code I had written was making links fire, actions happen, images show, and it " +
          "existed in a real space.<br><br>" +
          "Languages are still something I waver between, besides the ones mandated by my bootcamp. Choices like Python, Java," +
          " Go, C , or Ruby. Each used for different types of work. I feel more confident as I go along, and I also know I can" +
          " always learn another as I find my strengths. That doesn't mean there aren't a million choices though! I mostly spy" +
          " on other developer conversations scattered across the internet, and take personal note. This person says Ruby on " +
          "Rails is dying, this person loves React, it all forms a web of awareness. The other thing I learned was useful was" +
          " to look at job postings. If it was needed, it was requested. The most used languages became familiar after a day of" +
          " combing through a variety of openings.<br><br>" +
          "I'm less embarrassed to ask now, but that's also because instead of a babe in the woods, I am ever so slightly more" +
          " knowledgeable. The world of programming still seems vast to my eyes.<br><br><br>"
      }
    ];

    return {
      studies: projects,
      blog: posts
    }
  }

  angular
    .module('portfolio')
    .factory('Fixtures', Fixtures);
})();
