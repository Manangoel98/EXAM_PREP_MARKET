import { MarketingPageShell } from "@/components/layout/MarketingPageShell";
import { RelatedContent, RELATED_CONTENT_GROUPS } from "@/components/landing/RelatedContent";
import { GuideH2, GuideH3, GuideTable, InLink, OfficialLink } from "@/components/guides/GuideBits";
import { MKT } from "@/lib/marketing-ui";
import { COLLEGE_BOARD } from "@/lib/sat-guides";
import type { Metadata } from "next";
import { marketingAbsoluteUrl } from "@/lib/config";
import { BreadcrumbStructuredData, ArticleStructuredData, FAQStructuredData } from "@/lib/schema";
import { Calendar } from "lucide-react";

const canonical = marketingAbsoluteUrl("/sat-test-dates");
const og = marketingAbsoluteUrl("/og-image.svg");

export const metadata: Metadata = {
  title: "SAT Test Dates 2026–27: Deadlines and Score Release | NomoExam",
  description:
    "SAT weekend dates from October 2026 through June 2027, with registration deadlines and score-release days. See which date still returns scores before Early Action.",
  alternates: { canonical },
  keywords: [
    "SAT test dates",
    "SAT dates 2026",
    "SAT dates 2027",
    "SAT registration deadline",
    "when do SAT scores come out",
    "SAT score release dates",
  ],
  openGraph: {
    title: "SAT Test Dates 2026–27: Registration, Score Release, and When to Sit",
    description: "The College Board weekend calendar, and which date still helps an Early Action application.",
    url: canonical,
    siteName: "NomoExam",
    type: "article",
    images: [{ url: og, width: 1200, height: 630, alt: "SAT test dates 2026 and 2027" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAT Test Dates 2026–27",
    description: "Registration deadlines and the day each score comes back.",
    images: [og],
  },
};

const faqs = [
  {
    question: "When is the next SAT?",
    answer:
      "As of October 1, 2026, the next weekend SAT is October 3, and registration for it has already closed. The next date you can still register for is November 7, 2026, with a regular deadline of October 23. After that: December 5, 2026, then March 6, May 1, and June 5 of 2027.",
  },
  {
    question: "When do SAT scores come out?",
    answer:
      "College Board publishes a student release date for each weekend administration. October 3, 2026 releases October 16. November 7 releases November 20. December 5 releases December 18. March 6, 2027 releases March 19. May 1 releases May 14. June 5 releases June 21. The August 22 and September 12 tests already released on September 4 and September 25.",
  },
  {
    question: "What is the SAT registration deadline?",
    answer:
      "Each date has its own deadline, and it closes at 11:59 p.m. Eastern Time. The November 7, 2026 test registers by October 23. The December 5 test registers by November 20. A few days later there is a deadline for late registration, changes, and regular cancellation. After that deadline, the date is closed.",
  },
  {
    question: "Can I take the October SAT and still apply Early Action?",
    answer:
      "Scores from the October 3, 2026 SAT come out October 16, which is before a November 1 deadline. Registration for that October test is already closed. If you are not registered, the November 7 test releases scores on November 20, which is after most November 1 Early Action deadlines. Confirm the college’s own rule for when a score must arrive.",
  },
  {
    question: "Is the November SAT too late for Early Action?",
    answer:
      "For most November 1 Early Action plans, yes. The November 7, 2026 SAT releases scores on November 20, after that deadline. November still works for many Regular Decision plans, and for Early Action schools whose deadline is later.",
  },
  {
    question: "How does late registration work?",
    answer:
      "The deadline a few days after regular registration covers late registration, changes, and regular cancellation. College Board’s calendar flyer lists a $38 late fee. Confirm the amount when you register, because fees can change. Once that deadline passes, you pick a later test date.",
  },
  {
    question: "Are these SAT dates the same outside the United States?",
    answer:
      "Yes. College Board says these weekend dates and deadlines apply to all students, in the U.S. and internationally. A center near you can still fill up. The dates themselves are the same list.",
  },
  {
    question: "How many times should I take the SAT?",
    answer:
      "Most students are finished after two sittings, sometimes three if the second score moved and a college will superscore. Another date only helps if you have time to fix the misses from the last one. Registering again without a new plan mostly buys the same score.",
  },
];

export default function SatTestDatesPage() {
  return (
    <MarketingPageShell>
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: marketingAbsoluteUrl("/") },
          { name: "SAT Guides", url: marketingAbsoluteUrl("/guides") },
          { name: "SAT Test Dates", url: canonical },
        ]}
      />
      <ArticleStructuredData
        title="SAT Test Dates 2026–27: Registration, Score Release, and When to Sit"
        description="U.S. weekend SAT dates for 2026–27, registration deadlines, and which sitting returns scores before Early Action."
        datePublished="2026-10-01"
        dateModified="2026-10-01"
      />
      <FAQStructuredData faqs={faqs} />
      <main>
        <article className={`${MKT.pageSection} pb-20 pt-28 md:pb-32 md:pt-36`}>
          <div className={`${MKT.container} mx-auto max-w-4xl`}>
            <div className="mb-8">
              <div className={`${MKT.badgeLight} mb-4`}>
                <Calendar className="h-4 w-4" />
                <span>SAT dates</span>
              </div>
              <h1 className={`${MKT.h1OnLight} mb-4`}>SAT Test Dates 2026–27: Registration, Score Release, and When to Sit</h1>
              <p className="text-base font-medium text-neutral-600 md:text-lg">Last updated: October 1, 2026</p>
            </div>
            <div className="space-y-6 text-base font-medium leading-relaxed text-neutral-800 md:text-lg">
              <p>
                As of October 1, 2026, College Board’s open weekend dates run from October 3, 2026 through June 5, 2027. Registration for October 3 is already closed. The next deadline you can still meet is October 23, for the November 7 test. Deadlines close at 11:59 p.m. Eastern Time. The same list applies to students testing in the U.S. and internationally. The score-release day, not the Saturday you sit, is the date a college can use.
              </p>
              <p>
                This page is that calendar, plus how to choose a sitting. It is not a second copy of College Board’s site. If a deadline here and the official table ever disagree, the official table wins. That table is College Board’s{" "}
                <OfficialLink href={COLLEGE_BOARD.dates}>SAT dates and deadlines</OfficialLink> page. What the test looks like on the day is the{" "}
                <InLink href="/digital-sat-format">digital SAT format</InLink>.
              </p>

              <GuideH2>Weekend dates still on the registration table</GuideH2>
              <p>
                College Board’s current table starts at October 3. That test is still happening, and its scores still come out October 16, but you can no longer register for it. The later column is not only a late-registration day. It is also the deadline for changes and for a regular cancellation. Students who need to borrow a device have to register and request it at least 30 days before test day, which is earlier than these deadlines.
              </p>
              <GuideTable
                headers={["Test date", "Register by", "Changes, cancellation, and late registration", "Scores to students"]}
                rows={[
                  ["October 3, 2026", "Closed (was September 18)", "Closed (was September 22)", "October 16, 2026"],
                  ["November 7, 2026", "October 23, 2026", "October 27, 2026", "November 20, 2026"],
                  ["December 5, 2026", "November 20, 2026", "November 24, 2026", "December 18, 2026"],
                  ["March 6, 2027", "February 19, 2027", "February 23, 2027", "March 19, 2027"],
                  ["May 1, 2027", "April 16, 2027", "April 20, 2027", "May 14, 2027"],
                  ["June 5, 2027", "May 21, 2027", "May 25, 2027", "June 21, 2027"],
                ]}
              />
              <p>
                August 22 and September 12 already happened. Student scores from those tests were released September 4 and September 25. They are still on College Board’s{" "}
                <OfficialLink href={COLLEGE_BOARD.scoreRelease}>score release</OfficialLink> list, and they are no longer on the registration table. Fall releases in this cycle landed 13 days after the test. Spring is a little longer: March 19, May 14, and June 21. Plan from the release column, not from “about two weeks,” when an application deadline is close.
              </p>

              <GuideH2>How a deadline actually works</GuideH2>
              <p>
                The regular deadline is the last moment to register at the standard fee. It is 11:59 p.m. Eastern, including for students who live in other U.S. time zones. A student in California does not get three extra hours. If the clock says 9:30 p.m. Pacific on deadline night, Eastern has already turned to the next day and the window is closed.
              </p>
              <p>
                Late registration shares a deadline with changes and regular cancellation. College Board’s calendar flyer lists a $38 late fee. Check the amount on the registration screen before you pay, because a flyer can lag a fee change. Late registration is for a missed deadline, not a strategy. Seats at a popular center can already be gone by the regular deadline. The late window does not create a seat that was full on Friday.
              </p>
              <p>
                After the late deadline, that date is closed. You do not email the test center and get added. You register for a later date on the list, if one still helps your applications. Changing a center or a date after you have registered can also carry a fee. Those fees live on the same College Board page. Read them there before you move a registration twice.
              </p>
              <GuideH3>What you need in order to register</GuideH3>
              <p>
                A College Board account, a photo that meets their rules, and the school you attend. Fee waivers exist for students who qualify; eligibility is College Board’s, usually confirmed by a counselor, and it is not something a prep site can grant. If you need to borrow a device for Bluebook, request it at least 30 days before test day. That is earlier than the regular registration deadline. Install the app and run a practice test when you register, not the night before.
              </p>
              <p>
                The test itself is digital. Two hours and 14 minutes, 98 questions, scores still 400 to 1600. None of that changes with the date you pick. August and June are the same exam structure. The{" "}
                <InLink href="/digital-sat-format">format guide</InLink> is the walkthrough if you have not sat a module yet.
              </p>

              <GuideH2>Which date to sit</GuideH2>
              <p>
                Pick the date by the score-release day and by how much preparation is left, not by which Saturday looks convenient. A score that arrives after the college’s deadline does not count for that deadline, even if you felt ready.
              </p>
              <GuideH3>Junior year, spring</GuideH3>
              <p>
                March 6, May 1, and June 5 of 2027 are the spring dates for students who will be juniors in the 2026–27 school year, and for younger students testing early. A spring score does two useful things. It gives you a real number, on the real scale, before senior fall. And it leaves August, September, and October of senior year as a second chance if the first score is short of the colleges on your list.
              </p>
              <p>
                May is the default for a lot of juniors because the school year is still in session and the score is back in mid-May, with June available if May goes badly. March is early. It is the right date if you have already been preparing through the winter and you want the score before AP exams take the month of May. June is the recovery date, and also the date students choose when spring sports or a heavy course load made March and May unrealistic. June scores come back June 21, which is still months before Early Action.
              </p>
              <p>
                Do not sit March just to “get it over with” if you have not finished a full timed test. A low first score is not fatal, and many colleges superscore, but only if they say they do. A first score with no practice behind it mostly tells you that you were unprepared. You already knew that. The{" "}
                <InLink href="/sat-study-plan">SAT study plan</InLink> is the thing to finish before you spend a Saturday.
              </p>
              <GuideH3>Senior fall, and Early Action</GuideH3>
              <p>
                November 1 is the Early Action or Early Decision deadline at a long list of colleges. The weekend date whose scores still clear it, in this cycle, is October 3, 2026. Those scores come out October 16. Registration for October 3 is already closed, so this only helps if you are already signed up. It is not enough time to take the test again if October goes badly.
              </p>
              <p>
                September 12 and August 22 already released scores, on September 25 and September 4. If you sat one of those, the score is in hand. If you did not, they are no longer choices. For a later cycle, the comfortable senior-fall dates are the August and September sittings, and you register in the summer, not in October.
              </p>
              <p>
                November 7 releases November 20. That is after November 1. It does not help a November 1 application. It does help Regular Decision, and it helps any Early Action school whose deadline is later than November 20 and whose score-receipt rule you have actually read. December 5 releases December 18. That can still reach a January 1 Regular Decision deadline, with little room if a college wants scores in hand before the application date. It cannot help November Early Action.
              </p>
              <GuideTable
                headers={["If the college deadline is", "Last U.S. weekend date that releases in time", "Scores in hand"]}
                rows={[
                  ["November 1 Early Action / Early Decision", "October 3, 2026", "October 16, 2026"],
                  ["A mid-November deadline, after the 20th", "November 7, 2026", "November 20, 2026"],
                  ["January 1 Regular Decision", "December 5, 2026", "December 18, 2026"],
                  ["A spring deadline, after March 19", "March 6, 2027", "March 19, 2027"],
                ]}
              />
              <p>
                Read the college’s testing page, not a forum summary of it. Some schools want the score sent by the deadline. Some will look at a later release if the application was on time. A few still require all scores. The difference is theirs. Your job is to have the release date written next to each college before you register, not after.
              </p>

              <GuideH2>A simple way to choose</GuideH2>
              <p>
                Write the earliest application deadline you care about. Subtract the score-release date of the SAT you want. If the release is after the deadline, that SAT is for a later round, or for a different school. Then ask whether you can finish two or three full practice tests before the registration deadline, not before the test. If the answer is no, take the next date and use the extra weeks. A later score that is higher is more useful than an earlier score you guessed your way to.
              </p>
              <p>
                What “higher” means is the college list, not a national round number. A 1200 is a strong score at some schools and a weak one at others. Set that target with{" "}
                <InLink href="/what-is-a-good-sat-score">what is a good SAT score</InLink>, using the middle 50 percent of each college, and use the{" "}
                <InLink href="/average-sat-scores-percentiles">percentile chart</InLink> if you want the national picture. Then the date is just the Saturday that gets that score into the file.
              </p>
              <p>
                Two sittings is the usual plan. Spring of junior year, then one senior-fall date if the spring score is below the 75th percentile of your most selective college. A third date is reasonable when the second score moved in the right direction and one section is still short, especially if the college superscores. A fourth date, taken without a change in how you practice, is rarely the thing that changes an admission decision.
              </p>

              <GuideH2>School-day SAT, and students testing outside the U.S.</GuideH2>
              <p>
                Many high schools give the SAT on a school day. Students do not register themselves on the weekend calendar above. The school or district does. For 2026–27, College Board’s fall in-school window is October 1–30, 2026, and the spring window is March 1–April 30, 2027. When the student sees a score depends on when the school submits answers. A school-day score that returns after November 1 has the same Early Action problem as the November weekend date. Ask the counselor for the day and the expected release, and use College Board’s{" "}
                <OfficialLink href={COLLEGE_BOARD.scoreRelease}>score release dates</OfficialLink> if you want the window’s published student dates.
              </p>
              <p>
                Weekend dates are not a U.S.-only list. College Board says the dates and deadlines in the table apply to all students, in the United States and internationally. What can differ is whether a seat is left at the center you want. Open the{" "}
                <OfficialLink href={COLLEGE_BOARD.dates}>dates and deadlines</OfficialLink> page and register for a center you can actually reach.
              </p>

              <GuideH2>Dates posted for 2027–28</GuideH2>
              <p>
                College Board has already posted the next year’s weekend dates, without registration deadlines. Fall 2027: August 28, September 18, October 9, November 6, and December 4. College Board has marked October 9, 2027 as updated, so treat that Saturday as the one most likely to move again. Spring 2028: March 4, May 6, and June 3. A posted Saturday is not an open registration. Do not pay anything, and do not build an Early Action plan, until the official page shows a deadline next to the date.
              </p>

              <GuideH2>What to do after you register</GuideH2>
              <p>
                Registration is not preparation. The weeks between the deadline and the Saturday are the only weeks that change the score. The work that moves a score is timed modules, reviewed the same day, on the four Math domains and the four Reading and Writing domains. Those are written up in the{" "}
                <InLink href="/sat-math">SAT Math</InLink> guide and the{" "}
                <InLink href="/sat-reading-and-writing">Reading and Writing</InLink> guide. A full-length test every two or three weeks is the check. The last full test should be about two weeks out, so you still have time to fix the pattern it shows. The night before is for sleep and for confirming the center, the device, and the admission ticket.
              </p>
              <p>
                If the last score is already in hand and you are deciding whether another date is worth it, read the misses before you pay. A Math score that stalled on student-produced responses will not move because October is a “better curve.” Curves are not the plan. The{" "}
                <InLink href="/how-to-improve-sat-score-200-points">200-point guide</InLink> is the loop between two dates: name the miss, drill that miss, retest. The{" "}
                <InLink href="/how-to-prepare-for-sat">preparation guide</InLink> is the longer version if you are starting from the beginning rather than from a score report.
              </p>
              <p>
                Send scores through College Board, to the colleges, on the colleges’ timeline. The SAT date does not send itself to an application. Score-send rules, including how many colleges are included with registration, are on College Board’s{" "}
                <OfficialLink href={COLLEGE_BOARD.scores}>scores</OfficialLink> page. Read that page the week you register so a send deadline does not surprise you in October.
              </p>

              <GuideH2>Dates questions</GuideH2>
              <div className="not-prose space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.question} className="rounded-xl border border-neutral-200 bg-white p-5">
                    <h3 className="font-barlow mb-2 text-lg font-bold text-neutral-900">{faq.question}</h3>
                    <p className="text-base font-medium leading-relaxed text-neutral-700">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <GuideH2>Sources</GuideH2>
              <p>
                Deadlines and the open weekend list are from College Board’s{" "}
                <OfficialLink href={COLLEGE_BOARD.dates}>SAT dates and deadlines</OfficialLink> page, checked October 1, 2026. Student score-release days are from College Board’s{" "}
                <OfficialLink href={COLLEGE_BOARD.scoreRelease}>score release dates</OfficialLink>. The $38 late fee is the amount on College Board’s calendar flyer; confirm it at registration. The score scale is explained on the{" "}
                <OfficialLink href={COLLEGE_BOARD.scores}>scores</OfficialLink> page, and the test you are registering for is described on the{" "}
                <OfficialLink href={COLLEGE_BOARD.digital}>digital SAT</OfficialLink> page. This article does not link to other prep companies.
              </p>
              <p>
                The rest of the SAT guides, including Math, Reading and Writing, and the format, are listed on{" "}
                <InLink href="/guides">SAT study guides</InLink>. Timed practice is on{" "}
                <InLink href="/pricing">pricing</InLink>.
              </p>
              <RelatedContent links={RELATED_CONTENT_GROUPS.satPrep.filter((link) => link.href !== "/sat-test-dates")} />
            </div>
          </div>
        </article>
      </main>
    </MarketingPageShell>
  );
}
