package com.example.application.views.main;

import com.vaadin.flow.component.ClientCallable;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@PageTitle("Main")
@Route(value = "")
public class MainView extends HorizontalLayout {

    private TextField barcode;
    private Button scan;

    public MainView() {
        barcode = new TextField("Barcode ");
        scan = new Button("Enter");
        scan.addClickListener(e -> {
            Notification.show("Barcode: " + barcode.getValue());
        });

        setMargin(true);
        setVerticalComponentAlignment(Alignment.END, scan, barcode);

        add(barcode, scan);
    }

    @ClientCallable
    public void barcode(){
        getElement().executeJs("$(document).ready(() => {$(document).keydown(e => {" +
                "if(e.key === 'Shift' || e.key === 'Unidentified'){return;}"+
                "this.$server.handleKeyPress(e.key)" +
                "})});");
    }

    private void handleKeyPress(String s){
        Notification.show("from client: " + s);

    }
}
