import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Ratings = () => {
  return (
    <Layout>
      <SEO title="Raitings overview" />
      <div className="raitings-container-wrapper">
        <div className="raitings-containers raitings-dark raitings-top">
          <h3>General recommendation</h3>
          <div>
            <div>
              <p>How good is the anime to watch as a non-anime fan.</p>
              <p>
                <i>
                  NOTE: this doesn’t reflect on how good the anime is in general
                  only on how good of a recommendation it is.
                </i>
              </p>
            </div>
            <ul>
              <li>
                1-2 stars. Don't recommend to anyone unless they are already an
                anime fan.
              </li>
              <li>
                3-5 stars. More of a 5th-6th anime to watch, than a first.
              </li>
              <li>
                6-7 stars. Strong choice to recommend but use your own judgement
                based on their personality and what the anime is.
              </li>
              <li>
                8-9 stars. Very good recommendation choice, highly likely they
                will finish this show even if they don't watch more.
              </li>
              <li>
                10 stars. Amazing, very easy to convert someone to watching
                anime from showing them this.
              </li>
            </ul>
          </div>
        </div>

        <div className="raitings-containers raitings-light">
          <h3>Lore</h3>
          <div>
            <div>
              <p>
                How much previous knowledge of Japan do you need to know in
                order to 'get' it. How much fan-service is in the show and it is
                actually relevant to the story.
              </p>
            </div>
            <ol>
              <li>
                Heavy fan-service, lots of Japanese type jokes, lots of
                non-translated text.
              </li>
              <li>Fan-service but it's passable.</li>
              <li>
                Minor knowledge required, no fan-service unless required for
                plot.
              </li>
              <li>
                No knowledge of Japan's culture in order to enjoy the anime. No
                fan-service.
              </li>
              <li>
                If it wasn’t a cartoon someone would think it was a HBO show.
              </li>
            </ol>
          </div>
        </div>

        <div className="raitings-containers raitings-light">
          <h3>Music</h3>
          <div>
            <div>
              <p>How weeb is the opening and general music.</p>
            </div>
            <ol>
              <li>
                Super weeb or just bad in general and warrants and instant
                close.
              </li>
              <li>It's annoying but you can just skip it.</li>
              <li>Nothing memorable but also not off putting.</li>
              <li>You will watch the opening every time.</li>
              <li>Can easily listen to the music in public.</li>
            </ol>
          </div>
        </div>

        <div className="raitings-containers raitings-light">
          <h3>Animation</h3>
          <div>
            <div>
              <p>
                Art style and character design is it too unique or have to much
                bad CGI that it becomes off putting.
              </p>
            </div>
            <ol>
              <li>
                Weird/strange aged looking characters, you know what I mean.
              </li>
              <li>
                Bad animation, weird mix of CGI or just cheap animation all
                characters look the same just different hair.
              </li>
              <li>Nothing memorable but also not off putting.</li>
              <li>Good animation and character design.</li>
              <li>
                High quality animation and very interesting character design.
              </li>
            </ol>
          </div>
        </div>

        <div className="raitings-containers raitings-light">
          <h3>Number of episodes</h3>
          <div>
            <div>
              <p>Is it shounen(over 500) or 12 episodes.</p>
            </div>
            <ol>
              <li>125+</li>
              <li>53-125</li>
              <li>27-52</li>
              <li>13-26</li>
              <li>12 or less</li>
            </ol>
          </div>
        </div>

        <div className="raitings-containers raitings-light">
          <h3>First 5 mins</h3>
          <div>
            <div>
              <p>
                How likely the person will keep watching after the opening? Is
                there anything too off-putting in the opening music or at the
                start that would cause an instant turn of.
              </p>
            </div>
            <ol>
              <li>
                Riddled with fan-service and very off putting and will be an
                instant close.
              </li>
              <li>
                Not many people will carry on watching unless you heavily
                persuade them.
              </li>
              <li>Nothing memorable but also not off putting.</li>
              <li>Very likely you will watch the rest of the show.</li>
              <li>Very strong opening that sets the plot</li>
            </ol>
          </div>
        </div>

        <div className="raitings-containers raitings-light">
          <h3>First Episode</h3>
          <div>
            <div>
              <p>
                How likely the person will keep watching after the first
                episode.
              </p>
            </div>
            <ol>
              <li>
                Riddled with fan-service and very off putting and will be an
                instant close.
              </li>
              <li>
                Not many people will carry on watching unless you heavily
                persuade them.
              </li>
              <li>Nothing memorable but also not off putting.</li>
              <li>Very likely you will watch the rest of the show.</li>
              <li>Very strong opening that sets the plot very well</li>
            </ol>
          </div>
        </div>

        <div className="raitings-containers raitings-light">
          <h3>Availability</h3>
          <div>
            <div>
              <p>
                Is it on Netflix/Amazon prime or do you have to sail the seven
                seas, not that I would condone that.
              </p>
            </div>
            <ol>
              <li>You won't find it online unless you sale the seven seas.</li>
              <li>
                Hard to find online or is only available in certain areas at
                certain times.
              </li>
              <li>
                Available on streaming sites that you can give them your
                information for as they won't be paying for anime online
                streaming.
              </li>
              <li>
                On major streaming sites that the user will already have, i.e
                Netflix/Amazon prime.
              </li>
              <li>It's everywhere.</li>
            </ol>
          </div>
        </div>

        <div className="raitings-containers raitings-light">
          <h3>Group watch</h3>
          <div>
            <div>
              <p>How easy is it to watch as a group?</p>
            </div>
            <ol>
              <li>
                Remember the feeling when you’re watching a film with your
                parents and then there is a sex scene? It's like that but for
                the whole anime.
              </li>
              <li>
                Once you know the plot it isn’t that interesting the second time
                around or it has awkward scenes.
              </li>
              <li>
                It's watchable but you your watching it for the experience with
                the other viewer rather than the anime itself.
              </li>
              <li>Fun to re-watch and have discussions while watching.</li>
              <li>
                Very enjoyable to watch again within a group with lots of
                details you might of missed in first viewing.
              </li>
            </ol>
          </div>
        </div>

        <div className="raitings-containers raitings-light">
          <h3>Filler</h3>
          <div>
            <div>
              <p>How many fillers and what is the quality of these fillers?</p>
            </div>
            <ol>
              <li>It's Naruto.</li>
              <li>Lots of filler mixed with story.</li>
              <li>
                Some filler but you know it's filler so you can safely skip it.
              </li>
              <li>
                Some filler but it's very enjoyable. i.e baseball episode.
              </li>
              <li>No filler.</li>
            </ol>
          </div>
        </div>

        <div className="raitings-containers raitings-light">
          <h3>Image Search</h3>
          <div>
            <div>
              <p>
                When you google the name, does it come up with fan art as the
                default image.
              </p>
            </div>
            <ol>
              <li>All characters are in there underwear or swimsuits.</li>
              <li>Spoilers or fan-service images on the second row.</li>
              <li>Nothing weird until you start scrolling.</li>
              <li>Little to no spoilers and nothing weird showing at tall.</li>
              <li>
                No spoilers and interesting fanart/backgrounds that you can use.
              </li>
            </ol>
          </div>
        </div>

        <div className="raitings-containers raitings-light">
          <h3>Dub Quality</h3>
          <div>
            <div>
              <p>How good is the dub? Is there even a dub?</p>
            </div>
            <ol>
              <li>
                Terrible dub, all characters sound the same with terrible mics.
              </li>
              <li>
                There is only 3 voice actors for every character (prevalent in
                older anime).
              </li>
              <li>
                Most characters are good but there is few that sound terrible.
              </li>
              <li>Very strong Dub.</li>
              <li>High quality Dub.</li>
            </ol>
          </div>
        </div>

        <div className="raitings-containers raitings-light">
          <h3>Enjoyability</h3>
          <div>
            <div>
              <p>How enjoyable is it to watch?</p>
            </div>
            <ol>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Ratings
