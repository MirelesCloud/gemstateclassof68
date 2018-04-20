import React from 'react';
import ReactDOM from 'react-dom';
import Bios from './bio';
import Photos from './photo';

const alumniBio = [
  {
    'name': "Alice Lindsay Kirk",
    'image': {
      'desc': "Alice Lindsay Kirk Photo",
      'src': "images/AliceLindsayKirk.jpg"
    },
    'bio': "*She became at LPN and worked at a hospital in Walla Walla *She married to Glen Mereen (Class of ‘69) *No new additional information"
  },
  {
    'name': "Betty Weisz",
    'image': {
      'desc': "Betty Weisz Photo",
      'src': "images/BettyWeisz.jpg"
    },
    'bio': "Betty lives in Battle Ground, Wa"
  },
  {
    'name': "Caryn Loeffler Sjoren",
    'image': {
      'desc': "Caryn Loeffler Sjoren Photo",
      'src': "images/CarynLoefflerSjoren.jpg"
    },
    'bio': "After graduating from GSA, I began my college education at WWU, PUC and LLU, where I finished my degree in Physical Therapy.  During that time I was privileged to have Nancy Crisp Worley as a classmate and Donna Miracle-Judy was in the following class.  At LLU, I met my husband, Ken, who is a Dentist.  We live in Hermiston, OR and have celebrated our 45th anniversary last year.  We have 3 sons, a daughter and 4 grandchildren.  In our spare time we love camping, kayaking, motorcycling and bicycling as well as gardening.  One of my favorite trips was with NADAD (National Association of SDA Dentists) to visit and learn stories of our early Advent history.  Standing on “Ascension Rock”, getting a glimpse of how the pioneers felt Oct 22, 1844 when they expected the Lord to come.  This May/June we are looking forward to a trip with the GC Great Controversy Tour in Europe.  We will be studying as we visit various sites of the Reformation.  It is inspiring to me how these faithful believers stood victorious in the Lord.  My greatest desire is to faithful to the Lord, and I pray that our next reunion will find each one of us gathered by the Sea of Glass praising the Lord.  Caryn"
  },
  {
    'name': "Clinton Schultz",
    'image': {
      'desc': "Clinton Schultz Photo",
      'src': "images/ClintonSchultz.jpg"
    },
    'bio': "*Clinton married his Academy classmate and sweetheart, Linda Haugen in 1971.  *After graduating from GSA, Clinton attended Walla Walla College and then Seminary at Andrews University.  *From 1975 to 2000, he served as pastor for Upper Columbia Conference.   *In 2004, he received a clinical counseling degree from Eastern Washington University and founded Christian Counseling Northwest. *In 2006, he was again employed by the Upper Columbia Conference where he continues to serve as pastor and counselor in a multi-parish ministry.   *Clinton’s greatest pleasure is in sharing the good news of Jesus Christ as our Savior and soon coming King."
  },
  {
    'name': "Connie Beam Vance",
    'image': {
      'desc': "Connie Beam Vance Photo",
      'src': "images/ConnieBeamVance.jpg"
    },
    'bio': "*Connie married her sweetheart in a double wedding with her brother, Tony Beam and Patty Lovell.   Connie, Tony and Patty were all in the Class of '68.  *The two couples enjoyed laughter and many happy camping adventures together  *Connie became a Certified Nursing Assistant and spent many years caring for those that needed her care  *She enjoys living in Arizona with her husband and extended family"
  },
  {
    'name': "Dale Jenner",
    'image': {
      'desc': "Dale Jenner Photo",
      'src': "images/DaleJenner.jpg"
    },
    'bio': "*Married grade school and high school sweetheart and classmate, Judy Mc Alexander (Class of ‘69) in 1971.  Graduated with a associate degree in Forestry from Central Oregon Community College in Bend, Oregon and worked in forest management over 47 years.  Dale is actually mentioned in the Lock, Stock, and Boards: The Harris Pine Mill Story.  *Dale’s bio on the next page shows extensive entrepreneurial,  administrative leadership involving various organizations, boards, affiliations associated with forestry, fish and wildlife. *Dale and Judy have 2 children, 5 grandchildren and 1 great-grandchild.  They are very involved in the local church in Pendleton, enjoying the out of doors, researching his Native American genealogy and spending time with family."
  },
  {
    'name': "Dale Thompson",
    'image': {
      'desc': "Dale Thompson Photo",
      'src': "images/DaleThompson.jpg"
    },
    'bio': ""
  },
  {
    'name': "David Throckmorton",
    'image': {
      'desc': "David Throckmorton Photo",
      'src': "images/DavidThrockmorton.jpg"
    },
    'bio': "He graduated with a Chemical Engineering degree and has worked overseas, including Malaysia.  He has retired and lives in Castle Rock, Washington.  He has two daughters.  We look forward to hearing more from David!"
  },
  {
    'name': "Dennis Mack",
    'image': {
      'desc': "Dennis Mack Photo",
      'src': "images/DennisMack.jpg"
    },
    'bio': "Married Classmate (Sue Dousay) in 1969.  Drafted into the army and went to Vietnam.  After his tour of duty, they worked in Portland, Oregon,  Boise, McCall,  and Blackfoot, Idaho until 1986 and he was transferred to Provo Utah.  He lived there until his death in 2011.  Sue and Dennis have 1 daughter, Christy (born in 1976) and 1 grandson."
  },
  {
    'name': "Dennis Tall",
    'image': {
      'desc': "Dennis Tall Photo",
      'src': "images/DennisTall.jpg"
    },
    'bio': "After Gem State, Dennis graduated as a Registered Nurse and worked in Nursing, until he graduated with honors from Western States College of Chiropractic in 1989.  He practicing in the Bend area and Central Point, Oregon for more than 29 years.  He enjoys being active and recently retired and escaped to Arizona for his first winter of retirement with his wife."
  },
  {
    'name': "Dianne Qualley McBurnett",
    'image': {
      'desc': "Dianne Qualley McBurnett Photo",
      'src': "images/DianneQualleyMcBurnett.jpg"
    },
    'bio': "Dianne graduated from Walla Walla University in a BS in Nursing and married her college sweetheart, Max Mc Burnett, June 4, 1972. They stayed at WWU until Max graduated the following year and then took a Boy’s Dean position at the Sheyenne River Academy,  near Harvey, North Dakota.  They moved back to the Beaverton area after their daughter, Erin, was born and Max worked in the Beaverton School District as a Speech Pathologist and Dianne worked as a Home Health nurse and School nurse with the Beaverton School District.   Their son, Greg, was born three years after Erin and Dianne enjoyed a few years of being a stay at home Mom.   She returned to School Nursing and retired from the School District until 10 years ago. Dianne and Max now live in Portland and Dianne enjoys connecting with her friends, yoga, reading, Home Organization and Interior Design.  Max shows and sells his woodworking art at the Portland Art Museum.  Erin and her husband, James live in London and have 2 boys and Greg lives in South Lake Tahoe."
  },
  {
    'name': "Don Osborne",
    'image': {
      'desc': "Don Osborne Photo",
      'src': "images/DonOsborne.jpg"
    },
    'bio': "no information available"
  },
  {
    'name': "Don Veitz",
    'image': {
      'desc': "Don Veitz Photo",
      'src': "images/DonVeitz.jpg"
    },
    'bio': "Married classmate Sue Foster (Class of ‘69), when she graduated from Gem State and they have 2 children, Heidi and son Travis and 3 granddaughters.  Industrial Arts – Oversaw Campus construction and maintenance at Upper Columbia Academy, Spangle, Wa.  supporting local Fire Department.  Worked with Basin Frozen Foods, and later Winnemucca Farms in developing food products.  Several tours of mission work in Zambia, Liberia, South Sudan, Zambia, Kenya.  Custodian of Leoni Meadows Camp & Retreat Center, in the Sierra Mountains, Northern California for several years.  Last 20 years of his career, he worked at the Pacific Press and recently retired and moved to Arizona to be closer to his children and grandchildren."
  },
  {
    'name': "Doug Hilde",
    'image': {
      'desc': "Doug Hilde Photo",
      'src': "images/DougHilde.jpg"
    },
    'bio': "no information available"
  },
  {
    'name': "Frank Garcia",
    'image': {
      'desc': "Frank Garcia Photo",
      'src': "images/FrankGarcia.jpg"
    },
    'bio': "no information available"
  },
  {
    'name': "Gary Wagner",
    'image': {
      'desc': "Gary Wagner Photo",
      'src': "images/GaryWagner.jpg"
    },
    'bio': "Married  Linda in 1971 and have 3 children, two boys and a girl and 6 grandchildren.  He lost his oldest son, Todd at 33, in 2006 after complications after from a prior heart surgery.   His younger son and daughter and their families live close by.  After Graduation from Gem State, Gary went to work in logging, railroad and farming industries and currently the service manager of a Case IH farm equipment dealership for the past 27 years.  He has served as a town councilman and a mayor of Rockford for about 13 years and serving on the Housing and Community Development Advisory Committee as chair for Spokane County.  Linda and Gary attend the Summit Northwest Ministries SDA church in Post Falls, Idaho and find that the worship, friendship and encouragement there sustain them.  Their hobbies include riding their Spyder in the mountains with their son and grandson as often as possible and camping with  family and friends."
  },
  {
    'name': "George States",
    'image': {
      'desc': "George States Photo",
      'src': "images/GeorgeStates.jpg"
    },
    'bio': "After graduation, George was drafted into the Military and trained as a medic.  He was stationed for 2 years at Walter Reed Hospital in Washington DC and then returned back home to Emmett, Idaho.  In 1973, he married his wife, Mary and they have 2 sons and a daughter. George started his own business in Heating and Air Conditioning and then retired after 30 years.  He enjoys spending time with his children and grandchildren, all who live close by.  He remembers his time at Gem State fondly and sends his greetings."
  },
  {
    'name': "Janet Roba Phelps",
    'image': {
      'desc': "Janet Roba Phelps Photo",
      'src': "images/JanetRobaPhelps.jpg"
    },
    'bio': "Janet attended Business College.  She met her first husband and moved to Germany where he was stationed with the Air Force.  Upon returning to the states, they lived in Arizona and South Dakota.  They were married for 11 years had 1 son, Kevin. Janet continued to raise her son for the next 11 years.   He attended Milo Academy and Southern Adventist University where he met his wife.  Janet worked in the banking industry  and as an Office Manager before retiring in January 2017.  Janet and her 2nd husband, Phil, live near Goldendale, Wa. and she enjoys scrapbooking, photography, bible journaling and landscaping"
  },
  {
    'name': "Janice Miller",
    'image': {
      'desc': "Janice MillerPhoto",
      'src': "images/JaniceMiller.jpg"
    },
    'bio': "no infromation available"
  },
  {
    'name': "Jo Ann Fredenhagen",
    'image': {
      'desc': "Jo Ann Fredenhagen Photo",
      'src': "images/JoAnnFredenhagen.jpg"
    },
    'bio': "no infromation available"
  },
  {
    'name': "John Hamel",
    'image': {
      'desc': "John Hamel Photo",
      'src': "images/JohnHamel.jpg"
    },
    'bio': "Married classmate Sharon Moore (Graduated ‘66) and will be celebrating their 50th anniversary next year.  Taught auto, welding and drivers Ed at Upper Columbia Academy for several years and at High School in Sequim, Wa for 22 years.  They retired to New Plymouth, Idaho in 2010 and have 4 children, 3 boys and a girl  and 13 grandchildren."
  },
  {
    'name': "Joy Drury Gauger",
    'image': {
      'desc': "Joy Drury Gauger Photo",
      'src': "images/JoyDruryGauger.jpg"
    },
    'bio': "Joy completed a BS in Nursing from Walla Walla University in 1972 and worked as an RN for over 40 years.  She has two children, Melanie, 40 and Patrick,  38 and two little Grandsons.  Joy and her husband, Clyde, live in southern Oregon. She inherited 12 grand children and loves living on 19 acres.  Joys hobbies: gardening, photography, knitting, sewing."
  },
  {
    'name': "Judi Perkins Christensen Griffin",
    'image': {
      'desc': "Judi Perkins Christensen Griffin Photo",
      'src': "images/JudiPerkinsChristensenGriffin.jpg"
    },
    'bio': "Attended Gem State Academy her sophomore year, when her father was the Principal. Her family then moved to San Pasqual Academy and she graduated from there and went to College at La Sierra University.   She met her first husband, Bjorn or  BJ Christiansen and she followed him to Andrews for his Mdiv degree.    While he pastored in the Oregon Conference,  She taught PE at Portland Adventist Academy.  They have 1 daughter, Heidi and have 3 grandchildren.   BJ was President of the Southern California Conference and was also called to the General Conference in the Ministry Department.  When BJ passed away with Cancer,  Judi stayed in Silver Springs and was involved in Administration of the Washington Sanitarium.  She was remarried to Robert Griffin, a physician in Boring, Oregon and she is involved in the Sunnyside church with her husband."
  },
  {
    'name': "Kathy Van Komen Melendy",
    'image': {
      'desc': "Kathy Van Komen Melendy Photo",
      'src': "images/KathyVanKomenMelendy.jpg"
    },
    'bio': "Kathy was our classmate at Gem State our sophmore year and completed her education elsewhere.   She received a degree in Education and was actively teaching in some capacity for 44 years.  A highlight of her career was working with a below average school to bring up proficiency scores in language arts. No child had passed.  She helped revamp the program from grades K-8 and within 3 years 8 grader passing the proficiency!  Her school won the Nevada State Most improved School and then won a National Award for Most Improved School and they received the award from Mrs. Laura Busch in 2005.    CONGRATS, Kathy!  She has 3 children and 7 grandchildren and enjoys spending time with them and loves to travel"
  },
  {
    'name': "Kenny Rogers",
    'image': {
      'desc': "Kenny Rogers Photo",
      'src': "images/KennyRogers.jpg"
    },
    'bio': "Kenny graduated from WWU in 1973 and taught at Milo Academy for 2 years.  He then completed Dentistry at Loma Linda University in 1981 and started practicing Dentistry in Salmon, Idaho. He is Married and has 5 children.  1 son is from his first marriage and 3 Step-Daughters are from his second marriage.  He and his second wife, had another daughter was born in 1988 and she has attended and graduated from GSA in 2008.  Kenny stays involved in music and a very physically active lifestyle.  He is doing some long, endurance running, Climbed Mt. Rainer and enjoys travels to Greece, Crete and being involved in doing Dentistry with the Mercy Ship.  He enjoys continuing to practice dentistry and working with his wife and 3 of his daughters.  Kenny recommitted his life to God in 1994 and counts his faith as a sustaining presence in his life."
  },
  {
    'name': "Larry Drury",
    'image': {
      'desc': "Larry Drury Photo",
      'src': "images/LarryDrury.jpg"
    },
    'bio': "Larry lives in Las Vegas with his SO, Lou Wright.  Larry has worked as a long haul truck driver, a baker and mechanic.  He has one son, Jim, who is 41 and lives in Spokane with his wife.  Larry hobbies: skiing, working, small engines, cooking, travel and travel.   He is enjoys being involved in wine production."
  },
  {
    'name': "Larry Moore",
    'image': {
      'desc': "Larry Moore Photo",
      'src': "images/LarryMoore.jpg"
    },
    'bio': "Attended GSA in 1967"
  },
  {
    'name': "Laura Jehn Lickey",
    'image': {
      'desc': "Laura Jehn Lickey Photo",
      'src': "images/LauraJehnLickey.jpg"
    },
    'bio': "After graduation and worked at United Medical Labs in Portland, Oregon.  She then moved to Walla Walla General Hospital and worked as a Nurses Aid and Physical Therapy aid.  She met her husband, John Lickey, in Walla Walla and married in 1971.  They spent a year in Portland where John completed his Medical Technology course and she worked as a receptionist at the old Portland Sanitarium working the old fashioned switchboard.  They have 3 daughters, 6 grandchildren, and 4 great-grandchildren.  Now that John is retired, they are enjoying their family, hiking in the nearby Shenandoah National Park, near their home in Culpeper, VA. They enjoy being involved in their local church and are 'looking forward to seeing each of us again either here or at that grand reunion in heaven.'"
  },
  {
    'name': "Lavonne Grant Lee",
    'image': {
      'desc': "Lavonne Grant Lee Photo",
      'src': "images/LavonneGrantLee.jpg"
    },
    'bio': "Went to LLU and graduated with a degree in Dental Hygiene.  She worked in California and in Washington doing Dental Hygiene.  Lavonne recently retired and lives in Richland, Wa.  Enjoys Photography, playing the organ for church.  Active in the Kennewick, Wa. church."
  },
  {
    'name': "Leslie Hultz",
    'image': {
      'desc': "Leslie Hultz Photo",
      'src': "images/LeslieHultz.jpg"
    },
    'bio': "no information available"
  },
  {
    'name': "Linda Abbott Caverly",
    'image': {
      'desc': "Linda Abbott Caverly Photo",
      'src': "images/LindaAbbottCaverly.jpg"
    },
    'bio': "Contracted to work at the Red Cross teaching 1st Aid and CPR for a year and taught over 5,000 people.   When the contract ended, she volunteered with the Red Cross for the next 49 years.  Married Paul Caverly and have 5 children between them.   Now they have 9 grandchildren and 4 great-grandchildren.   They have lived in La Grande, Oregon and Auburn, Washington.  Hobbies include “Living History” Civil War Reinacting.  What she learned at Gem State: 'How to get along with people. When you go to high school, you go home at night.  When you go to Academy, you are surrounded by and living with your classmates and faculty.   I feel this lesson helped me be better prepared for life.'"
  },
  {
    'name': "Linda Hagen Schultz",
    'image': {
      'desc': "Linda Hagen Schultz Photo",
      'src': "images/LindaHagenSchultz.jpg"
    },
    'bio': "Married classmate, Clinton Schultz in 1971.  She graduated as a registered nurse in 1972 and has worked in the nursing profession for the past 48 years, first in hospital nursing and then as founder and CEO of Northwest Case Management, Inc. in Spokane, Wa.  She also co-founded SOHO (Saving Orphans through Healthcare and Outreach) in South Africa.  She and Clinton have two children and four grandchildren that are the love of their lives.   Her greatest joy is looking forward to our Savior’s second coming."
  },
  {
    'name': "Mark Miller",
    'image': {
      'desc': "Mark Miller Photo",
      'src': "images/MarkMiller.jpg"
    },
    'bio': "no information available"
  },
  {
    'name': "Michael Givens",
    'image': {
      'desc': "Michael Givens Photo",
      'src': "images/MichaelGivens.jpg"
    },
    'bio': "After Graduation, Michael took Civil Engineering.  He worked for others, but also started his own business.  He married and has a son and daughter.  He recently retired and has been traveling in Arizona.  He can’t make the reunion, but sends his best to the classmates!"
  },
  {
    'name': "Nancy Crisp Worley",
    'image': {
      'desc': "Nancy Crisp Worley Photo",
      'src': "images/NancyCrispWorley.jpg"
    },
    'bio': "Nancy married George Worley in 1973.   They had 2 boys, Stephen and David.   Nancy is blessed with 6 grandchildren, (2 step, 4 foster and 1 more in the way).  George was a veteran passed away in 2007 from complications from Agent Orange.  Nancy completed a degree in Physical Therapy from LLU in 1972 and worked in Physical Therapy for 40 years that included acute care, rehab unit, Home Health Department Director, and private practice until her retirement in 2010.  Nancy enjoys making music (literally – luthier) and playing/singing music.  Nancy continues to carry a heart for missions that she shared with George.  Please see her bio for more information about the extensive work they have done at their local church and in India."
  },
  {
    'name': "Noreen Thorgersen Krogstad",
    'image': {
      'desc': "Noreen Thorgersen Krogstad Photo",
      'src': "images/NoreenThorgersenKrogstad.jpg"
    },
    'bio': "Graduated in Nursing from WWU in ‘72 and married Lester Riter.   They were involved in the Oregon Conference ministry for 7 years and then left the ministry to pursue a home construction business in Lincoln City, Oregon.  In 1983, they moved to Loma Linda, where Lester completed Dentistry.   Noreen and Lester had 2 children, Molly and Ben, but divorced in 1989.  Noreen did ICU, Neurology, med-surg and clinical nursing off and on during that time.  While at Loma Linda, Noreen Completed a Masters in Healthcare Administration and was a Community Clinic liaison between LLU and the VA Loma Linda for 10 years.  Noreen married Gary Krogstad in 1999 added 1 step son, Kevin and her son, Ben and his wife, Janella, add 3 grandchildren to her life.  After working 19 years at Loma Linda Health Care and Adventist Health and 14 years at the Loma Linda VA, she retired after a a 42 years in nursing in 2016 and is enjoying being ”Mimi”, traveling, playing the piano, reading, staying active and expanding her community of friends."
  },
  {
    'name': "Olof Regina Thoroddsen",
    'image': {
      'desc': "Olof Regina Maronson Torfadottir Thoroddsen Photo",
      'src': "images/OlofReginaMaronsonTorfadottirThoroddsen.jpg"

    },
    'bio': "*Lives in Akureyri, Iceland *Went to Tyriford Heyere Skole (SDA school in Norway?) *Studied Dentistry at Haskoli Islands, graduating in 1978 *Studied Neuroanatomy at Karolinska Institutet *Mother to one daughter, Grandmother, Mother in Law, Mezzosoprano"
  },
  {
    'name': "Pam Franklin Loop",
    'image': {
      'desc': "Pam Franklin Photo",
      'src': "images/PamFranklinLoop.jpg"
    },
    'bio': "*Married Jerry Loop (GSA Class of ‘67) in 1970 *Attended WWU and completed Graduate degree in Mathematics from Boise State *Had two children, Ben and Becky. They also have10 grandchildren *Jerry has a stone and tile business in Caldwell and Pam has been actively involved in the business *They are very involved in their grandchildren’s lives and their local church"
  },
  {
    'name': "Patricia Woodruff Heinrich",
    'image': {
      'desc': "Patricia Woodruff Heinrich Photo",
      'src': "images/PatriciaWoodruffHeinrich.jpg"
    },
    'bio': "Married  and living in Oklahoma with her husband.  They started in ministry 1986 and have a very active Bible Correspondence School, a radio station for our local communities and a mailing ministry.  We have sent over 16 million “National Sunday Law” books.  We minister to more than 9,000 through our newsletters and Bible studies monthly, over 700 of them are in prison."
  },
  {
    'name': "Patty Lovell (Beam) Rickwa",
    'image': {
      'desc': "Patty Lovell (Beam) Rickwa Photo",
      'src': "images/PattyLovellBeamRickwa.jpg"
    },
    'bio': "Married her high school sweetheart, Tony Beam, right after graduation and were married for 10 years.  During their marriage, they had 2 daughters, Kathy and Keri.  She completed nursing at Boise State in 1974.  Her work experience included Maternity, Night Supervisor in ER and was a school nurse in Nampa.  She particularly enjoyed working 10 years in Home Health and loved the one on one time with patients in their homes.  She married for the 2nd time in 1984 to Ted Rickwa and added a daughter and 3 step children to her life.   Patty’s great joy was being a grandmother to 6 grandchildren.   Patty was stricken with Hashimoto’s disease in her early 50s, which has impaired her ability to move and speak and last year moved to the Park Place Care facility in Nampa.  She continues to enjoy family and friends visiting her."
  },
  {
    'name': "Raymond Jackson",
    'image': {
      'desc': "Raymond Jackson Photo",
      'src': "images/RaymondJackson.jpg"
    },
    'bio': "no information available"
  },
  {
    'name': "Richard Lawrence",
    'image': {
      'desc': "Richard Lawrence Photo",
      'src': "images/RichardLawrence.jpg"
    },
    'bio': "no information available"
  },
  {
    'name': "Robert Fullmer",
    'image': {
      'desc': "Robert Fullmer Photo",
      'src': "images/RobertFullmer.jpg"
    },
    'bio': "Bob married Sharre Gerard and ran a carpet cleaning business and was able to work while he completed Nursing school with money in the bank! He has 3 (Toby, Elliot and Heather) children and 5 grandchildren.  His children and grandchildren have  attended Milo, Campion and Thunderbird Academies.  His son, Toby, graduated from WWU in Engineering., Elliott has a Masters in Education and is principle of the Taipei Adventist American School.  Heather is a high school math instructor.  He has enjoyed working in Home Health, Hospice and Long Term Care and continues to work and help his grandchildren through academy and college.  Some of his best memories include doing mission work in Alaska and Nicaragua.   He currently resides in Aztec, NM."
  },
  {
    'name': "Roger Hanson",
    'image': {
      'desc': "Roger Hanson Photo",
      'src': "images/RogerHanson.jpg"
    },
    'bio': "No information available"
  },

  {
    'name': "Sandra Williams Depner",
    'image': {
      'desc': "Sandra Williams Depner Photo",
      'src': "images/SandraWilliamsDepner.jpg"
    },
    'bio': "Lorem ipsum dolor sit amet, ad sea mazim audire, ex porro euismod est. Fierent postulant est id, vis sumo alterum albucius at, in possim laboramus sed. An prodesset moderatius pro, vix te ponderum insolens, clita voluptua oporteat cum cu. In dicunt platonem his. Pro at noster necessitatibus, vel option inermis appellantur id, vix no probo molestiae.  Bonorum albucius mea ad. Minimum eleifend adolescens an mei, veri invenire maiestatis vis no. At sed erant civibus mnesarchum, cu viderer integre iuvaret nec. Sea veri voluptaria ullamcorper at.  Ex essent reformidans sit, usu ne nonumy iisque. Eu malis vitae similique sit, vim propriae deseruisse in. Et graecis salutandi mea, id cibo partiendo eos. Eos tale consequat liberavisse ea. Mazim viris accumsan usu at, legere mnesarchum no vel, eos quis everti cu.  Cum no suas vocibus referrentur, nostro audire te eum. No vix veniam dictas disputando, ea qui splendide mediocritatem. At clita persequeris est. Nulla veritus moderatius eu eum, vis ornatus insolens interesset id, eam purto volutpat honestatis ea. No sea clita regione petentium, dictas voluptatum ullamcorper cu qui.  Eu ius novum possim, no sea blandit aliquando, sea dico simul temporibus ex. Ad putant ceteros vix, eum et aliquando torquatos, clita volutpat ut cum. Mel id habeo putent suavitate. Nam te brute clita, adipisci instructior ea vim. Tota scaevola pertinax nec ad, at sanctus splendide mel."
  },
  {
    'name': "Sharon Jennings Simmons",
    'image': {
      'desc': "Sharon Jennings Simmons Photo",
      'src': "images/SharonJenningsSimmons.jpg"
    },
    'bio': "no information available"
  },
  {
    'name': "Sherilyn Ferrera Samaan",
    'image': {
      'desc': "Sherilyn Ferrera Samaan Photo",
      'src': "images/SherilynFerreraSamaan.jpg"
    },
    'bio': "Masters in Music Associate Degree in Nursing Married Phillip Samaan for 45 years 1 daughter & 2 grandchildren Missionaries in Africa and learned French at Collonges, France before moving to West African-Indian Ocean Division, headquartered in Abidjan  Continues music ministry, while husband does Pastoral, Teaching Religion & Theology (at Andrews and Southern Adventist University). Phillip also conducting Seminars and writing books (See Bio)"
  },
  {
    'name': "Sue Dousay Mack",
    'image': {
      'desc': "Sue Dousay Mack Photo",
      'src': "images/SueDousayMack.jpg"
    },
    'bio': "Married Academy sweetheart, Dennis Mack (Class of ‘68).  After Dennis’s tour of duty, they moved to Portland, Oregon and then moved to the Boise area until 1986, when they were transferred to Utah.  They have one daughter, Christy, who was born in 1976 and 1 grandson.  Sue has been employed the last 10 years as a bookkeeper/office manager for an online photography retouching company."
  },
  {
    'name': "Suzanne Miller Shafer",
    'image': {
      'desc': "Suzanne Miller Shafer Photo",
      'src': "images/SuzanneMillerShafer.jpg"
    },
    'bio': "Graduated from WWC in Nursing 1972.  Lives in Milton Freewater, Oregon and enjoys riding her motorcycle into the local Blue Mountains and eastern Oregon and Washington.  Held many positions in Psychiatric Nursing, was Director of Nursing – for a Psych facility."
  },
  {
    'name': "Tim Saunders",
    'image': {
      'desc': "Tim Saunders Photo",
      'src': "images/TimSaunders.jpg"
    },
    'bio': "no information available"
  },
  {
    'name': "Trudy Carpenter Klein",
    'image': {
      'desc': "Trudy Carpenter Klein Photo",
      'src': "images/TrudyCarpenterKlein.jpg"
    },
    'bio': "Trudy graduated from Walla Walla University with a BS in Nursing in June 1972 and married her college sweetheart (James Klein) 1 day later.  She has had a varied career, including 21 years of teaching at Walla Walla University.  She also  has been a Nurse Manager at the Walla Walla VA. Her husband, James also teaches at WWU and Whitman College.  They have 2 children and 3 grandchildren, with which they enjoy every moment.  What she appreciated about Gem State was the chance to play music and to integrate her faith and learning."
  },
  {
    'name': "Verla Rollins Collett",
    'image': {
      'desc': "Verla Rollins Collett Photo",
      'src': "images/VerlaRollinsCollett.jpg"
    },
    'bio': "Verla lived in Walla Walla area and worked at a Bank.  She was married and had a son.  She was in poor health and recently passed away.  Possible additional family information through sister, Ora Rollins (Class of ‘66)."
  },
  {
    'name': "Warren Graybill",
    'image': {
      'desc': "Warren Graybill Photo",
      'src': "images/WarrenGraybill.jpg"
    },
    'bio': "no information available"
  }

]

const alumniAlbum = [
  {
    'image': "images/20180331_191417.jpg"
  },
  {
    'image': "images/20180331_191418.jpg"
  },
  {
    'image': "images/20180331_191420.jpg"
  },
  {
    'image': "images/20180331_191152.jpg"
  },
  {
    'image': "images/20180331_191256.jpg"
  },
  {
    'image': "images/20180331_191411.jpg"
  },
  {
    'image': "images/20180331_191414.jpg"
  },
  {
    'image': "images/20180331_191424.jpg"
  },
  {
    'image': "images/20180331_191433.jpg"
  },
  {
    'image': "images/20180331_191435.jpg"
  },
  {
    'image': "images/20180331_191545.jpg"
  },
  {
    'image': "images/20180331_191553.jpg"
  },
  {
    'image': "images/20180331_191554.jpg"
  },
  {
    'image': "images/20180331_191557.jpg"
  },
  {
    'image': "images/20180331_191620.jpg"
  },
  {
    'image': "images/20180331_191624.jpg"
  },
  {
    'image': "images/20180331_191627.jpg"
  },
  {
    'image': "images/20180331_191818.jpg"
  },
  {
    'image': "images/20180331_191820.jpg"
  },
  {
    'image': "images/20180331_192038.jpg"
  },
  {
    'image': "images/20180331_192039.jpg"
  },
  {
    'image': "images/20180331_192056.jpg"
  },
  {
    'image': "images/20180331_192234.jpg"
  },
  {
    'image': "images/20180331_192801.jpg"
  },
  {
    'image': "images/20180331_193323.jpg"
  },
  {
    'image': "images/20180331_193459.jpg"
  },
  {
    'image': "images/20180331_193516.jpg"
  },
  {
    'image': "images/20180331_193529.jpg"
  },
  {
    'image': "images/20180331_193533.jpg"
  },
  {
    'image': "images/20180331_193614.jpg"
  },
  {
    'image': "images/20180331_193619.jpg"
  },
  {
    'image': "images/20180331_193624.jpg"
  },
  {
    'image': "images/20180331_193631.jpg"
  },
  {
    'image': "images/20180331_193657.jpg"
  },
  {
    'image': "images/20180331_193659.jpg"
  },
  {
    'image': "images/20180331_193710.jpg"
  },
  {
    'image': "images/20180331_193719.jpg"
  },
  {
    'image': "images/20180331_193737.jpg"
  },
  {
    'image': "images/20180331_193742.jpg"
  },
  {
    'image': "images/20180331_193811.jpg"
  },
  {
    'image': "images/20180331_193813.jpg"
  },
  {
    'image': "images/20180331_193906.jpg"
  },
  {
    'image': "images/20180331_193908.jpg"
  },
  {
    'image': "images/20180331_193910.jpg"
  },
  {
    'image': "images/20180331_193919.jpg"
  },
  {
    'image': "images/20180331_193921.jpg"
  },
  {
    'image': "images/20180331_193942.jpg"
  },
  {
    'image': "images/20180331_194007.jpg"
  },
  {
    'image': "images/20180331_194010.jpg"
  },
  {
    'image': "images/20180331_194110.jpg"
  },
  {
    'image': "images/20180331_194117.jpg"
  },
  {
    'image': "images/20180331_194249.jpg"
  },
  {
    'image': "images/20180331_194254.jpg"
  },
  {
    'image': "images/20180331_194331.jpg"
  },
  {
    'image': "images/20180331_194338.jpg"
  },
  {
    'image': "images/20180331_194919.jpg"
  },
  {
    'image': "images/20180331_195149.jpg"
  },
  {
    'image': "images/20180331_195546.jpg"
  },
  {
    'image': "images/20180331_195549.jpg"
  },
  {
    'image': "images/20180331_195603.jpg"
  },
  {
    'image': "images/20180331_195604.jpg"
  },
  {
    'image': "images/20180331_195606.jpg"
  },
  {
    'image': "images/20180331_195619.jpg"
  },
  {
    'image': "images/20180331_195916.jpg"
  },
  {
    'image': "images/20180331_195931.jpg"
  },
  {
    'image': "images/20180331_200522.jpg"
  },
  {
    'image': "images/20180331_200531.jpg"
  },
  {
    'image': "images/20180331_200544.jpg"
  },
  {
    'image': "images/20180331_201145.jpg"
  },
  {
    'image': "images/20180331_201305.jpg"
  },
  {
    'image': "images/20180331_201314.jpg"
  },
  {
    'image': "images/20180331_203341.jpg"
  },
  {
    'image': "images/20180331_203353.jpg"
  },
  {
    'image': "images/20180331_203512.jpg"
  },
  {
    'image': "images/20180331_210438.jpg"
  },
  {
    'image': "images/20180331_210440.jpg"
  },
  {
    'image': "images/20180331_213337.jpg"
  },
  {
    'image': "images/IMG_0001.jpg"
  },
  {
    'image': "images/IMG_0003.jpg"
  },
  {
    'image': "images/IMG_0004.jpg"
  },
  {
    'image': "images/IMG_0005.jpg"
  },
  {
    'image': "images/IMG_0006.jpg"
  },
  {
    'image': "images/IMG_0007.jpg"
  },
  {
    'image': "images/IMG_0008.jpg"
  },
  {
    'image': "images/IMG_0009.jpg"
  },
  {
    'image': "images/IMG_0010.jpg"
  },
  {
    'image': "images/IMG_0011.jpg"
  },
  {
    'image': "images/IMG_0012.jpg"
  },
  {
    'image': "images/IMG_0013.jpg"
  },
  {
    'image': "images/IMG_0014.jpg"
  },
  {
    'image': "images/IMG_0015.jpg"
  },
  {
    'image': "images/IMG_0016.jpg"
  },
  {
    'image': "images/IMG_0017.jpg"
  },
  {
    'image': "images/IMG_0018.jpg"
  },
  {
    'image': "images/IMG_0019.jpg"
  },
  {
    'image': "images/IMG_0020.jpg"
  },
  {
    'image': "images/IMG_0021.jpg"
  },
  {
    'image': "images/IMG_0022.jpg"
  },
  {
    'image': "images/IMG_0023.jpg"
  },
  {
    'image': "images/IMG_0024.jpg"
  },
  {
    'image': "images/IMG_0025.jpg"
  },
  {
    'image': "images/IMG_0026.jpg"
  },
  {
    'image': "images/IMG_0027.jpg"
  },
  {
    'image': "images/IMG_0028.jpg"
  },
  {
    'image': "images/IMG_0029.jpg"
  },
  {
    'image': "images/IMG_0030.jpg"
  },
  {
    'image': "images/IMG_0031.jpg"
  },
  {
    'image': "images/IMG_0032.jpg"
  },
  {
    'image': "images/IMG_0033.jpg"
  },
  {
    'image': "images/IMG_0034.jpg"
  },
  {
    'image': "images/IMG_0035.jpg"
  },
  {
    'image': "images/IMG_0036.jpg"
  },
  {
    'image': "images/IMG_0037.jpg"
  },
  {
    'image': "images/IMG_0038.jpg"
  },
  {
    'image': "images/IMG_0039.jpg"
  },
  {
    'image': "images/IMG_0040.jpg"
  },
  {
    'image': "images/IMG_0041.jpg"
  },
  {
    'image': "images/IMG_0042.jpg"
  },
  {
    'image': "images/IMG_0043.jpg"
  },
  {
    'image': "images/IMG_0044.jpg"
  },
  {
    'image': "images/IMG_0045.jpg"
  },
  {
    'image': "images/IMG_0046.jpg"
  },
  {
    'image': "images/IMG_0047.jpg"
  },
  {
    'image': "images/IMG_0048.jpg"
  },
  {
    'image': "images/IMG_0049.jpg"
  },
  {
    'image': "images/IMG_0050.jpg"
  },
  {
    'image': "images/IMG_0051.jpg"
  },
  {
    'image': "images/IMG_0052.jpg"
  },
  {
    'image': "images/IMG_0053.jpg"
  },
  {
    'image': "images/IMG_0054.jpg"
  },
  {
    'image': "images/IMG_0055.jpg"
  },
  {
    'image': "images/IMG_0056.jpg"
  },
  {
    'image': "images/IMG_0057.jpg"
  },
  {
    'image': "images/IMG_0058.jpg"
  },
  {
    'image': "images/IMG_0059.jpg"
  },
  {
    'image': "images/IMG_0060.jpg"
  },
  {
    'image': "images/IMG_0061.jpg"
  },
  {
    'image': "images/IMG_0062.jpg"
  },
  {
    'image': "images/IMG_0063.jpg"
  },
  {
    'image': "images/IMG_0064.jpg"
  },
  {
    'image': "images/IMG_0065.jpg"
  },
  {
    'image': "images/IMG_0067.jpg"
  },
  {
    'image': "images/IMG_0068.jpg"
  },
  {
    'image': "images/IMG_0069.jpg"
  },
  {
    'image': "images/IMG_0070.jpg"
  },
  {
    'image': "images/IMG_0071.jpg"
  },
  {
    'image': "images/IMG_0072.jpg"
  },
  {
    'image': "images/IMG_0073.jpg"
  },
  {
    'image': "images/IMG_0077.jpg"
  },
  {
    'image': "images/IMG_0078.jpg"
  },
  {
    'image': "images/IMG_0079.jpg"
  },
  {
    'image': "images/IMG_0080.jpg"
  },
  {
    'image': "images/IMG_0081.jpg"
  },
  {
    'image': "images/IMG_0082.jpg"
  },
  {
    'image': "images/Reunion1.jpg"
  },
  {
    'image': "images/Reunion2.jpg"
  },
  {
    'image': "images/Reunion3.jpg"
  },
  {
    'image': "images/Reunion4.jpg"
  },
  {
    'image': "images/Reunion5.jpg"
  },
  {
    'image': "images/Reunion6.jpg"
  },
  {
    'image': "images/Reunion7.jpg"
  },
  {
    'image': "images/Reunion8.jpg"
  },
  {
    'image': "images/Reunion9.jpg"
  },
  {
    'image': "images/Reunion10.jpg"
  },
  {
    'image': "images/Reunion11.jpg"
  },
  {
    'image': "images/Reunion12.jpg"
  },
  {
    'image': "images/Reunion13.jpg"
  },
  {
    'image': "images/Reunion14.jpg"
  },
  {
    'image': "images/Reunion15.jpg"
  },
  {
    'image': "images/Reunion16.jpg"
  },
  {
    'image': "images/Reunion17.jpg"
  },
  {
    'image': "images/Reunion18.jpg"
  },
  {
    'image': "images/Reunion19.jpg"
  },
  {
    'image': "images/Reunion20.jpg"
  },
  {
    'image': "images/Reunion21.jpg"
  },
  {
    'image': "images/Reunion22.jpg"
  },
  {
    'image': "images/Reunion23.jpg"
  },
  {
    'image': "images/Reunion24.jpg"
  },
  {
    'image': "images/Reunion25.jpg"
  },
  {
    'image': "images/Reunion26.jpg"
  },
  {
    'image': "images/Reunion27.jpg"
  },
  {
    'image': "images/Reunion28.jpg"
  },
  {
    'image': "images/Reunion29.jpg"
  }
]


class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Bios alumni={alumniBio} />
        <Photos photo={alumniAlbum} />
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('photo'));
