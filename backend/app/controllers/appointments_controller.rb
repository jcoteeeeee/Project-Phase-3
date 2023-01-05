class AppointmentsController < ApplicationController
    def index
        appointments = Appointment.all
        render json: appointments
    end
    
    def show 
        appointment = Appointment.find_by!(id: params[:id])
        render json: appointment   
    end 

    def create 

    end

    def update 

    end 

    def destroy 
        appointment = Appointment.find_by!(id: params[:id])
        appointment.destroy
    end 

end
