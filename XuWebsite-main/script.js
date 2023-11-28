document.addEventListener("DOMContentLoaded", function () {
    // Function to create dot ranking for a profile
    function createDotRanking(profileId, containerId, selectedRank) {
        const rankingContainer = document.getElementById(containerId);

        const levels = ['Beginner', 'Novice', 'Intermediate', 'Advanced', 'Expert'];

        levels.forEach((level, index) => {
            const dotContainer = document.createElement("div");
            dotContainer.className = "dot-container";
            rankingContainer.appendChild(dotContainer);

            const dot = document.createElement("div");
            dot.className = "dot";
            dotContainer.appendChild(dot);

            const label = document.createElement("span");
            label.className = "label";
            label.textContent = level;
            dotContainer.appendChild(label);

            // Check if the current dot corresponds to the selected proficiency level
            if (index === selectedRank) {
                dot.classList.add('selected');
            }
        });
    }

    // Create dot ranking for Profile 1 with Intermediate level selected
    createDotRanking('profile1', 'ranking-container1', 1);

    // Create dot ranking for Profile 2 with Advanced level selected
    createDotRanking('profile2', 'ranking-container2', 1);

    // Add similar calls for profiles 3 to 10 with their respective selected proficiency levels
    createDotRanking('profile3', 'ranking-container3', 0);
    createDotRanking('profile4', 'ranking-container4', 1);
    createDotRanking('profile5', 'ranking-container5', 0);
    //createDotRanking('profile6', 'ranking-container6', 2);
    //createDotRanking('profile7', 'ranking-container7', 3);
    //createDotRanking('profile8', 'ranking-container8', 2);
    //createDotRanking('profile9', 'ranking-container9', 4);
    //createDotRanking('profile10', 'ranking-container10', 1);
});
