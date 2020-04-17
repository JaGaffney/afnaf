import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Ratings = () => {
  return (
    <Layout>
      <SEO title="ratings overview" />
      <div className="ratings-container-wrapper">
        <div className="ratings-containers ratings-dark ratings-top">
          <h3>Anime for non-anime fans recommendation</h3>
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
        <div className="ratings-containers ratings-dark">
          <h3>General recommendation</h3>
          <div>
            <div>
              <p>How good the anime is in general.</p>
            </div>
            <ul>
              <li>1-2 stars.</li>
              <li>3-5 stars.</li>
              <li>6-7 stars.</li>
              <li>8-9 stars.</li>
              <li>10 stars.</li>
            </ul>
          </div>
        </div>

        {/*  */}

        <div className="ratings-containers ratings-light">
          <h3>Plot</h3>
          <div>
            <div>
              <p></p>
            </div>
            <ul>
              <li>
                1 star. Very boring and repetaive with nothing interesting
                happening.
              </li>
              <li>2 stars. Very generic but not to bad to watch.</li>
              <li>3 stars. Generic,but done in a new/intersting way.</li>
              <li>4 stars. Very engaing plot.</li>
              <li>5 stars. Amazing story.</li>
            </ul>
          </div>
        </div>

        <div className="ratings-containers ratings-light">
          <h3>Uniqueness/Concept</h3>
          <div>
            <div>
              <p>
                How unique the concept of the anime is? No point trying to
                convince someone to watch an anime when they can just watch a
                HBO show with the same premise
              </p>
            </div>
            <ul>
              <li>1 star. Very generic and nothing spceical.</li>
              <li>
                2 stars. Hopefully there is other redeming qualitys as its not
                winning any awards for its idea
              </li>
              <li>3 stars. Interesting idea but has been done before.</li>
              <li>
                4 stars. Has been done before but the anime medium has greatly
                enhanced it.
              </li>
              <li>5 stars. Something than can only be done within anime.</li>
            </ul>
          </div>
        </div>

        <div className="ratings-containers ratings-light">
          <h3>Lore</h3>
          <div>
            <div>
              <p>
                How much previous knowledge of Japan do you need to know in
                order to 'get' it. How much fan-service is in the show and it is
                actually relevant to the story.
              </p>
            </div>
            <ul>
              <li>
                1 star. Heavy fan-service, lots of Japanese type jokes, lots of
                non-translated text.
              </li>
              <li>2 stars. Fan-service but it's passable.</li>
              <li>
                3 stars. Minor knowledge required, no fan-service unless
                required for plot.
              </li>
              <li>
                4 stars. No knowledge of Japan's culture in order to enjoy the
                anime. No fan-service.
              </li>
              <li>
                5 stars. If it wasn’t a cartoon someone would think it was a HBO
                show.
              </li>
            </ul>
          </div>
        </div>

        <div className="ratings-containers ratings-light">
          <h3>Music</h3>
          <div>
            <div>
              <p>How weeb is the opening and general music.</p>
            </div>
            <ul>
              <li>
                1 star. Super weeb or just bad in general and warrants and
                instant close.
              </li>
              <li>2 stars. It's annoying but you can just skip it.</li>
              <li>3 stars. Nothing memorable but also not off putting.</li>
              <li>4 stars. You will watch the opening every time.</li>
              <li>5 stars. Can easily listen to the music in public.</li>
            </ul>
          </div>
        </div>

        <div className="ratings-containers ratings-light">
          <h3>Animation</h3>
          <div>
            <div>
              <p>
                Art style and character design is it too unique or have to much
                bad CGI that it becomes off putting.
              </p>
            </div>
            <ul>
              <li>
                1 star. Weird/strange aged looking characters, you know what I
                mean.
              </li>
              <li>
                2 stars. Bad animation, weird mix of CGI or just cheap animation
                all characters look the same just different hair.
              </li>
              <li>3 stars. Nothing memorable but also not off putting.</li>
              <li>4 stars. Good animation and character design.</li>
              <li>
                5 stars. High quality animation and very interesting character
                design.
              </li>
            </ul>
          </div>
        </div>

        <div className="ratings-containers ratings-light">
          <h3>Number of episodes (length)</h3>
          <div>
            <div>
              <p>Is it shounen(over 500) or 12 episodes.</p>
            </div>
            <ul>
              <li>1 star. 125+</li>
              <li>2 stars. 53-125</li>
              <li>3 stars. 27-52</li>
              <li>4 stars. 13-26</li>
              <li>5 stars. 12 or less</li>
            </ul>
          </div>
        </div>

        <div className="ratings-containers ratings-light">
          <h3>First 5 mins</h3>
          <div>
            <div>
              <p>
                How likely the person will keep watching after the opening? Is
                there anything too off-putting in the opening music or at the
                start that would cause an instant turn of.
              </p>
            </div>
            <ul>
              <li>
                1 star. Riddled with fan-service and very off putting and will
                be an instant close.
              </li>
              <li>
                2 stars. Not many people will carry on watching unless you
                heavily persuade them.
              </li>
              <li>3 stars. Nothing memorable but also not off putting.</li>
              <li>4 stars. Very likely you will watch the rest of the show.</li>
              <li>5 stars. Very strong opening that sets the plot</li>
            </ul>
          </div>
        </div>

        <div className="ratings-containers ratings-light">
          <h3>Availability</h3>
          <div>
            <div>
              <p>
                Is it on Netflix/Amazon prime or do you have to sail the seven
                seas, not that I would condone that.
              </p>
            </div>
            <ul>
              <li>
                1 star. You won't find it online unless you sale the seven seas.
              </li>
              <li>
                2 stars. Hard to find online or is only available in certain
                areas at certain times.
              </li>
              <li>
                3 stars. Available on streaming sites that you can give them
                your information for as they won't be paying for anime online
                streaming.
              </li>
              <li>
                4 stars. On major streaming sites that the user will already
                have, i.e Netflix/Amazon prime.
              </li>
              <li>5 stars. It's everywhere.</li>
            </ul>
          </div>
        </div>

        <div className="ratings-containers ratings-light">
          <h3>Filler</h3>
          <div>
            <div>
              <p>How many fillers and what is the quality of these fillers?</p>
            </div>
            <ul>
              <li>1 star. It's Naruto.</li>
              <li>2 stars. Lots of filler mixed with story.</li>
              <li>
                3 stars. Some filler but you know it's filler so you can safely
                skip it.
              </li>
              <li>
                4 stars. Some filler but it's very enjoyable. i.e baseball
                episode.
              </li>
              <li>5 stars. No filler.</li>
            </ul>
          </div>
        </div>

        <div className="ratings-containers ratings-light">
          <h3>Image Search</h3>
          <div>
            <div>
              <p>
                When you google the name, does it come up with fan art as the
                default image.
              </p>
            </div>
            <ul>
              <li>
                1 star. All characters are in there underwear or swimsuits.
              </li>
              <li>
                2 stars. Spoilers or fan-service images on the second row.
              </li>
              <li>3 stars. Nothing weird until you start scrolling.</li>
              <li>
                4 stars. Little to no spoilers and nothing weird showing at
                tall.
              </li>
              <li>
                5 stars. No spoilers and interesting fanart/backgrounds that you
                can use.
              </li>
            </ul>
          </div>
        </div>

        <div className="ratings-containers ratings-light">
          <h3>Dub Quality</h3>
          <div>
            <div>
              <p>How good is the dub? Is there even a dub?</p>
            </div>
            <ul>
              <li>
                1 star. Terrible dub, all characters sound the same with
                terrible mics.
              </li>
              <li>
                2 stars. There is only 3 voice actors for every character
                (prevalent in older anime).
              </li>
              <li>
                3 stars. Most characters are good but there is few that sound
                terrible.
              </li>
              <li>4 stars. Very strong Dub.</li>
              <li>5 stars. High quality Dub.</li>
            </ul>
          </div>
        </div>

        <div className="ratings-containers ratings-light">
          <h3>Re-watch-ability</h3>
          <div>
            <div>
              <p>How enjoyable is it to watch?</p>
            </div>
            <ul>
              <li>1 star. One and done</li>
              <li>2 stars. Has one of two good moments to watch on youtube</li>
              <li>3 stars. Have rewatched key episodes on youtube</li>
              <li>4 stars. Rewatched whole arcs again</li>
              <li>
                5 stars. Can/Have watched multiple times from start to finish
              </li>
            </ul>
          </div>
        </div>
        <div className="ratings-containers ratings-light">
          <h3>Enjoyability</h3>
          <div>
            <div>
              <p>How enjoyable, interesting, engaging the anime is.</p>
            </div>
            <ul>
              <li>1 star. Not a lot to like about the Anime</li>
              <li>2 stars. Has some good qualities but overall pretty poor</li>
              <li>3 stars. Decent quality Anime</li>
              <li>4 stars. Very fun to watch</li>
              <li>5 stars. Lights a reckless fire deep inside your heart</li>
            </ul>
          </div>
        </div>
        <div className="ratings-containers ratings-light">
          <h3>Binge Worthiness</h3>
          <div>
            <div>
              <p>
                How many episodes can you watch in a row before getting bored.
              </p>
            </div>
            <ul>
              <li>1 star. Very tough to get through</li>
              <li>2 stars. Need breaks to get through</li>
              <li>3 stars. Good to watch in spare time</li>
              <li>4 stars. Very long so good to watch in chunks</li>
              <li>5 stars. You start watching at 7pm and then its 2am.</li>
            </ul>
          </div>
        </div>

        <div className="ratings-containers ratings-light ">
          <h3>Fanservice</h3>
          <div>
            <div>
              <p>
                How much fanservice is in the anime and if that fanservice is
                too off putting to be recomedned
              </p>
            </div>
            <ul>
              <li>1 star. Basically game of thrones but with anime girls</li>
              <li>
                2 stars. The plot is basically how high its rating can be.
              </li>
              <li>
                3 stars. Has some weird moments but doesnt take away from the
                story.
              </li>
              <li>
                4 stars. You can watch it with your parents without feeling
                awkward
              </li>
              <li>5 stars. Just a normal show.</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Ratings
