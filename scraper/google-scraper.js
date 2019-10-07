const puppeteer = require('puppeteer');
const fs = require('fs');

let scraped_data = {};
let questions = [ 
  "What is an approved provider? family day care",
  "What approvals or licences are required? family day care",
  "What is National Law approval? family day care",
  "What is Family Assistance Law approval? family day care",
  "Who can apply for provider approval family day care",
  "Can trusts be approved? family day care",
  "Why do providers need an Australian Business Number? family day care",
  "Are there financial requirements for providers? family day care",
  "What types of child care service can be approved? family day care",
  "What is Centre Based Day Care? family day care",
  "What is Outside School Hours Care? family day care",
  "What is Family Day Care? family day care",
  "What is In Home Care? family day care",
  "What types of services cannot be approved? family day care",
  "What is the minimum number of weeks each year an approved service must operate? family day care",
  "What is the Child Care Subsidy System? family day care",
  "What is the Provider Entry Point? family day care",
  "What is PRODA? family day care",
  "What software and systems are required? family day care",
  "Who needs to register with PRODA? family day care",
  "How do applicants register with PRODA? family day care",
  "How are activation codes obtained? family day care",
  "What information needs to be submitted in an application? family day care",
  "What happens after an application has been made to become an approved provider? family day care",
  "Who are specified personnel? family day care",
  "Who needs to be a fit and proper person? family day care",
  "What matters should be considered when becoming an approved provider? family day care",
  "What background checks are required to become an approved provider? family day care",
  "How is a service added to a provider approval? family day care",
  "Can an existing service be purchased by a new provider? family day care",
  "How is a service removed from a provider's approval? family day care",
  "What is an enrolment? family day care",
  "What happens when the individual makes a claim for Child Care Subsidy with Centrelink? family day care",
  "Who is the individual responsible for the child's care? family day care",
  "What happens when the individual is the child's grandparent? family day care",
  "How do the provider and individual agree an arrangement for care of a child? family day care",
  "What types of arrangement are there? family day care",
  "Do individuals need to sign a Complying Written Arrangement? family day care",
  "Do fees need to be included in a Complying Written Arrangement? family day care",
  "Can an arrangement cover both routine and casual care? family day care",
  "What happens after the provider submits an enrolment notice? family day care",
  "When is an enrolment notice required? family day care",
  "What happens after the individual confirms the enrolment? family day care",
  "What happens if there is a disagreement over an enrolment? family day care",
  "What arrangements and enrolments are required when there is shared care? family day care",
  "What arrangement and enrolment is required if a third party pays fees? family day care",
  "When should an arrangement and enrolment be updated? family day care",
  "Do parents need to confirm an updated enrolment? family day care",
  "When does an enrolment end? family day care",
  "How is an arrangement and enrolment re-established once ended? family day care",
  "How many child care places can be offered? family day care",
  "Do vacancies need to be prioritised? family day care",
  "What is a session of care? family day care",
  "Can care be provided by an educator to their own children or siblings? family day care",
  "Can care be provided by a Family Day Care service to a Family Day Care educator's child? family day care",
  "Can care be provided by relatives of the children? family day care",
  "Why is accurate reporting important? family day care",
  "How is a session report submitted? family day care",
  "When are session reports submitted? family day care",
  "What information is in a session report? family day care",
  "How is a session report varied? family day care",
  "How do you report absences? family day care",
  "Can an absence be reported for care when a service is closed? family day care",
  "Can absences be reported before the child first attends care? family day care",
  "How should long absences be managed? family day care",
  "How is care outside routine session times reported? family day care",
  "Why do attendance times need to be reported? family day care",
  "When are business continuity payments made? family day care",
  "How is Child Care Subsidy determined? family day care",
  "How is Additional Child Care Subsidy determined? family day care",
  "How does withholding affect payments? family day care",
  "When will payments be made? family day care",
  "How are payments received? family day care",
  "What notification is given of the payment? family day care",
  "Are any payments made to families? family day care",
  "Can discounts be offered? family day care",
  "Can third parties pay the Child Care Subsidy gap fee? family day care",
  "Can third parties pay Additional Child Care Subsidy gap fees? family day care",
  "What is a Statement of Entitlement? family day care",
  "What is required in a Statement of Entitlement? family day care",
  "What visibility of payments do parents have? family day care",
  "Can a Statement of Entitlement and invoice be combined? family day care",
  "What happens if the subsidy cannot be passed on to the family? family day care",
  "What is reconciliation? family day care",
  "How is the provider affected if a family does not complete its reconciliation? family day care",
  "How can a provider incur a debt? family day care",
  "How will a provider know if they have incurred a debt? family day care",
  "How does a provider repay a debt? family day care",
  "What will happen if a provider does not repay a debt? family day care",
  "Can a debt decision be reviewed? family day care",
  "What records need to be kept? family day care",
  "Do staff details need to be updated? family day care",
  "When is a register of care required? family day care",
  "What other records do Family Day Care providers need to keep? family day care",
  "How long do records need to be kept? family day care",
  "What notice needs to be given? family day care",
  "How is notice given? family day care",
  "What is the Child Care Subsidy? family day care",
  "What are the age requirements for Child Care Subsidy? family day care",
  "What are the Immunisation requirements for Child Care Subsidy? family day care",
  "Residency requirements for parents family day care",
  "How is the Child Care Subsidy determined? family day care",
  "What is family income? family day care",
  "What is the activity test? family day care",
  "What is the activity test for preschool program attendance? family day care",
  "What are the hourly rate caps? family day care",
  "What is the annual subsidy cap? family day care",
  "How does withholding of payments work? family day care",
  "What are exceptional family circumstances? family day care",
  "What happens in a change of family circumstances? family day care",
  "Are grandparent carers eligible for the Child Care Subsidy? family day care",
  "What is the additional Child Care Subsidy? family day care",
  "What is the provider’s role in Additional Child Care Subsidy? family day care",
  "What are the additional Child Care Subsidy levels and rates? family day care",
  "What happens with individuals who may be eligible for more than one type of Additional Child Care Subsidy? family day care",
  "What is additional Child Care Subsidy (child wellbeing)? family day care",
  "What is additional Child Care Subsidy (grandparent)? family day care",
  "What is additional Child Care Subsidy (temporary financial hardship)? family day care",
  "What is additional Child Care Subsidy (transition to work)? family day care",
  "Is In Home Care exempt? family day care",
  "What are other exempt services? family day care",
  "What are the requirements for other exempt services? family day care",
  "What are the commitment to high-quality child care requirements for exempt services? family day care",
  "What are the serious incidents requirements for exempt services? family day care",
  "What are the work health and safety requirements for exempt services? family day care",
  "What are the insurance requirements for exempt services? family day care",
  "What are the Quality Improvement Plan requirements for exempt services? family day care",
  "When can a provider be approved? family day care",
  "What are the provider eligibility rules? family day care",
  "What are the service eligibility rules? family day care",
  "What are the conditions for continued approval? family day care",
  "What are the consequences for breach of conditions for continued approval? family day care",
  "What are the offence and civil penalty provisions? family day care",
  "What are other sanctions? family day care",
  "What is the Inclusion Support Program? family day care",
  "What are Inclusion Agencies? family day care",
  "What is the Specialist Equipment Library? family day care",
  "What is the Inclusion Development Fund? family day care",
  "What is the Community Child Care Fund? family day care",
  "What is the Community Child Care Fund—open competitive program? family day care",
  "What is the Community Child Care Fund—restricted non-competitive program? family day care",
  "What is the Connected Beginnings program? family day care",
  "How do I contact the Child Care Subsidy Helpdesk? family day care",
  "What if I have a complaint or concern? family day care"
]


function wait (ms) {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
}

(async () => {
  const browser = await puppeteer.launch({
    headless: false 
  });
  const page = await browser.newPage();
  await page.goto('https://google.com');

  for (let i = 50; i < questions.length; i++) {
    if (scraped_data.hasOwnProperty(questions[i])) {
      console.log("Already scraped this question");
    } else {

    //------------------ Type Question in searchbar --------------------
      console.log("new search: ", questions[i]);
      const input_selector = 'input[type=text]';
      await page.waitForSelector(input_selector);
      await page.click(input_selector);
      await page.waitFor(1*1000);
      await page.keyboard.press('End');
      const inputValue = await page.$eval('input[type=text]', el => el.value);
      for (let k = 0; k < inputValue.length; k++) {
        await page.keyboard.press('Backspace');
      }
      await page.keyboard.type(questions[i]);
      await page.keyboard.press('Enter');
    //------------------ end Type Question ------------------------------
      //let trusted_domains = [".org.au", ".gov.au", ".com.au"]; 
      let trusted_domains = [".gov.au"]; 
    //------------------ Get immediate answer ------------------------------
      await page.waitForNavigation();
      let questionExists = true; 
      let questionOffset = 1;
      try {
        await page.waitForSelector('div[role=heading]>span>span' , {
          timeout: 2000
        })
      } catch (err) {
        console.error(err);
        questionExists = false; 
        questionOffset = 0;
      }
      if (questionExists) {
        let answer = await page.evaluate((sel) => {
           return document.querySelector(sel).textContent
        }, 'div[role=heading]>span>span');

        let source = await page.evaluate((sel) => {
           return document.querySelector(sel).href
        }, '.xpdopen a');

        for (domain of trusted_domains){
          if (source.indexOf(domain) != -1)
            scraped_data[questions[i]] = {
              "answer": answer,
              "source": source
            }
        }
      }
    //------------------ end Get immediate answer ------------------------------
      page.evaluate(_ => {
        window.scrollBy(0, window.innerHeight+700);
      });
      await page.waitFor(1*1000);
      let alsoAskedList = await page.$$('.related-question-pair ');
      let also_asked_count = alsoAskedList.length;
      console.log(also_asked_count);
      let j = also_asked_count - 1;
      let round_count = 0;

      while (j >= 0){
        //if (scraped_data.hasOwnProperty(also_asked_text[j]) || also_asked_text[j] == "" || also_asked_text[j] == null) {
        if (false) {
        
        } else {
          await page.waitFor(0.6*1000);

          if (alsoAskedList[j]) {

            await alsoAskedList[j].click().catch((e) => {
               console.error(e);
            });

            await page.waitFor(0.6*1000);
            //let also_answer = await page.evaluate(() => Array.from(document.querySelectorAll('.mod'), element => element.innerHTML));
            let alsoAskedAnswers = await page.evaluate(() => Array.from(document.querySelectorAll('.related-question-pair span span'), element => element.innerHTML));
            let alsoAskedQuestions = await page.evaluate(() => Array.from(document.querySelectorAll('.related-question-pair [jsname=xXq91c]'), element => element.textContent));
            let alsoAskedHref = await page.evaluate(() => Array.from(document.querySelectorAll('.related-question-pair a'), element => element.href));

            if (alsoAskedAnswers[j]) {
              for (domain of trusted_domains){
                if(alsoAskedHref[j].indexOf(domain) != -1){
                console.log(alsoAskedQuestions[j], alsoAskedAnswers[j], alsoAskedHref[j]);
                  scraped_data[alsoAskedQuestions[j]] = {
                    "answer": alsoAskedAnswers[j],
                    "source": alsoAskedHref[j]
                  }
                }

              }
            }
          }
           
          //console.log(also_asked_text[j], also_answer[j+questionOffset]);
        }
      
        console.log(i,j,round_count);

        if(j == 0 && round_count > 1)
          break;

        if(j == 0) {
          also_asked = await page.$$('g-accordion-expander .match-mod-horizontal-padding.cbphWd');
          also_asked_text = await page.evaluate(() => Array.from(document.querySelectorAll('g-accordion-expander .match-mod-horizontal-padding.cbphWd'), element => element.textContent));
          also_asked_href = await page.evaluate(() => Array.from(document.querySelectorAll('g-accordion-expander a'), element => element.href));
          also_asked_count = also_asked.length;
          console.log("new count ", also_asked_count);
          j = also_asked_count - 1;
          round_count ++;
       
        }
        j--; 
      }
      await page.waitFor(1*1000);


    }

    let write_data = JSON.stringify(scraped_data);
    fs.writeFileSync('scraped_data'+i+'.json', write_data);
    scraped_data = {};
  }


  await browser.close();
  let write_data = JSON.stringify(scraped_data);
  fs.writeFileSync('scraped_data.json', write_data);
})();
