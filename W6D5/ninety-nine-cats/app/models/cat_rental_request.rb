class CatRentalRequest < ApplicationRecord
    validates :status, inclusion: { in: ['Approved', 'Denied', 'Pending']}
    validates :cat_id, :start_date, :end_date, :status, presence: true
    validate :does_not_overlap_approved_request

    belongs_to :cat,
        primary_key: :id,
        foreign_key: :cat_id,
        class_name: 'Cat'

    def overlapping_requests
        curr_cat = self.cat_id
        curr_start_date = self.start_date 
        curr_end_date = self.end_date
        requests = CatRentalRequest.where("cat_id = ? and start_date between ? and ?",curr_cat, curr_start_date,curr_end_date)
        requests2 = CatRentalRequest.where("cat_id = ? and end_date between ? and ?",curr_cat, curr_start_date,curr_end_date)
        requests3 = CatRentalRequest.where("cat_id = ? and start_date < ? and end_date > ?",curr_cat, curr_start_date,curr_end_date)
        requests+= requests2 + requests3
        requests
    end

    def overlapping_approved_requests
        self.overlapping_requests.select { |request| request.status == "Approved"}

    end

    def does_not_overlap_approved_request
        if !overlapping_approved_requests.empty?
            errors.add(:start_date,"is already reserved for this cat")
        end
    end
end
