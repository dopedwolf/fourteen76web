import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {routing} from './app.routes';
import { SwiperModule } from 'angular2-useful-swiper';
//unlocks http service
import {HttpModule} from '@angular/http';

import {MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule} from '@angular/material';

// service
import {EmailService} from './subscribe/email.service';
import {EventService} from './calendar/calendar.service';

//main components
import {AppComponent} from './app.component';
import {CalendarComponent} from './calendar/calendar.component';
import {HomeComponent} from './views/Mviews/home.component';
import {HomeTwoComponent} from './views/Mviews/home2.component';
import {HeaderComponent} from './navigation/header.component';
import {ArtistsComponent} from './views/Mviews/artists.component';
import {ArtistsTwoComponent} from './views/Mviews/artists2.component';
import {MusicComponent} from './views/Mviews/music.component';
import {FoodComponent} from './views/Mviews/food.component';
import {PhotographyComponent} from './views/Mviews/photography.component';
import {PhotographyTwoComponent} from './views/Mviews/photography2.component';
import {PhotographyThreeComponent} from './views/Mviews/photography3.component';
import {SubmitComponent} from './views/Mviews/submit.component';
import {SubscribeComponent} from './subscribe/subscribe.component';
import {SubscribeElement} from './subscribe/subscribeElement.component';
import {ElseComponent} from './views/Mviews/else.component';
//posts vvv
//articles
import {Colour} from './views/posts/articles/colours.component';
import {Girlpool} from './views/posts/articles/girlpool.component';
import {PerfumeGenius} from './views/posts/articles/perfume.component';
import {BloodComponent} from './views/posts/articles/blood.component';
import {UpperRoom} from './views/posts/articles/upperroom.component';
import {PsychicHotline} from './views/posts/articles/psychic.component';
import {DeadBalloons} from './views/posts/articles/balloons.component';
import {SleepDrive} from './views/posts/articles/sleepdrive.component';
import {MarriageComponent} from './views/posts/articles/marriage.component';
import {LostSloss} from './views/posts/articles/lostsloss.component';
import {NickRocks} from './views/posts/articles/thenick.component';
import {EroticaComponent} from './views/posts/articles/erotica.component';
import {ZypComponent} from './views/posts/articles/zyp.component';
import {HeirloomComponent} from './views/posts/articles/heirloom.component';
import {CarrigansComponent} from './views/posts/articles/carrigans.component';
import {CindyWilson} from './views/posts/articles/cindywilson.component';
import {Shame} from './views/posts/articles/shame.component';

//photography
import {BikeJoust} from './views/posts/photography/joust.component';
import {Gon} from './views/posts/photography/gon.component';
import {DieTrying} from './views/posts/photography/dietrying.component';
import {PrideParade} from './views/posts/photography/prideparade.component';
import {LostLands} from './views/posts/photography/lostlands.component';
import {CrackerPackers} from './views/posts/photography/crackers.component';
import {Trump} from './views/posts/photography/trump.component';
import {Gumbo} from './views/posts/photography/gumbo.component';
import {Sandlings} from './views/posts/photography/sandlings.component';
import {Malverns} from './views/posts/photography/malverns.component';
import {NoNames} from './views/posts/photography/nonames.component';
import {Ghouls} from './views/posts/photography/ghouls.component';
import {Ireland} from './views/posts/photography/ireland.component';
import {NewYork} from './views/posts/photography/newyork.component';
import {ThomasHall} from './views/posts/photography/thomashall.component';
import {MilesTwist} from './views/posts/photography/milestwist.component';
import {Yoav} from './views/posts/photography/yoav.component';
import {Endangered} from './views/posts/photography/endangered.component';
import {Winter} from './views/posts/photography/winter.component';
import {LastGeneration} from './views/posts/photography/lastgeneration.component';
import {Byron} from './views/posts/photography/byron.component';
import {Isla} from './views/posts/photography/isla.component';
import {Brian} from './views/posts/photography/brian.component';
import {Fiesta} from './views/posts/photography/fiesta.component';
import {CycleFest} from './views/posts/photography/cyclefest.component';
import {Aerius} from './views/posts/photography/aerius.component';
import {Skate} from './views/posts/photography/skate.component';
import {Fashion} from './views/posts/photography/fashion.component';
import {Twilight} from './views/posts/photography/twilight.component';
import {Blm} from './views/posts/photography/blm.component';
import {SkateFund} from './views/posts/photography/skatefund.component';
import {Untitled} from './views/posts/photography/untitled.component';
import {LaundryPunk} from './views/posts/photography/laundrypunk.component';
import {Twelve} from './views/posts/photography/twelveweeks.component';
import {Snow} from './views/posts/photography/snow.component';

//artists
import {Merrilee} from './views/posts/artists/merrilee.component';
import {Amy} from './views/posts/artists/amy.component';
import {Marbles} from './views/posts/artists/marbles.component';
import {Caroline} from './views/posts/artists/caroline.component';
import {William} from './views/posts/artists/william.component';
import {Sara} from './views/posts/artists/sara.component';
import {Chris} from './views/posts/artists/chris.component';
import {Katelyn} from './views/posts/artists/katelyn.component';
import {Rizzo} from './views/posts/artists/rizzo.component';
import {Gaijin} from './views/posts/artists/gaijin.component';
import {Hannah} from './views/posts/artists/hannah.component';
import {Christina} from './views/posts/artists/christina.component';
import {Andrea} from './views/posts/artists/andrea.component';
import {Leah} from './views/posts/artists/leah.component';
import {Logan} from './views/posts/artists/logan.component';
import {ByronA} from './views/posts/artists/byron.component';
import {Lewis} from './views/posts/artists/lewis.component';
import {Princess} from './views/posts/artists/princess.component';

//videos
import {DonGero} from './views/posts/videos/dongero.component';
import {Boom} from './views/posts/videos/boom.component';
import {Homeward} from './views/posts/videos/homeward.component';
import {HeavyUser} from './views/posts/videos/heavyuser.component';

//other
import {WeAreOne} from './views/other/weareone.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeTwoComponent,
    CalendarComponent,
    ElseComponent,
    ArtistsComponent,
    ArtistsTwoComponent,
    MusicComponent,
    FoodComponent,
    PhotographyComponent,
    PhotographyTwoComponent,
    PhotographyThreeComponent,
    SubmitComponent,
    SubscribeComponent,
    SubscribeElement,
    PerfumeGenius,
    BloodComponent,
    UpperRoom,
    PsychicHotline,
    DeadBalloons,
    SleepDrive,
    MarriageComponent,
    LostSloss,
    NickRocks,
    EroticaComponent,
    ZypComponent,
    HeirloomComponent,
    CarrigansComponent,
    BikeJoust,
    Gon,
    DieTrying,
    PrideParade,
    LostLands,
    CrackerPackers,
    Trump,
    Gumbo,
    Sandlings,
    Malverns,
    NoNames,
    Ghouls,
    Ireland,
    NewYork,
    ThomasHall,
    MilesTwist,
    Yoav,
    Endangered,
    Winter,
    LastGeneration,
    Byron,
    Isla,
    Brian,
    Fiesta,
    CycleFest,
    Aerius,
    Skate,
    Fashion,
    Twilight,
    Blm,
    SkateFund,
    DonGero,
    Boom,
    Homeward,
    HeavyUser,
    Untitled,
    LaundryPunk,
    Merrilee,
    Amy,
    Marbles,
    Caroline,
    William,
    Sara,
    Chris,
    Katelyn,
    Rizzo,
    Gaijin,
    Hannah,
    Christina,
    Andrea,
    Leah,
    Logan,
    ByronA,
    Lewis,
    Princess,
    Colour,
    Girlpool,
    Twelve,
    CindyWilson,
    WeAreOne,
    Snow,
    Shame
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    SwiperModule
  ],
  bootstrap: [AppComponent],
  providers: [EmailService, EventService]
})
export class AppModule {

}
