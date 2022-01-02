Dropzone.autoDiscover = false;

function init() {
    let dz = new Dropzone("#dropzone", {
        url: "/",
        maxFiles: 1,
        addRemoveLinks: true,
        dictDefaultMessage: "Some Message",
        autoProcessQueue: false
    });
    
    dz.on("addedfile", function() {
        if (dz.files[1]!=null) {
            dz.removeFile(dz.files[0]);        
        }
    });

    dz.on("complete", function (file) {
        let imageData = file.dataURL;
        var url = "http://127.0.0.1:5000/classify_image";
        $.post(url, {
            image_data: imageData
        }, function(data, status) {
            if (!data || data.length==0) {
                $("#resultHolder").hide();
                for(let i=1; i<=10; i++) {
                    let curr = "#divClassTable" + i;
                    $(curr).hide();
                }                
                $("#error").show();
                return;
            }

            let classes = ["al_pacino", "benedict_cumberbatch", "emma_stone", "keanu_reeves", "michelle_williams", "morgan_freeman", "robert_downey_jr", "tom_hardy", "viola_davis", "will_smith"];
            let match = null;
            let bestScore = -1;
            for (let i=0;i<data.length;++i) {
                let maxScoreForThisClass = Math.max(...data[i].class_probability);
                if(maxScoreForThisClass > bestScore) {
                    match = data[i];
                    bestScore = maxScoreForThisClass;
                }
            }
            if (match) {
                $("#error").hide();
                // $("#resultHolder").show();
                // $("#resultHolder").html($(`[image-class="${match.class}"`).html());

                for(let i=0; i<data.length; i++) {
                    let curr_class = data[i];
                    document.getElementById(curr_class.class).style.border = "1rem solid #3BA5D1";
                    document.getElementById(curr_class.class).style.width = "13vw";
                    document.getElementById(curr_class.class).style.height = "13vw";
                    document.getElementById(curr_class.class + "2").style.color = "#3BA5D1";
                    document.getElementById(curr_class.class + "2").style.font = "15px bold";
                    document.getElementById(curr_class.class + "2").style.fontWeight = "700";
                }

                for(let i=1; i<=data.length; i++) {
                    let curr_class_id = "#divClassTable" + i;
                    $(curr_class_id).show();
                    let classDictionary = data[i-1].class_dictionary;
                    for(let imageClass in classDictionary) {
                        let index = classDictionary[imageClass];
                        let proabilityScore = data[i-1].class_probability[index];
                        let elementName = "#score_" + imageClass + i;
                        $(elementName).html(proabilityScore);
                    }
                }   
            }
            // dz.removeFile(file);            
        });
    });

    $("#submitBtn").on('click', function (e) {
        dz.processQueue();		
    });
}

$(document).ready(function() {
    console.log( "ready!" );
    $("#error").hide();
    $("#resultHolder").hide();
    for(let i=1; i<=10; i++) {
        let curr = "#divClassTable" + i;
        $(curr).hide();
    }                

    init();
});