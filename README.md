def configure_aws_sso():
    sso_start_url = 'https://url/start'
    sso_region = 'us-east-1'
    sso_account_id = '1'
    sso_role_name = 'AWS_SUPPORT_ROLE'
    region = 'sa-east-1'
    output_format = 'json'

    config_directory = os.path.expanduser('~/.aws')
    config_file_path = os.path.join(config_directory, 'config')

    if not os.path.exists(config_directory):
        os.makedirs(config_directory)

    config_content = f"""
[profile sso-profile]
sso_start_url = {sso_start_url}
sso_region = {sso_region}
sso_account_id = {sso_account_id}
sso_role_name = {sso_role_name}
region = {region}
output = {output_format}
"""

    with open(config_file_path, 'a') as config_file:
        config_file.write(config_content)

    print('AWS SSO configuration completed successfully.')

# Exemplo de uso
configure_aws_sso()
