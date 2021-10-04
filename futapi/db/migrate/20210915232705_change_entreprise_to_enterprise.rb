class ChangeEntrepriseToEnterprise < ActiveRecord::Migration[6.1]
  def change
    rename_table :entreprises, :enterprises
  end
end
