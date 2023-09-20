
const templates = {
  '10': ({ insName, partnerInsName, partnerInsAddr, theme, purposeAgreement, insMembers, outMembers, otherMembers, date }) =>
    `${insName} and ${partnerInsName}, ${partnerInsAddr} signed a Memorandum of Understanding under ${theme}. ${purposeAgreement}. During the event, ${insMembers}, with ${outMembers} were present. ${otherMembers} had witnessed the event. ${date}`,
  '9': ({ speakerName, designation, department, lectureType, title, eventName, organizer, date }) =>
    `${speakerName}, ${designation}, ${department}, NITAP delivered a ${lectureType} on "${title}" in the ${eventName} organised by ${organizer}, ${date}.`,
  '16': ({ speakerName, designation, department, insName, lectureType, title, organizer, date }) =>
    `${speakerName}, ${designation}, ${department}, ${insName} visited and delivered a ${lectureType} on "${title}" organised by ${organizer}, ${date}`,
  '7': ({ pi, copi, title, fundAgency, date }) =>
    `${pi} ${copi ? (copi.length === 1 ? `and ${copi} as a Co-Principal Investigator` : `and ${copi} as Co-Principal Investigators`) : ''} received an external project titled "${title}". Funding Agency: ${fundAgency}, ${date}.`,
  '6': ({ title, fundAgency, facultyName, designation, department }) =>
    `Name of the job: ${title}
Name of the Client: ${fundAgency}  
Principal Investigator: ${facultyName}, ${designation}, ${department}`,
  '12': ({ invName, year, patId, patOffice }) =>
    `${invName}. (${year}). ${patId}. ${patOffice}.`,
  '13': ({ author, year, title, journalTitle, volNo, issueNo, pageNos, doiUrl }) =>
    `${author} (${year}). ${title}. *${journalTitle}*${volNo ? ` *${volNo}*` : ""}${issueNo ? `(${issueNo})` : ""}${pageNos ? `, ${pageNos}` : ""}. ${doiUrl ? doiUrl : ''}`,
  '4': ({ author, year, title, publisher, doiUrl }) =>
    `${author} (${year}). *${title}*. ${publisher}. ${doiUrl}`,
  '5': ({ author, title, eventName, place, date, toDate, doiUrl }) =>
    `${author} *${title}* [Paper presentation]. ${eventName}, ${place}${toDate ? `, from ${date} to ${toDate}` : date ? `, ${date}` : ''}. ${doiUrl}`,
  '3': ({ author, year, title, editors, bookTitle, pageNos, publisher, doiUrl }) =>
    `${author}. (${year}). ${title}. In ${editors} (Eds.), *${bookTitle}* (pp. ${pageNos}). ${publisher}. ${doiUrl}`,
  '8': ({ facultyName, designation, department, eventType, title, organizer, date, toDate }) =>
    `${facultyName}, ${designation}, ${department} attended ${eventType} on "${title}", organised by ${organizer}${toDate ? `, from ${date} to ${toDate}` : date ? `, ${date}` : ''}.`,
  '14': ({ facultyName, designation, department, journalTitle, publisher, date }) =>
    `${facultyName}, ${designation}, ${department} served as a *Reviewer* of "${journalTitle}". ${publisher}. ${date}.`,
  '15': ({ facultyName, designation, department, eventName, organizer, date, toDate }) =>
    `${facultyName}, ${designation}, ${department} was *The Chair of Panel Session* at ${eventName}, organised by ${organizer}${toDate ? `, from ${date} to ${toDate}` : date ? `, ${date}` : ''}.`,
  '17': ({ winner, insName, rank, eventName, theme, organizer, collaboration, date }) =>
    `${winner}, ${insName} won the ${rank} in the ${eventName} on the theme of "${theme}" organized by ${organizer}${collaboration ? ` in association with ${collaboration}` : ''}, ${date}`,
  '18': ({ eventName, theme, coordinatorName, collaboration, place, date, toDate }) =>
    `${eventName} on "${theme}" was organized by ${coordinatorName}, ${collaboration ? `in collaboration with ${collaboration},` : ''} at ${place}${toDate ? `, from ${date} to ${toDate}` : date ? `, ${date}` : ''}.`,
  '11': ({ eventName, organizer, designation, collaboration, theme, date, toDate }) =>
    `${eventName} was organised  by ${organizer}, ${designation} ${collaboration ? `in collaboration with ${collaboration},` : ''} on the ${theme}${toDate ? `, from ${date} to ${toDate}` : date ? `, ${date}` : ''}.`,
  '1': ({ eventName, theme, organizer, department, collaboration, date, toDate, eventLink }) =>
    `${eventName} on ${theme} will be organized by ${organizer}, ${department}, ${collaboration ? `sponsored by ${collaboration},` : ''}${toDate ? `, from ${date} to ${toDate}` : date ? `, ${date}` : ''}. For more details, visit  NITAP official website: www.nitap.ac.in. ${eventLink ? ` Event link: ${eventLink}` : ''}`,
  '2': ({ facultyName, designation, department, title, fundAgency, date, toDate }) =>
    `${facultyName}, ${designation}, ${department} is ${title} of ${fundAgency}${toDate ? `, from ${date} to ${toDate}` : date ? `, ${date}` : ''}.`,
  '19': ({ desc }) =>
    desc
}

export default templates;