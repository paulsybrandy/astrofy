/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, l as renderSlot, j as renderComponent } from '../astro_bJqecnWw.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$BaseLayout } from './404_MUJVpBS9.mjs';

const $$Astro$1 = createAstro("https://astrofy-template.netlify.app");
const $$TimeLine = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TimeLine;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex"> <div class="education__time"> <span class="w-4 h-4 bg-primary block rounded-full mt-1"></span> <span class="education__line bg-primary block h-full w-[2px] translate-x-[7px]"></span> </div> <div class="experience__data bd-grid px-5"> <h3 class="font-semibold mb-1">${title}</h3> <span class="font-light text-sm">${subtitle}</span> <p class="my-2 text-justify"> ${renderSlot($$result, $$slots["default"])} </p> </div> </div>`;
}, "F:/Documents/GitHub/astrofy/src/components/cv/TimeLine.astro", void 0);

const $$Astro = createAstro("https://astrofy-template.netlify.app");
const $$Cv = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cv;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Resume", "sideBarActiveItemID": "cv" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-5"> <div class="text-3xl w-full font-bold">Profile</div> </div> <div class="mb-10 text-justify">
Experienced manager ready to immediately enter a leadership position, although very willing to work toward that goal from an entry 
    level position.  Familiar with all general business management knowledge and possesses a keen attention to detail. Prioritizing 
    communication with team members to identify issues and come to resolutions, which goes together with the team building skills that 
    have been hardened over a span of several years. Extensive technical knowledge is another skill set that has become an expertise as 
    well as a passionate hobby. I also have extensive experience in graphic design, web development, and have recently started learning 
    how to code.
</div> <div class="mb-5"> <div class="text-3xl w-full font-bold">Education</div> </div> <div class="time-line-container grid gap-4 mb-10"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Masters in Business Administration; Specialization in Management", "subtitle": "2011 to 2013 at American InterContinental University, Schaumburg, IL, United States" })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Bachelors in Business Administration; Concentration in Management", "subtitle": "2009 to 2011 at American InterContinental University, Schaumburg, IL, United States" })} </div> <div class="mb-5"> <div class="text-3xl w-full font-bold">Experience</div> </div> <div class="time-line-container mb-10"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Palletizer Technician at Canpack US", "subtitle": "From July 2022 to Present at Canpack US, Olyphant, PA, United States" }, { "default": ($$result3) => renderTemplate`
Set up and operate a palletizer machine to maintain good quality of cans produced (within the specified quality and technological parameters). Ensure smooth operations of production machinery and maintain them in an appropriate technical condition.
<br> <u>Essential Functions/Key Deliverables:</u> <br>
1. Operate palletizing equipment daily to sort, transfer and stack finished products on pallets for shipment.
<br>
2. Observe and keep records of any quality issues.
<br>
3. Supplies loading equipment with empty pallets.
<br>
4. Report any issues with the technical condition of the machine to supervisor. Assist with the control of production and quality specification.
<br>
5. Have responsibility for any assigned equipment.
<br>
6. Co-operate with supervisor and other workers as part of a team and production line. Assist with the implementation and maintenance of systems, including performing internal audits as required.
<br>
7. Perform any other duty reasonable corresponding with the role.
` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Process Executive at Cognizant", "subtitle": "From September 2020 to May 2021 at Cognizant, Jessup, PA, United States" }, { "default": ($$result3) => renderTemplate`
Responsible for answering inbound phone calls from Health Insurance members, as well as client representatives. Needed to be able to answer questions in regard to eligibility, benefits inquiries, and claim inquiries.
` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Lead Shift Manager at McDonald's", "subtitle": "From February 2016 to November 2016 at McDonalds, Milford, PA, United States" }, { "default": ($$result3) => renderTemplate`
Ensure that all operations, from greeting customers, to the quality and speed of service is kept up with according to company specifications. Responsible for overseeing that adequate maintenance of equipment is carried out, kept track of inventory, and monitored the quality of products. Completed the weekly shift schedule for the restaurant and was ServSafe Food Safety Manager certified.
` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Claims Examiner at Anthem, Inc.", "subtitle": "From October 2013 to September 2015 at Anthem, Inc., Middletown, NY, United States" }, { "default": ($$result3) => renderTemplate`
Collect documentation necessary to substantiate claims, noting problems and discrepancies as well as contacting clients and other third parties for additional information, negotiating when necessary..
` })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "Team Leader at RGIS, LLC.", "subtitle": "From October 2012 to May 2014 at RGIS, LLC., Moosic, PA, United States" }, { "default": ($$result3) => renderTemplate`
Led small-to-medium inventories which includes setting up equipment, setting attributes for the event as well as supervising and guiding the staff within the inventory. Transmitting the inventory data to headquarters quickly following the event, for the express intent of reconciliation of the inventory. Went to Healthcare events to inventory Pharmaceutical Representatives' stock.
` })} </div> <div class="mb-5"> <div class="text-3xl w-full font-bold">Certifications</div> </div> <ul class="list-disc mx-6 mb-10 grid gap-2"> <li> <a href="https://cpr.heart.org/en/cpr-courses-and-kits/heartsaver/heartsaver-first-aid-training" target="_blank"> Heartsaver First Responder Certification from American Heart Association</a><br> <a href="https://paulsybrandy.com/images/AHA-cert.png" target="_blank">⇨ View Certificate ⇦</a> </li> </ul> <div class="mb-5"> <div class="text-3xl w-full font-bold">Skills</div> </div> <ul class="list-disc md:columns-5 columns-2 mx-6"> <li>Safety</li> <li>Customer Service</li> <li>Management</li> <li>Food Safety</li> <li>Microsoft Office</li> <li>Computer Technical Support</li> <li>Teamwork</li> <li>Team Building</li> <li>Communication</li> </ul> ` })}`;
}, "F:/Documents/GitHub/astrofy/src/pages/cv.astro", void 0);
const $$file = "F:/Documents/GitHub/astrofy/src/pages/cv.astro";
const $$url = "/cv";

export { $$Cv as default, $$file as file, $$url as url };
