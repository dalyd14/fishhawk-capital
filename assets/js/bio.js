var bios = [
    {
        id: "rkBio",
        name: "Ryan Koehler",
        role: "Founder - Managing Partner",
        description: [
            "Mr. Koehler is a co-founder and managing partner of FishHawk Capital, LLC.  Mr. Koehler oversees the operations, asset management, and accounting functions of the venture’s investment portfolio.",
            "Before co-founding FHC, Mr. Koehler spent the past 5 years with Freddie Mac, one of the largest real estate firms in the country. While serving as a Multi-Family Producer, Mr. Koehler oversaw the acquisition and financing of more than $500MM of apartment value-add acquisitions as well as over $2 Billion of apartment and condominium development.",
            "Mr. Koehler is a 2016 graduate of Clemson University where he received a Bachelor of Arts in Landscape Architecture. He also holds his Masters in Real Estate from Georgetown University. In addition to managing the operations and capital structure of FishHawk, Mr. Koehler is an avid Clemson football fan and loves cuddling on the couch with his dog, Sullivan."
        ]
    },    
    {
        id: "ckBio",
        name: "Chris Koehler",
        role: "Founder - Managing Partner",
        description: [
            "Mr. Koehler is a co-founder and managing principal of FishHawk Capital, LLC. Mr. Koehler is responsible for the acquisitions and investor relations of the venture’s investment portfolio.",
            "Before co-founding FHC, Mr. Koehler spent 3 years with Truist Financial Corporation (formerly SunTrust). While at Truist, Mr. Koehler covered the Healthcare sector and supported the underwriting for investment grade health care systems, senior care portfolio acquisitions, construction financing and public bond issuances.",
            "Mr. Koehler is a 2017 graduate of Clemson University where he received a Bachelor of Science in Financial Management. He is also an MBA candidate with a concentration in real estate and finance from Villanova University."
        ]
    }
]

$(document).ready(function() {
    // if (window.location.href.indexOf("index") > -1) {
    if (window.location.pathname === "/") {
        if (bios.length > 0) {
            bios.forEach(bio => {
                var singleBio = $("<div>").attr({
                    id: bio.id + "Modal",
                    tabindex: "-1",
                    "aria-labelledby": bio.id + "Modal",
                    "aria-hidden": "true"
                }).addClass('modal fade').html(
                    `
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title" id="bioModalName">${bio.name}</h3>
                                
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <h5 class="modal-title" id="bioModalRole">${bio.role}</h5>
                                ${bio.description.map(des => {
                                    return `<p>${des}</p>`
                                }).join(`
                                `)}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>`
                )
                $('#modalSection').append(singleBio)
            })
        }
    }
});

$(".member-img").click(function() {
    var bioIndex = $(this).closest(".team-member").index()
    var modalId = "#" + bios[bioIndex].id + "Modal"
    $(modalId).modal('show');
})