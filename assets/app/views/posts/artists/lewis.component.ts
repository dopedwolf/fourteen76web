import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component({
  selector: 'app-artist',
  templateUrl: './artists.component.html'
})

export class Lewis implements OnInit {
  images: string[];
  config: any = {
      nextButton: '.swiper-button-right',
      prevButton: '.swiper-button-left',
      centeredSlides: true,
      autoHeight: true,
      spaceBetween: 10
  };

  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
    {name: 'description', content: `Questions and answers transcribed from our interview with Lewis Lunbeck, a man of the road.
How long have you been on the road?`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Questions and answers transcribed from our interview with Lewis Lunbeck, a man of the road.
How long have you been on the road?`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'lewis.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Questions and answers transcribed from our interview with Lewis Lunbeck, a man of the road.
How long have you been on the road?`},
      {name: 'twitter:image', content: global.shareImgUrl + 'lewis.jpg'}
    ]);
  }

  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
    this.images = [
      '/images/photography/lewis/one.jpg',
      '/images/photography/lewis/two.jpg',
      '/images/photography/lewis/three.jpg',
      '/images/photography/lewis/four.jpg',
      '/images/photography/lewis/five.jpg'
    ];
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }

  ispostTitle: boolean = true;
  ispostSubtitle: boolean = false;
  ispostSubtitlePhoto: boolean = true;
  ispostImage: boolean = true;
  isimageCaption: boolean = false;
  isdescriptionHeading: boolean = false;
  ispreQIntro: boolean = true;
  isqa1: boolean = true;
  isqa2: boolean = false;
  isphotoDescription: boolean = false;
  issocial: boolean = false;

  postTitle = 'Lewis and Quasar';
  postImage = "/images/headImages/lewis.jpg";
  postSubtitlePhoto= "Photography by Mateo Montoya";
  preQIntro = [
    'The following are questions and answers transcribed from our interview with Lewis Lunbeck, a man of the road.'
  ];
  qa1 = [
    {
      q: 'How long have you been on the road?',
      a: `Getting close to four years now.`
    },
    {
      q: `Where is home?`,
      a: `I started out from Omaha, Nebraska.`
    },
    {
      q: `What inspired you to go on the road?`,
      a: `Before I went on the road I was a year unemployed, living at my mom’s house, and I didn’t want to get a job. I didn’t want to compete with society’s means. It was kind of hard to make money and I didn’t really care much for it. I was in a depressed state. Didn’t know where life was going so I just hit the road. I didn’t know about the traveler’s life, had no idea what I was doing, or where I was going. The second day I run into these freight hoppers, and that’s where my journey began. They showed me the ropes and taught me how to survive on the road.`
    },
    {
      q: `Are you glad about being on the road?`,
      a: `Yeah, I love the road; it has its ups and downs. In my experience there are more ups than downs. You have to stay positive about things, more so when they are shitty. That goes for everything, not just life on the road, but life itself. Always look on the positive side. Darkness can be good too; it’s a great teacher.`
    },
    {
      q: `How old are you?`,
      a: `23`,
      a2: `How about you guys, how old are you?`,
      a3: `We are both 19`,
      a4: `Damn, I thought you guys were older than me. When I was 19 I was going to college and doing a bunch of bad drugs. I went to a community college (Metropolitan Community College) in Omaha. I dropped out because I was just then figuring out how society was, getting into conspiracy theories and all that. I was also on Robitussin and pills at the time, so it was really fucking with my mind. I don’t really regret anything, although I am not so proud of the drugs.`
    },
    {
      q: `Do you still do drugs?`,
      a: `I do psychedelics and weed, that’s it. I don’t touch anything artificial anymore.`
    },
    {
      q: `Do you see yourself having an ending to your journey?`,
      a: `Yeah, at some point, I’m just going with it for now.`
    },
    {
      q: `What is the longest you have stayed at one place?`,
      a: `Six months. It was in Williams, Oregon. I was trimming on a pot farm.`
    },
    {
      q: `Did they pay you?`,
      a: `$200 a pound`
    },
    {
      q: `How far up north have you gone?`,
      a: `Washington`
    },
    {
      q: `What do you do for fun in these cities?`,
      a: `Well, hanging out in the popular spots and just running into people man, have good conversations and even hang; busking is easier in these spots too. I like to talk to people, get to know them, find out who they are and where they come from.`
    },
    {
      q: `How do you usually travel`,
      a: `Hitching, it’s how I get around most places. I used to hop freight trains. I also do a lot of walking.`
    },
    {
      q: `What’s the most you’ve had to walk?`,
      a: `42 miles, eventually someone picked me up; it usually doesn’t take long before someone does.`
    },
    {
      q: `How did you find Quasar?`,
      a: `I found him on the road two years ago. He is from Austin, Texas. This girl picked him off Craiglist, but she wasn’t able to take care of him. We’ve been together for two years now. He was kind of confused on who was his owner at first, because there used to be large group of kids around him all the time.`,
      a2: `He [Quasar] knows when people are tripping. He comes up and tries to lick the sweat, trying to get high. One time I was tripping in Austin, it was a hot night and I was cuddling him and sweating all over him, he started tripping and twitching. We both went into a dream like state. It felt like we were dreaming together, it was weird man. I saw forest spirits, I thought I was getting abducted by aliens, and at one point I felt like I was in a comma. Research chemicals are intense.`
    },
    {
      q: `What breed is Quasar?`,
      a: `Blue heeler German Shepherd, he is two and half years old.`
    },
    {
      q: `Do you usually travel by yourself or in groups?`,
      a: `I just started traveling by myself—about three months ago. It’s different; people seem a little more scared of me. Before no one ever asked me when they stopped to give me a ride if I was going to hurt them, now they do.`
    },
    {
      q: `Is it hard to find a place to sleep?`,
      a: `Not so much. I wake up pretty early, before businesses open, so sometimes I just sleep behind stores or in parking decks.`
    },
    {
      q: `Aside from life on the road, what are your other passions?`,
      a: `Music and art. Those are part of my main passions. Anyone can benefit from them, they just gives off a special feeling, and they heal. I also love to get my hands dirty and give back to the earth.`
    },
    {
      q: `Do you keep up with your mom?`,
      a: `I call her every now and then. I also visit her when I go through Nebraska`
    },
    {
      q: `How does she feel about your lifestyle?`,
      a: `Emotionally, she is alright now. She used to be real bad about it, you know, angry. She doesn’t get why I’m doing this, and that’s alright, we all have our own perspectives.`
    },
    {
      q: `What’s your dream?`,
      a: `I want to learn to sail, get a boat, and just travel the world.`
    },
    {
      q: `Where are you going next?`,
      a: `I don’t know. I might head north. I have a friend in Maryland that I want to visit.`
    }
  ];

  pageUrl: string = 'LewisAndQuasar';
  shareTitle: string = 'Lewis%20and%20Quasar';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "interview, lifeontheroad";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";


}
