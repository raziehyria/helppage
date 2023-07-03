import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './DivPageWrapper.module.css';
import { PseudoMaskGroupIcon } from './PseudoMaskGroupIcon';
import { SpanIconMaskGroupIcon } from './SpanIconMaskGroupIcon';
import { SpanIconMaskGroupIcon2 } from './SpanIconMaskGroupIcon2';
import { SpanIconMaskGroupIcon3 } from './SpanIconMaskGroupIcon3';

interface Props {
  className?: string;
}
/* @figmaId 2:4 */
export const DivPageWrapper: FC<Props> = memo(function DivPageWrapper(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.divMainWrapper}>
        <div className={classes.aside}>
          <div className={classes.navAppserverApps}>
            <div className={classes.headerSection}>
              <div className={classes.divSidebarFilter}>
                <div className={classes.search}>
                  <div className={classes.combobox}>
                    <div className={classes.divPlaceholder}></div>
                  </div>
                  <div className={classes.button}>
                    <div className={classes.spanIconMaskGroup}>
                      <SpanIconMaskGroupIcon className={classes.icon} />
                    </div>
                    <div className={classes.spanVisuallyHidden}>
                      <div className={classes.search2}>Search</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.orderedList}>
              <div className={classes.itemLinkStrongCompleteBeginner}>Complete beginners start here!</div>
              <div className={classes.itemDetails}>
                <div className={classes.summaryGettingStartedWithTheWe}>Getting started with the web</div>
                <div className={classes.orderedList2}></div>
              </div>
              <div className={classes.itemLinkStrongHTMLStructuringT}>HTML — Structuring the web</div>
            </div>
          </div>
        </div>
        <div className={classes.divTocContainerMaskGroup}>
          <div className={classes.divTocContainer}>
            <div className={classes.asideNavSection}>
              <div className={classes.headerHeading2InThisArticle}>In this article</div>
              <div className={classes.list}>
                <div className={classes.itemLink}>
                  <div className={classes.whereToStart}>Where to start</div>
                </div>
                <div className={classes.itemLink2}>
                  <div className={classes.topicsCovered}>Topics covered</div>
                </div>
                <div className={classes.itemLink3}>
                  <div className={classes.gettingOurCodeExamples}>Getting our code examples</div>
                </div>
                <div className={classes.itemLink4}>
                  <div className={classes.contactUs}>Contact us</div>
                </div>
                <div className={classes.itemLink5}>
                  <div className={classes.seeAlso}>See also</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.mainArticle}>
          <div className={classes.headerHeading1LearnWebDevelopm}>Overview</div>
          <div className={classes.divSectionContent}>
            <div className={classes.p}>
              <div className={classes.welcomeToTheMDNLearningAreaThi}>
                <div className={classes.textBlock}>
                  Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web
                </div>
                <div className={classes.textBlock2}>development with all that they need to start coding websites.</div>
              </div>
            </div>
            <div className={classes.p2}>
              <div className={classes.theAimOfThisAreaOfMDNIsNotToTa}>
                <div className={classes.textBlock3}>
                  The aim of this area of MDN is not to take you from &quot;beginner&quot; to &quot;expert&quot; but to
                  take you from
                </div>
                <div className={classes.textBlock4}>
                  &quot;beginner&quot; to &quot;comfortable.&quot; From there, you should be able to start making your
                  way, learning from
                </div>
                <div className={classes.textBlock5}>
                  <p className={classes.labelWrapper}>
                    <span className={classes.label}>the rest of MDN</span>
                    <span className={classes.label2}>
                      , and other intermediate to advanced resources that assume a lot of previous
                    </span>
                  </p>
                </div>
                <div className={classes.textBlock6}>knowledge.</div>
              </div>
            </div>
            <div className={classes.p3}>
              <div className={classes.ifYouAreACompleteBeginnerWebDe}>
                <div className={classes.textBlock7}>
                  If you are a complete beginner, web development can be challenging — we will hold your hand and
                </div>
                <div className={classes.textBlock8}>
                  provide enough detail for you to feel comfortable and learn the topics properly. You should feel at
                </div>
                <div className={classes.textBlock9}>
                  home whether you are a student learning web development (on your own or as part of a class), a
                </div>
                <div className={classes.textBlock10}>
                  teacher looking for class materials, a hobbyist, or someone who just wants to understand more about
                </div>
                <div className={classes.textBlock11}>how web technologies work.</div>
              </div>
            </div>
            <div className={classes.divSect1}>
              <div className={classes.heading4LookingToBecomeAFrontE}>Looking to become a front-end web developer?</div>
              <div className={classes.p4}>
                <div className={classes.weHavePutTogetherACourseThatIn}>
                  <div className={classes.textBlock12}>
                    We have put together a course that includes all the essential information you need to work
                  </div>
                  <div className={classes.textBlock13}>towards your goal.</div>
                </div>
              </div>
              <div className={classes.linkStrongGetStarted}>Get started</div>
            </div>
          </div>
          <div className={classes.section}>
            <div className={classes.heading2LinkWhereToStart}>A little More Details..</div>
            <div className={classes.divSectionContent2}>
              <div className={classes.descriptions}>
                <div className={classes.termCompleteBeginner}>Complete beginner</div>
                <div className={classes.details}>
                  <div className={classes.ifYouAreACompleteBeginnerToWeb}>
                    <div className={classes.textBlock14}>
                      If you are a complete beginner to web development, we&#39;d recommend that you start by working
                    </div>
                    <div className={classes.textBlock15}>
                      <p className={classes.labelWrapper2}>
                        <span className={classes.label3}>through our </span>
                        <span className={classes.label4}>Getting started with the web</span>
                        <span className={classes.label5}> module, which provides a practical introduction to web</span>
                      </p>
                    </div>
                    <div className={classes.textBlock16}>development.</div>
                  </div>
                </div>
                <div className={classes.termBeyondTheBasics}>Beyond the basics</div>
                <div className={classes.details2}>
                  <div className={classes.ifYouHaveABitOfKnowledgeAlread}>
                    <p className={classes.labelWrapper3}>
                      <span className={classes.label6}>
                        If you have a bit of knowledge already, the next step is to learn{' '}
                      </span>
                      <span className={classes.label7}>HTML</span>
                      <span className={classes.label8}> and </span>
                      <span className={classes.label9}>CSS</span>
                      <span className={classes.label10}> in detail: start with</span>
                    </p>
                    <div className={classes.textBlock17}>
                      <p className={classes.labelWrapper4}>
                        <span className={classes.label11}>our </span>
                        <span className={classes.label12}>Introduction to HTML</span>
                        <span className={classes.label13}> module and move on to our </span>
                        <span className={classes.label14}>CSS first steps</span>
                        <span className={classes.label15}> module.</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={classes.termMovingOntoScripting}>Moving onto scripting</div>
                <div className={classes.details3}>
                  <div className={classes.ifYouAreComfortableWithHTMLAnd}>
                    <div className={classes.textBlock18}>
                      If you are comfortable with HTML and CSS already, or you are mainly interested in coding,
                      you&#39;ll
                    </div>
                    <div className={classes.textBlock19}>
                      <p className={classes.labelWrapper5}>
                        <span className={classes.label16}>want to move on to </span>
                        <span className={classes.label17}>JavaScript</span>
                        <span className={classes.label18}> or server-side development. Begin with our </span>
                        <span className={classes.label19}>JavaScript first steps</span>
                      </p>
                    </div>
                    <div className={classes.textBlock20}>
                      <p className={classes.labelWrapper6}>
                        <span className={classes.label20}>and </span>
                        <span className={classes.label21}>Server-side first steps</span>
                        <span className={classes.label22}> modules.</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={classes.termFrameworksAndTooling}>Frameworks and tooling</div>
                <div className={classes.details4}>
                  <div className={classes.afterMasteringTheEssentialsOfV}>
                    After mastering the essentials of vanilla HTML, CSS, and JavaScript, you should learn about{' '}
                  </div>
                  <div className={classes.link}>
                    <div className={classes.client}>client-</div>
                    <div className={classes.sideWebDevelopmentTools}>side web development tools</div>
                  </div>
                  <div className={classes.AndThenConsiderDiggingIntoClie}>
                    <p className={classes.labelWrapper7}>
                      <span className={classes.label23}>, and then consider digging into </span>
                      <span className={classes.label24}>client-side JavaScript frameworks</span>
                      <span className={classes.label25}>,</span>
                    </p>
                  </div>
                  <div className={classes.andServerSideWebsiteProgrammin}>
                    <p className={classes.labelWrapper8}>
                      <span className={classes.label26}>and </span>
                      <span className={classes.label27}>server-side website programming</span>
                      <span className={classes.label28}>.</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className={classes.divSect2}>
                <div className={classes.p5}>
                  <div className={classes.strongNote}>
                    <p className={classes.labelWrapper9}>
                      <span className={classes.label29}>Note:</span>
                      <span className={classes.label30}> Our </span>
                      <span className={classes.label31}>glossary</span>
                      <span className={classes.label32}>
                        {' '}
                        provides terminology definitions. Besides, if you have a specific question
                      </span>
                    </p>
                    <div className={classes.textBlock21}>
                      <p className={classes.labelWrapper10}>
                        <span className={classes.label33}>about web development, our </span>
                        <span className={classes.label34}>Common questions</span>
                        <span className={classes.label35}> section may have something to help you.</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={classes.pseudoMaskGroup}>
                  <PseudoMaskGroupIcon className={classes.icon2} />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.section2}>
            <div className={classes.heading2LinkTopicsCovered}>Frequently Asked Questions</div>
            <div className={classes.divSectionContent3}>
              <div className={classes.theFollowingIsAListOfAllTheTop}>
                The following is a list of all the topics we cover in the MDN learning area.
              </div>
              <div className={classes.descriptions2}>
                <div className={classes.termLinkGettingStartedWithTheW}>Getting started with the web</div>
                <div className={classes.detailsProvidesAPracticalIntro}>
                  Provides a practical introduction to web development for complete beginners.
                </div>
                <div className={classes.termLinkHTMLStructuringTheWeb}>HTML — Structuring the web</div>
                <div className={classes.details5}>
                  <div className={classes.hTMLIsTheLanguageThatWeUseToSt}>
                    <div className={classes.textBlock22}>
                      HTML is the language that we use to structure the different parts of our content and define what
                    </div>
                    <div className={classes.textBlock23}>
                      their meaning or purpose is. This topic teaches HTML in detail.
                    </div>
                  </div>
                </div>
                <div className={classes.termLinkCSSStylingTheWeb}>CSS — Styling the web</div>
                <div className={classes.details6}>
                  <div className={classes.cSSIsTheLanguageThatWeUseToCon}>
                    <div className={classes.textBlock24}>
                      CSS is the language that we use to control our web content&#39;s style and layout, as well as
                      adding
                    </div>
                    <div className={classes.textBlock25}>
                      behavior like animation. This topic provides comprehensive coverage of CSS.
                    </div>
                  </div>
                </div>
                <div className={classes.termLinkJavaScriptDynamicClien}>JavaScript — Dynamic client-side scripting</div>
                <div className={classes.details7}>
                  <div className={classes.javaScriptIsTheScriptingLangua}>
                    <div className={classes.textBlock26}>
                      JavaScript is the scripting language used to add dynamic functionality to web pages. This topic
                    </div>
                    <div className={classes.textBlock27}>
                      teaches all the essentials needed to become comfortable with writing and understanding
                    </div>
                    <div className={classes.textBlock28}>JavaScript.</div>
                  </div>
                </div>
                <div className={classes.termLinkWebFormsWorkingWithUse}>Web forms — Working with user data</div>
                <div className={classes.details8}>
                  <div className={classes.webFormsAreAPotentToolForInter}>
                    <div className={classes.textBlock29}>
                      Web forms are a potent tool for interacting with users — most commonly, they are used for
                    </div>
                    <div className={classes.textBlock30}>
                      collecting data from users, or allowing them to control a user interface. In the articles listed
                      below,
                    </div>
                    <div className={classes.textBlock31}>
                      we&#39;ll cover all the essential aspects of structuring, styling, and interacting with web forms.
                    </div>
                  </div>
                </div>
                <div className={classes.termLinkAccessibilityMakeTheWe}>
                  Accessibility — make the web usable by everyone
                </div>
                <div className={classes.details9}>
                  <div className={classes.accessibilityIsThePracticeOfMa}>
                    <div className={classes.textBlock32}>
                      Accessibility is the practice of making web content available to as many people as possible
                    </div>
                    <div className={classes.textBlock33}>
                      regardless of disability, device, locale, or other differentiating factors. This topic gives you
                      all you
                    </div>
                    <div className={classes.textBlock34}>need to know.</div>
                  </div>
                </div>
                <div className={classes.termLinkWebPerformanceMakingWe}>
                  Web Performance — making websites fast and responsive
                </div>
                <div className={classes.details10}>
                  <div className={classes.webPerformanceIsTheArtOfMaking}>
                    <div className={classes.textBlock35}>
                      Web performance is the art of making sure web applications download fast and are responsive to
                    </div>
                    <div className={classes.textBlock36}>
                      user interaction, regardless of a user&#39;s bandwidth, screen size, network, or device
                      capabilities.
                    </div>
                  </div>
                </div>
                <div className={classes.termLinkMathML}>MathML</div>
                <div className={classes.details11}>
                  <div className={classes.mathMLIsTheLanguageThatWeCanUs}>
                    <div className={classes.textBlock37}>
                      MathML is the language that we can use to write mathematical formulas in web pages using
                    </div>
                    <div className={classes.textBlock38}>
                      fractions, scripts, radicals, matrices, integrals, series, etc. This topic covers MathML.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.divMainDocumentHeaderContainer}>
        <div className={classes.header}>
          <div className={classes.divContainer}>
            <div className={classes.divTopNavigationMain}>
              <div className={classes.navMainMenuList}>
                <div className={classes.itemLinkReferences}>References</div>
                <div className={classes.itemLinkGuides}>Guides</div>
                <div className={classes.itemLinkPlus}>Plus</div>
                <div className={classes.itemLinkBlog}>Back to Appserver</div>
              </div>
              <div className={classes.button2}>
                <div className={classes.spanIconMaskGroup2}>
                  <SpanIconMaskGroupIcon2 className={classes.icon3} />
                </div>
                <div className={classes.theme}>Theme</div>
              </div>
            </div>
            <div className={classes.image1}></div>
          </div>
        </div>
        <div className={classes.divArticleActionsContainer}>
          <div className={classes.divContainer2}>
            <div className={classes.navBreadcrumbOrderedListBreadc}>Guides</div>
            <div className={classes.listItemButton}>
              <div className={classes.spanIconMaskGroup3}>
                <SpanIconMaskGroupIcon3 className={classes.icon4} />
              </div>
              <div className={classes.englishUS}>English (US)</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.aboutUsHoltecInternationalIsAG}>
        <div className={classes.textBlock39}>About Us</div>
        <div className={classes.textBlock40}>
          <p></p>
        </div>
        <div className={classes.textBlock41}>
          <p className={classes.labelWrapper11}>
            <span className={classes.label36}>
              Holtec International is a global turnkey supplier of equipment and systems for the energy industry and
              beyond. As a fully integrated supplier, Holtec possesses in-house capabilities to design, engineer,
              analyze, license, fabricate and construct these technologies. With nearly 1.5 million square feet of
              manufacturing space and innovation that knows no limits, Holtec provides components of exceptional quality
              and with timely delivery.
            </span>
          </p>
        </div>
      </div>
      <div className={classes.line1}></div>
      <div className={classes.image2}></div>
    </div>
  );
});
