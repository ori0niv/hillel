import $ from "jquery";
import "bootstrap";
import "./styles/main.scss";

$(document).ready(function () {
    $(".todo-item").on("click", function () {
        const taskText = $(this).data("task");
        $("#taskModalBody").text(taskText);
        $("#taskModal").modal("show");
    });
});

